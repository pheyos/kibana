/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React, { useMemo } from 'react';

import { UrlStateContainer } from '../../utils/url_state';
import type { TextScale } from './log_view_configuration';
import { availableTextScales, useLogViewConfigurationContext } from './log_view_configuration';

interface LogTextviewUrlState {
  textScale?: TextScale;
  wrap?: boolean;
}

export const WithLogTextviewUrlState = () => {
  const { textScale, textWrap, setTextScale, setTextWrap } = useLogViewConfigurationContext();

  const urlState = useMemo(() => ({ textScale, wrap: textWrap }), [textScale, textWrap]);

  return (
    <UrlStateContainer
      urlState={urlState}
      urlStateKey="logTextview"
      mapToUrlState={mapToUrlState}
      onChange={(newUrlState) => {
        if (newUrlState && newUrlState.textScale) {
          setTextScale(newUrlState.textScale);
        }
        if (newUrlState && typeof newUrlState.wrap !== 'undefined') {
          setTextWrap(newUrlState.wrap);
        }
      }}
      onInitialize={(newUrlState) => {
        if (newUrlState && newUrlState.textScale) {
          setTextScale(newUrlState.textScale);
        }
        if (newUrlState && typeof newUrlState.wrap !== 'undefined') {
          setTextWrap(newUrlState.wrap);
        }
      }}
    />
  );
};

const mapToUrlState = (value: any): LogTextviewUrlState | undefined =>
  value
    ? {
        textScale: mapToTextScaleUrlState(value.textScale),
        wrap: mapToWrapUrlState(value.wrap),
      }
    : undefined;

const mapToTextScaleUrlState = (value: any) =>
  availableTextScales.includes(value) ? (value as TextScale) : undefined;

const mapToWrapUrlState = (value: any) => (typeof value === 'boolean' ? value : undefined);
