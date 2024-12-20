/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { Agent } from 'supertest';
import { EntityDefinition, EntityDefinitionUpdate } from '@kbn/entities-schema';
import { EntityDefinitionWithState } from '@kbn/entityManager-plugin/server/lib/entities/types';
import { EntitySourceDefinition } from '@kbn/entityManager-plugin/server/lib/v2/types';

export interface Auth {
  username: string;
  password: string;
}

export const getInstalledDefinitions = async (
  supertest: Agent,
  params: { auth?: Auth; id?: string; includeState?: boolean; perPage?: number } = {}
): Promise<{ definitions: EntityDefinitionWithState[] }> => {
  const { auth, id, includeState = true, perPage = 1000 } = params;
  let req = supertest
    .get(`/internal/entities/definition${id ? `/${id}` : ''}`)
    .query({ includeState, perPage })
    .set('kbn-xsrf', 'xxx');
  if (auth) {
    req = req.auth(auth.username, auth.password);
  }
  const response = await req.send().expect(200);
  return response.body;
};

export const installDefinition = async (
  supertest: Agent,
  params: {
    definition: EntityDefinition;
    installOnly?: boolean;
  }
) => {
  const { definition, installOnly = false } = params;
  return supertest
    .post('/internal/entities/definition')
    .query({ installOnly })
    .set('kbn-xsrf', 'xxx')
    .send(definition)
    .expect(200);
};

export const uninstallDefinition = (
  supertest: Agent,
  params: {
    id: string;
    deleteData?: boolean;
  }
) => {
  const { id, deleteData = false } = params;
  return supertest
    .delete(`/internal/entities/definition/${id}`)
    .query({ deleteData })
    .set('kbn-xsrf', 'xxx')
    .send()
    .expect(200);
};

export const updateDefinition = (
  supertest: Agent,
  params: {
    id: string;
    update: EntityDefinitionUpdate;
    expectedCode?: number;
  }
) => {
  const { id, update, expectedCode = 200 } = params;
  return supertest
    .patch(`/internal/entities/definition/${id}`)
    .set('kbn-xsrf', 'xxx')
    .send(update)
    .expect(expectedCode);
};

export const upgradeBuiltinDefinitions = async (
  supertest: Agent,
  definitions: EntityDefinition[]
): Promise<{ success: boolean }> => {
  const response = await supertest
    .post('/api/entities/upgrade_builtin_definitions')
    .set('kbn-xsrf', 'xxx')
    .send({ definitions })
    .expect(200);
  return response.body;
};

export const createEntityTypeDefinition = (
  supertest: Agent,
  params: {
    type: {
      id: string;
      display_name: string;
    };
  }
) => {
  return supertest
    .post('/internal/entities/v2/definitions/types')
    .set('kbn-xsrf', 'xxx')
    .send({ type: params.type })
    .expect(201);
};

export const createEntitySourceDefinition = (
  supertest: Agent,
  params: {
    source: EntitySourceDefinition;
  }
) => {
  return supertest
    .post('/internal/entities/v2/definitions/sources')
    .set('kbn-xsrf', 'xxx')
    .send({ source: params.source })
    .expect(201);
};

export const searchEntities = async (
  supertest: Agent,
  params: {
    type: string;
    start?: string;
    end?: string;
    metadata_fields?: string[];
    filters?: string[];
  },
  expectedCode?: number
) => {
  const response = await supertest
    .post('/internal/entities/v2/_search')
    .set('kbn-xsrf', 'xxx')
    .send(params)
    .expect(expectedCode ?? 200);
  return response.body;
};

export const countEntities = async (
  supertest: Agent,
  params: {
    types?: string[];
    filters?: string[];
    start?: string;
    end?: string;
  },
  expectedCode?: number
) => {
  const response = await supertest
    .post('/internal/entities/v2/_count')
    .set('kbn-xsrf', 'xxx')
    .send(params)
    .expect(expectedCode ?? 200);
  return response.body;
};
