/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

import type { Datatable } from '@kbn/expressions-plugin/common';
import type { LensAttributes } from '@kbn/lens-embeddable-utils';
import type { TextBasedPersistedState } from '@kbn/lens-plugin/public/datasources/form_based/esql_layer/types';
import type { TypedLensByValueInput } from '@kbn/lens-plugin/public';

export const enrichLensAttributesWithTablesData = ({
  attributes,
  table,
}: {
  attributes: LensAttributes;
  table: Datatable | undefined;
}): LensAttributes => {
  if (!attributes.state.datasourceStates.textBased) {
    return attributes;
  }

  const layers = attributes.state.datasourceStates.textBased?.layers;

  if (!layers) {
    return attributes;
  }

  const updatedAttributes = {
    ...attributes,
    state: {
      ...attributes.state,
      datasourceStates: {
        ...attributes.state.datasourceStates,
        textBased: {
          ...attributes.state.datasourceStates.textBased,
          layers: {} as TextBasedPersistedState['layers'],
        },
      },
    },
  };

  for (const key of Object.keys(layers)) {
    const newLayer = { ...layers[key], table };
    if (!table) {
      delete newLayer.table;
    }
    updatedAttributes.state.datasourceStates.textBased.layers[key] = newLayer;
  }

  return updatedAttributes;
};

export const removeTablesFromLensAttributes = (
  attributes: LensAttributes
): TypedLensByValueInput => {
  return { attributes: enrichLensAttributesWithTablesData({ attributes, table: undefined }) };
};
