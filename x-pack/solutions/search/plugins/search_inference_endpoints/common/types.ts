/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { Config, Secrets } from '@kbn/inference-endpoint-ui-common';

export enum APIRoutes {
  GET_INFERENCE_ENDPOINTS = '/internal/inference_endpoints/endpoints',
  INFERENCE_ENDPOINT = '/internal/inference_endpoint/endpoints/{type}/{id}',
  GET_INFERENCE_SERVICES = 'internal/inference_endpoints/_inference/_services',
}

export interface SearchInferenceEndpointsConfigType {
  ui: {
    enabled: boolean;
  };
}

export enum TaskTypes {
  completion = 'completion',
  rerank = 'rerank',
  sparse_embedding = 'sparse_embedding',
  text_embedding = 'text_embedding',
}

export type { InferenceProvider } from '@kbn/inference-endpoint-ui-common';

export interface InferenceEndpoint {
  config: Config;
  secrets: Secrets;
}
