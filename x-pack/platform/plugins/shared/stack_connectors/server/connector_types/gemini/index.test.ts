/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { actionsConfigMock } from '@kbn/actions-plugin/server/actions_config.mock';
import type { ActionsConfigurationUtilities } from '@kbn/actions-plugin/server/actions_config';
import axios from 'axios';
import { configValidator, getConnectorType } from '.';
import type { Config, Secrets } from '../../../common/gemini/types';
import type { SubActionConnectorType } from '@kbn/actions-plugin/server/sub_action_framework/types';
import { DEFAULT_GEMINI_MODEL } from '../../../common/gemini/constants';

jest.mock('axios');
jest.mock('@kbn/actions-plugin/server/lib/axios_utils', () => {
  const originalUtils = jest.requireActual('@kbn/actions-plugin/server/lib/axios_utils');
  return {
    ...originalUtils,
    request: jest.fn(),
    patch: jest.fn(),
  };
});

axios.create = jest.fn(() => axios);

let connectorType: SubActionConnectorType<Config, Secrets>;
let configurationUtilities: jest.Mocked<ActionsConfigurationUtilities>;

describe('Gemini Connector', () => {
  beforeEach(() => {
    configurationUtilities = actionsConfigMock.create();
    connectorType = getConnectorType();
  });
  test('exposes the connector as `Google Gemini` with id `.gemini`', () => {
    expect(connectorType.id).toEqual('.gemini');
    expect(connectorType.name).toEqual('Google Gemini');
  });

  describe('config validation', () => {
    test('config validation passes when only required fields are provided', () => {
      const config: Config = {
        apiUrl: `https://us-central1-aiplatform.googleapis.com/v1/projects/test-gcpProject/locations/us-central-1/publishers/google/models/${DEFAULT_GEMINI_MODEL}:generateContent`,
        defaultModel: DEFAULT_GEMINI_MODEL,
        gcpRegion: 'us-central-1',
        gcpProjectID: 'test-gcpProject',
      };

      expect(configValidator(config, { configurationUtilities })).toEqual(config);
    });

    test('config validation failed when a url is invalid', () => {
      const config: Config = {
        apiUrl: 'example.com/do-something',
        defaultModel: DEFAULT_GEMINI_MODEL,
        gcpRegion: 'us-central-1',
        gcpProjectID: 'test-gcpProject',
      };
      expect(() => {
        configValidator(config, { configurationUtilities });
      }).toThrowErrorMatchingInlineSnapshot(
        `"Error configuring Google Gemini action: Error: URL Error: Invalid URL: example.com/do-something"`
      );
    });

    test('config validation returns an error if the specified URL is not added to allowedHosts', () => {
      const configUtils = {
        ...actionsConfigMock.create(),
        ensureUriAllowed: (_: string) => {
          throw new Error(`target url is not present in allowedHosts`);
        },
      };

      const config: Config = {
        apiUrl: 'http://mylisteningserver.com:9200/endpoint',
        defaultModel: DEFAULT_GEMINI_MODEL,
        gcpRegion: 'us-central-1',
        gcpProjectID: 'test-gcpProject',
      };

      expect(() => {
        configValidator(config, { configurationUtilities: configUtils });
      }).toThrowErrorMatchingInlineSnapshot(
        `"Error configuring Google Gemini action: Error: error validating url: target url is not present in allowedHosts"`
      );
    });
  });
});
