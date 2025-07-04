/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

import supertest from 'supertest';
import querystring from 'querystring';

import { savedObjectsClientMock } from '@kbn/core-saved-objects-api-server-mocks';
import type { ICoreUsageStatsClient } from '@kbn/core-usage-data-base-server-internal';
import {
  coreUsageStatsClientMock,
  coreUsageDataServiceMock,
} from '@kbn/core-usage-data-server-mocks';
import {
  createHiddenTypeVariants,
  setupServer,
  SetupServerReturn,
} from '@kbn/core-test-helpers-test-utils';
import { loggerMock } from '@kbn/logging-mocks';
import {
  registerFindRoute,
  type InternalSavedObjectsRequestHandlerContext,
} from '@kbn/core-saved-objects-server-internal';
import { deprecationMock, setupConfig } from './routes_test_utils';

const testTypes = [
  { name: 'index-pattern', hide: false },
  { name: 'visualization', hide: false },
  { name: 'dashboard', hide: false },
  { name: 'foo', hide: false },
  { name: 'bar', hide: false },
  { name: 'hidden-type', hide: true },
  { name: 'hidden-from-http', hide: false, hideFromHttpApis: true },
];
describe('GET /api/saved_objects/_find', () => {
  let server: SetupServerReturn['server'];
  let createRouter: SetupServerReturn['createRouter'];
  let handlerContext: SetupServerReturn['handlerContext'];
  let savedObjectsClient: ReturnType<typeof savedObjectsClientMock.create>;
  let coreUsageStatsClient: jest.Mocked<ICoreUsageStatsClient>;
  let loggerWarnSpy: jest.SpyInstance;
  let registrationSpy: jest.SpyInstance;

  const clientResponse = {
    total: 0,
    saved_objects: [],
    per_page: 0,
    page: 0,
  };

  beforeEach(async () => {
    ({ server, createRouter, handlerContext } = await setupServer());

    handlerContext.savedObjects.typeRegistry.getType.mockImplementation((typename: string) => {
      return testTypes
        .map((typeDesc) => createHiddenTypeVariants(typeDesc))
        .find((fullTest) => fullTest.name === typename);
    });

    savedObjectsClient = handlerContext.savedObjects.client;

    savedObjectsClient.find.mockResolvedValue(clientResponse);

    const router = createRouter<InternalSavedObjectsRequestHandlerContext>('/api/saved_objects/');
    coreUsageStatsClient = coreUsageStatsClientMock.create();
    coreUsageStatsClient.incrementSavedObjectsFind.mockRejectedValue(new Error('Oh no!')); // intentionally throw this error, which is swallowed, so we can assert that the operation does not fail
    const coreUsageData = coreUsageDataServiceMock.createSetupContract(coreUsageStatsClient);

    const logger = loggerMock.create();
    loggerWarnSpy = jest.spyOn(logger, 'warn').mockImplementation();
    registrationSpy = jest.spyOn(router, 'get');

    const config = setupConfig();
    const access = 'public';

    registerFindRoute(router, {
      config,
      coreUsageData,
      logger,
      access,
      deprecationInfo: deprecationMock,
    });

    await server.start();
  });

  afterEach(async () => {
    await server.stop();
  });

  it('returns with status 400 when type is missing', async () => {
    const result = await supertest(server.listener)
      .get('/api/saved_objects/_find')
      .set('x-elastic-internal-origin', 'kibana')
      .expect(400);

    expect(result.body.message).toContain(
      '[request query.type]: expected at least one defined value'
    );
  });

  it('returns with status 400 when type is hidden from the HTTP APIs', async () => {
    const findResponse = {
      error: 'Bad Request',
      message: 'Unsupported saved object type(s): hidden-from-http: Bad Request',
      statusCode: 400,
    };
    const result = await supertest(server.listener)
      .get('/api/saved_objects/_find?type=hidden-from-http')
      .set('x-elastic-internal-origin', 'kibana')
      .expect(400);

    expect(result.body).toEqual(findResponse);
  });

  it('returns with status 200 when type is hidden', async () => {
    const findResponse = {
      total: 0,
      per_page: 0,
      page: 0,
      saved_objects: [],
    };
    const result = await supertest(server.listener)
      .get('/api/saved_objects/_find?type=hidden-type')
      .set('x-elastic-internal-origin', 'kibana')
      .expect(200);

    expect(result.body).toEqual(findResponse);
  });

  it('formats successful response and records usage stats', async () => {
    const findResponse = {
      total: 2,
      per_page: 2,
      page: 1,
      saved_objects: [
        {
          type: 'index-pattern',
          id: 'logstash-*',
          title: 'logstash-*',
          timeFieldName: '@timestamp',
          notExpandable: true,
          attributes: {},
          score: 1,
          references: [],
          namespaces: ['default'],
        },
        {
          type: 'index-pattern',
          id: 'stocks-*',
          title: 'stocks-*',
          timeFieldName: '@timestamp',
          notExpandable: true,
          attributes: {},
          score: 1,
          references: [],
          namespaces: ['default'],
        },
      ],
    };
    savedObjectsClient.find.mockResolvedValue(findResponse);

    const result = await supertest(server.listener)
      .get('/api/saved_objects/_find?type=index-pattern')
      .set('x-elastic-internal-origin', 'kibana')
      .expect(200);

    expect(result.body).toEqual(findResponse);
    expect(coreUsageStatsClient.incrementSavedObjectsFind).toHaveBeenCalledWith({
      request: expect.anything(),
      types: ['index-pattern'],
    });
  });

  it('calls upon savedObjectClient.find with defaults', async () => {
    await supertest(server.listener)
      .get('/api/saved_objects/_find?type=foo&type=bar')
      .set('x-elastic-internal-origin', 'kibana')
      .expect(200);

    expect(savedObjectsClient.find).toHaveBeenCalledTimes(1);

    const options = savedObjectsClient.find.mock.calls[0][0];
    expect(options).toEqual({
      perPage: 20,
      page: 1,
      type: ['foo', 'bar'],
      defaultSearchOperator: 'OR',
      hasReferenceOperator: 'OR',
      hasNoReferenceOperator: 'OR',
      migrationVersionCompatibility: 'compatible',
    });
  });

  it('accepts the query parameter page/per_page', async () => {
    await supertest(server.listener)
      .get('/api/saved_objects/_find?type=foo&per_page=10&page=50')
      .set('x-elastic-internal-origin', 'kibana')
      .expect(200);

    expect(savedObjectsClient.find).toHaveBeenCalledTimes(1);

    const [[options]] = savedObjectsClient.find.mock.calls;
    expect(options).toEqual(expect.objectContaining({ perPage: 10, page: 50 }));
  });

  it('accepts the optional query parameter has_reference', async () => {
    await supertest(server.listener)
      .get('/api/saved_objects/_find?type=foo')
      .set('x-elastic-internal-origin', 'kibana')
      .expect(200);

    expect(savedObjectsClient.find).toHaveBeenCalledTimes(1);

    const options = savedObjectsClient.find.mock.calls[0][0];
    expect(options.hasReference).toBe(undefined);
  });

  it('accepts the query parameter has_reference as an object', async () => {
    const references = querystring.escape(
      JSON.stringify({
        id: '1',
        type: 'reference',
      })
    );
    await supertest(server.listener)
      .get(`/api/saved_objects/_find?type=foo&has_reference=${references}`)
      .set('x-elastic-internal-origin', 'kibana')
      .expect(200);

    expect(savedObjectsClient.find).toHaveBeenCalledTimes(1);

    const options = savedObjectsClient.find.mock.calls[0][0];
    expect(options.hasReference).toEqual({
      id: '1',
      type: 'reference',
    });
  });

  it('accepts the query parameter has_reference as an array', async () => {
    const references = querystring.escape(
      JSON.stringify([
        {
          id: '1',
          type: 'reference',
        },
        {
          id: '2',
          type: 'reference',
        },
      ])
    );
    await supertest(server.listener)
      .get(`/api/saved_objects/_find?type=foo&has_reference=${references}`)
      .set('x-elastic-internal-origin', 'kibana')
      .expect(200);

    expect(savedObjectsClient.find).toHaveBeenCalledTimes(1);

    const options = savedObjectsClient.find.mock.calls[0][0];
    expect(options.hasReference).toEqual([
      {
        id: '1',
        type: 'reference',
      },
      {
        id: '2',
        type: 'reference',
      },
    ]);
  });

  it('accepts the query parameter has_reference_operator', async () => {
    await supertest(server.listener)
      .get('/api/saved_objects/_find?type=foo&has_reference_operator=AND')
      .set('x-elastic-internal-origin', 'kibana')
      .expect(200);

    expect(savedObjectsClient.find).toHaveBeenCalledTimes(1);

    const options = savedObjectsClient.find.mock.calls[0][0];
    expect(options).toEqual(
      expect.objectContaining({
        hasReferenceOperator: 'AND',
      })
    );
  });

  it('accepts the query parameter has_no_reference as an object', async () => {
    const references = querystring.escape(
      JSON.stringify({
        id: '1',
        type: 'reference',
      })
    );
    await supertest(server.listener)
      .get(`/api/saved_objects/_find?type=foo&has_no_reference=${references}`)
      .set('x-elastic-internal-origin', 'kibana')
      .expect(200);

    expect(savedObjectsClient.find).toHaveBeenCalledTimes(1);

    const options = savedObjectsClient.find.mock.calls[0][0];
    expect(options.hasNoReference).toEqual({
      id: '1',
      type: 'reference',
    });
  });

  it('accepts the query parameter has_no_reference as an array', async () => {
    const references = querystring.escape(
      JSON.stringify([
        {
          id: '1',
          type: 'reference',
        },
        {
          id: '2',
          type: 'reference',
        },
      ])
    );
    await supertest(server.listener)
      .get(`/api/saved_objects/_find?type=foo&has_no_reference=${references}`)
      .set('x-elastic-internal-origin', 'kibana')
      .expect(200);

    expect(savedObjectsClient.find).toHaveBeenCalledTimes(1);

    const options = savedObjectsClient.find.mock.calls[0][0];
    expect(options.hasNoReference).toEqual([
      {
        id: '1',
        type: 'reference',
      },
      {
        id: '2',
        type: 'reference',
      },
    ]);
  });

  it('accepts the query parameter has_no_reference_operator', async () => {
    await supertest(server.listener)
      .get('/api/saved_objects/_find?type=foo&has_no_reference_operator=AND')
      .set('x-elastic-internal-origin', 'kibana')
      .expect(200);

    expect(savedObjectsClient.find).toHaveBeenCalledTimes(1);

    const options = savedObjectsClient.find.mock.calls[0][0];
    expect(options).toEqual(
      expect.objectContaining({
        hasNoReferenceOperator: 'AND',
      })
    );
  });

  it('accepts the query parameter search_fields', async () => {
    await supertest(server.listener)
      .get('/api/saved_objects/_find?type=foo&search_fields=title')
      .set('x-elastic-internal-origin', 'kibana')
      .expect(200);

    expect(savedObjectsClient.find).toHaveBeenCalledTimes(1);

    const options = savedObjectsClient.find.mock.calls[0][0];
    expect(options).toEqual(
      expect.objectContaining({
        searchFields: ['title'],
      })
    );
  });

  it('accepts the query parameter fields as a string', async () => {
    await supertest(server.listener)
      .get('/api/saved_objects/_find?type=foo&fields=title')
      .set('x-elastic-internal-origin', 'kibana')
      .expect(200);

    expect(savedObjectsClient.find).toHaveBeenCalledTimes(1);

    const options = savedObjectsClient.find.mock.calls[0][0];
    expect(options).toEqual(
      expect.objectContaining({
        fields: ['title'],
      })
    );
  });

  it('accepts the query parameter fields as an array', async () => {
    await supertest(server.listener)
      .get('/api/saved_objects/_find?type=foo&fields=title&fields=description')
      .set('x-elastic-internal-origin', 'kibana')
      .expect(200);

    expect(savedObjectsClient.find).toHaveBeenCalledTimes(1);

    const options = savedObjectsClient.find.mock.calls[0][0];
    expect(options).toEqual(
      expect.objectContaining({
        fields: ['title', 'description'],
      })
    );
  });

  it('accepts the query parameter type as a string', async () => {
    await supertest(server.listener)
      .get('/api/saved_objects/_find?type=index-pattern')
      .set('x-elastic-internal-origin', 'kibana')
      .expect(200);

    expect(savedObjectsClient.find).toHaveBeenCalledTimes(1);

    const options = savedObjectsClient.find.mock.calls[0][0];
    expect(options).toEqual(
      expect.objectContaining({
        type: ['index-pattern'],
      })
    );
  });

  it('accepts the query parameter type as an array', async () => {
    await supertest(server.listener)
      .get('/api/saved_objects/_find?type=index-pattern&type=visualization')
      .set('x-elastic-internal-origin', 'kibana')
      .expect(200);

    expect(savedObjectsClient.find).toHaveBeenCalledTimes(1);

    const options = savedObjectsClient.find.mock.calls[0][0];
    expect(options).toEqual(
      expect.objectContaining({
        type: ['index-pattern', 'visualization'],
      })
    );
  });

  it('accepts the query parameter namespaces as a string', async () => {
    await supertest(server.listener)
      .get('/api/saved_objects/_find?type=index-pattern&namespaces=foo')
      .set('x-elastic-internal-origin', 'kibana')
      .expect(200);

    expect(savedObjectsClient.find).toHaveBeenCalledTimes(1);

    const options = savedObjectsClient.find.mock.calls[0][0];
    expect(options).toEqual(
      expect.objectContaining({
        namespaces: ['foo'],
      })
    );
  });

  it('accepts the query parameter namespaces as an array', async () => {
    await supertest(server.listener)
      .get('/api/saved_objects/_find?type=index-pattern&namespaces=default&namespaces=foo')
      .set('x-elastic-internal-origin', 'kibana')
      .expect(200);

    expect(savedObjectsClient.find).toHaveBeenCalledTimes(1);

    const options = savedObjectsClient.find.mock.calls[0][0];
    expect(options).toEqual(
      expect.objectContaining({
        namespaces: ['default', 'foo'],
      })
    );
  });

  it('logs a warning message when called', async () => {
    await supertest(server.listener)
      .get('/api/saved_objects/_find?type=foo&type=bar')
      .set('x-elastic-internal-origin', 'kibana')
      .expect(200);
    expect(loggerWarnSpy).toHaveBeenCalledTimes(1);
  });

  it('passes deprecation configuration to the router arguments', async () => {
    await supertest(server.listener)
      .get('/api/saved_objects/_find?type=foo&type=bar')
      .set('x-elastic-internal-origin', 'kibana')
      .expect(200);
    expect(registrationSpy.mock.calls[0][0]).toMatchObject({
      options: { deprecated: deprecationMock },
    });
  });
});
