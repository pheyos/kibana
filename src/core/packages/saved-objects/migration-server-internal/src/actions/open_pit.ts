/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

import * as Either from 'fp-ts/Either';
import * as TaskEither from 'fp-ts/TaskEither';
import type { ElasticsearchClient } from '@kbn/core-elasticsearch-server';
import {
  catchRetryableEsClientErrors,
  type RetryableEsClientError,
} from './catch_retryable_es_client_errors';

/** @internal */
export interface OpenPitResponse {
  pitId: string;
}

/** @internal */
export interface OpenPitParams {
  client: ElasticsearchClient;
  index: string;
}
// how long ES should keep PIT alive
export const DEFAULT_PIT_KEEP_ALIVE = '10m';
/*
 * Creates a lightweight view of data when the request has been initiated.
 * See https://www.elastic.co/guide/en/elasticsearch/reference/current/point-in-time-api.html
 * */
export const openPit =
  ({
    client,
    index,
  }: OpenPitParams): TaskEither.TaskEither<RetryableEsClientError, OpenPitResponse> =>
  () => {
    return client
      .openPointInTime({
        index,
        keep_alive: DEFAULT_PIT_KEEP_ALIVE,
      })
      .then((response) => Either.right({ pitId: response.id }))
      .catch(catchRetryableEsClientErrors);
  };
