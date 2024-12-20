/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { EuiFlexGroup, EuiFlexItem, EuiText } from '@elastic/eui';
import { css } from '@emotion/react';
import { DEFAULT_ATTACK_DISCOVERY_MAX_ALERTS } from '@kbn/elastic-assistant';
import React from 'react';

import { useKibana } from '../../../../common/lib/kibana';
import { getLoadingCalloutAlertsCount } from './get_loading_callout_alerts_count';
import * as i18n from '../translations';

const TEXT_COLOR = '#343741';

interface Props {
  alertsContextCount: number | null;
  localStorageAttackDiscoveryMaxAlerts: string | undefined;
}

const LoadingMessagesComponent: React.FC<Props> = ({
  alertsContextCount,
  localStorageAttackDiscoveryMaxAlerts,
}) => {
  const { theme } = useKibana().services;

  const isDarkMode = theme.getTheme().darkMode === true;

  const alertsCount = getLoadingCalloutAlertsCount({
    alertsContextCount,
    defaultMaxAlerts: DEFAULT_ATTACK_DISCOVERY_MAX_ALERTS,
    localStorageAttackDiscoveryMaxAlerts,
  });

  return (
    <EuiFlexGroup data-test-subj="loadingMessages" direction="column" gutterSize="none">
      <EuiFlexItem grow={false}>
        <EuiText
          color={isDarkMode ? 'subdued' : TEXT_COLOR}
          css={css`
            font-weight: 600;
          `}
          data-test-subj="attackDiscoveryGenerationInProgress"
          size="s"
        >
          {i18n.ATTACK_DISCOVERY_GENERATION_IN_PROGRESS}
        </EuiText>
      </EuiFlexItem>

      <EuiFlexItem grow={false}>
        <EuiText
          color={isDarkMode ? 'subdued' : TEXT_COLOR}
          css={css`
            font-weight: 400;
          `}
          data-test-subj="aisCurrentlyAnalyzing"
          size="s"
        >
          {i18n.AI_IS_CURRENTLY_ANALYZING(alertsCount)}
        </EuiText>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

LoadingMessagesComponent.displayName = 'LoadingMessages';

export const LoadingMessages = React.memo(LoadingMessagesComponent);
