/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React from 'react';

import { i18n } from '@kbn/i18n';

import type { EuiContainedStepProps } from '@elastic/eui/src/components/steps/steps';

import type { EuiSwitchProps } from '@elastic/eui';

import type { GetOneEnrollmentAPIKeyResponse } from '../../../../common/types/rest_spec/enrollment_api_key';

import { InstallSection } from '../../enrollment_instructions/install_section';
import type { CommandsByPlatform } from '../../../applications/fleet/components/fleet_server_instructions/utils/install_command_utils';

import type { K8sMode, CloudSecurityIntegration } from '../types';

export const InstallManagedAgentStep = ({
  installCommand,
  selectedApiKeyId,
  apiKeyData,
  isK8s,
  cloudSecurityIntegration,
  enrollToken,
  fleetServerHost,
  isComplete,
  fullCopyButton,
  onCopy,
  rootIntegrations,
  showCompleteAgentInstructions,
  onChangeShowCompleteAgentInstructions,
}: {
  selectedApiKeyId?: string;
  apiKeyData?: GetOneEnrollmentAPIKeyResponse | null;
  isK8s?: K8sMode;
  cloudSecurityIntegration?: CloudSecurityIntegration | undefined;
  enrollToken?: string;
  fleetServerHost?: string;
  installCommand: CommandsByPlatform;
  isComplete?: boolean;
  fullCopyButton?: boolean;
  onCopy?: () => void;
  rootIntegrations?: Array<{ name: string; title: string }>;
  showCompleteAgentInstructions: boolean;
  onChangeShowCompleteAgentInstructions: EuiSwitchProps['onChange'];
}): EuiContainedStepProps => {
  const nonCompleteStatus = selectedApiKeyId ? undefined : 'disabled';
  const status = isComplete ? 'complete' : nonCompleteStatus;
  return {
    status,
    title: i18n.translate('xpack.fleet.agentEnrollment.stepEnrollAndRunAgentTitle', {
      defaultMessage: 'Install Elastic Agent on your host',
    }),
    children:
      selectedApiKeyId && apiKeyData ? (
        <InstallSection
          installCommand={installCommand}
          isK8s={isK8s}
          cloudSecurityIntegration={cloudSecurityIntegration}
          enrollToken={enrollToken}
          onCopy={onCopy}
          fullCopyButton={fullCopyButton}
          fleetServerHost={fleetServerHost}
          rootIntegrations={rootIntegrations}
          showCompleteAgentInstructions={showCompleteAgentInstructions}
          onChangeShowCompleteAgentInstructions={onChangeShowCompleteAgentInstructions}
        />
      ) : (
        <React.Fragment />
      ),
  };
};
