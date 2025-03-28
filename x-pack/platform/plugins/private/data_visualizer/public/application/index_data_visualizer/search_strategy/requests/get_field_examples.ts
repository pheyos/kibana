/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
import type { estypes } from '@elastic/elasticsearch';
import { get } from 'lodash';
import { combineLatest, of } from 'rxjs';
import { catchError, map } from 'rxjs';
import type {
  IKibanaSearchResponse,
  IKibanaSearchRequest,
  ISearchOptions,
} from '@kbn/search-types';
import type { ISearchStart } from '@kbn/data-plugin/public';
import { isPopulatedObject } from '@kbn/ml-is-populated-object';
import type { SearchHit } from '@elastic/elasticsearch/lib/api/types';
import { extractErrorProperties } from '@kbn/ml-error-utils';
import { getUniqGeoOrStrExamples } from '../../../common/util/example_utils';
import type {
  Field,
  FieldExamples,
  FieldStatsCommonRequestParams,
  FieldStatsError,
} from '../../../../../common/types/field_stats';
import { isIKibanaSearchResponse } from '../../../../../common/types/field_stats';
import { MAX_EXAMPLES_DEFAULT } from './constants';
import { buildFilterCriteria } from '../../../../../common/utils/build_query_filters';

export const getFieldExamplesRequest = (params: FieldStatsCommonRequestParams, field: Field) => {
  const { index, timeFieldName, earliestMs, latestMs, query, runtimeFieldMap, maxExamples } =
    params;

  // Request at least 100 docs so that we have a chance of obtaining
  // 'maxExamples' of the field.
  const size = Math.max(100, maxExamples ?? MAX_EXAMPLES_DEFAULT);
  const filterCriteria = buildFilterCriteria(timeFieldName, earliestMs, latestMs, query);

  // Use an exists filter to return examples of the field.
  if (Array.isArray(filterCriteria)) {
    filterCriteria.push({
      exists: { field: field.fieldName },
    });
  }

  const searchBody = {
    fields: [field.fieldName],
    _source: false,
    query: {
      bool: {
        filter: filterCriteria,
      },
    },
    ...(isPopulatedObject(runtimeFieldMap) ? { runtime_mappings: runtimeFieldMap } : {}),
  };

  return {
    index,
    size,
    ...searchBody,
  };
};

export const fetchFieldsExamples = (
  dataSearch: ISearchStart,
  params: FieldStatsCommonRequestParams,
  fields: Field[],
  options: ISearchOptions
) => {
  const { maxExamples } = params;
  return combineLatest(
    fields.map((field) => {
      const request: estypes.SearchRequest = getFieldExamplesRequest(params, field);

      return dataSearch
        .search<IKibanaSearchRequest, IKibanaSearchResponse>({ params: request }, options)
        .pipe(
          catchError((e) =>
            of({
              fieldName: field.fieldName,
              fields,
              error: extractErrorProperties(e),
            } as FieldStatsError)
          ),
          map((resp) => {
            if (!isIKibanaSearchResponse(resp)) return resp;
            const body = resp.rawResponse;
            const stats = {
              fieldName: field.fieldName,
              examples: [] as unknown[],
            } as FieldExamples;

            if (body.hits.total > 0) {
              const hits = body.hits.hits;
              const processedDocs = hits.map((hit: SearchHit) => {
                const doc: object[] | undefined = get(hit.fields, field.fieldName);
                return Array.isArray(doc) && doc.length > 0 ? doc[0] : doc;
              });
              stats.examples = getUniqGeoOrStrExamples(processedDocs, maxExamples);
            }

            return stats;
          })
        );
    })
  );
};
