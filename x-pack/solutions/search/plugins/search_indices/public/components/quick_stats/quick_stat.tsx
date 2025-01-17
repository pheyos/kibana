/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React from 'react';

import {
  EuiAccordion,
  EuiDescriptionList,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiPanel,
  EuiTitle,
  EuiText,
  useEuiTheme,
  useGeneratedHtmlId,
  EuiIconTip,
} from '@elastic/eui';

interface BaseQuickStatProps {
  icon: string;
  iconColor: string;
  title: string;
  secondaryTitle: React.ReactNode;
  open: boolean;
  content?: React.ReactNode;
  stats: Array<{
    title: string;
    description: NonNullable<React.ReactNode>;
  }>;
  setOpen: (open: boolean) => void;
  first?: boolean;
  tooltipContent?: string;
}

export const QuickStat: React.FC<BaseQuickStatProps> = ({
  icon,
  title,
  stats,
  open,
  setOpen,
  first,
  secondaryTitle,
  iconColor,
  content,
  tooltipContent,
  ...rest
}) => {
  const { euiTheme } = useEuiTheme();

  const id = useGeneratedHtmlId({
    prefix: 'formAccordion',
    suffix: title.replace(/\s/g, '_'),
  });

  return (
    <EuiAccordion
      forceState={open ? 'open' : 'closed'}
      onToggle={() => setOpen(!open)}
      paddingSize="none"
      id={id}
      buttonElement="div"
      arrowDisplay="right"
      {...rest}
      css={{
        borderLeft: euiTheme.border.thin,
        ...(first ? { borderLeftWidth: 0 } : {}),
        '.euiAccordion__arrow': {
          marginRight: euiTheme.size.s,
        },
        '.euiAccordion__triggerWrapper': {
          background: euiTheme.colors.emptyShade,
        },
        '.euiAccordion__children': {
          borderTop: euiTheme.border.thin,
          padding: euiTheme.size.m,
        },
      }}
      buttonContent={
        <EuiPanel hasShadow={false} hasBorder={false} paddingSize="s">
          <EuiFlexGroup alignItems="center" gutterSize="s">
            <EuiFlexItem grow={false}>
              <EuiIcon type={icon} color={iconColor} />
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiTitle size="xxs">
                <h4>{title}</h4>
              </EuiTitle>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiText size="s" color="subdued">
                {secondaryTitle}
              </EuiText>
            </EuiFlexItem>
            {tooltipContent && (
              <EuiFlexItem>
                <EuiIconTip content={tooltipContent} />
              </EuiFlexItem>
            )}
          </EuiFlexGroup>
        </EuiPanel>
      }
    >
      {content ? (
        content
      ) : (
        <EuiFlexGroup>
          <EuiFlexItem grow={false}>
            <EuiDescriptionList
              type="column"
              listItems={stats}
              columnWidths={[3, 1]}
              compressed
              descriptionProps={{
                color: 'subdued',
              }}
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      )}
    </EuiAccordion>
  );
};
