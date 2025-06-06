/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { useEuiTheme } from '@elastic/eui';
import { css } from '@emotion/css';

export const useStyles = () => {
  const { euiTheme } = useEuiTheme();

  const gridContainer = css`
    min-height: 400px;
    display: flex;
    flex-direction: column;
  `;

  const gridProgressBar = css`
    flex-shrink: 0;
    width: 100%;
  `;

  const gridStyle = css`
    & .euiDataGrid__loading {
      margin-top: auto;
      margin-bottom: auto;
    }
    & .euiDataGridHeaderCell__icon {
      display: none;
    }
    & .euiDataGrid__controls {
      border-bottom: none;
      margin-bottom: ${euiTheme.size.s};
      border-top: none;
    }
    & .euiDataGrid--headerUnderline .euiDataGridHeaderCell {
      border-bottom: ${euiTheme.border.width.thick} solid ${euiTheme.colors.fullShade};
    }
    & .euiButtonIcon[data-test-subj='docTableExpandToggleColumn'] {
      color: ${euiTheme.colors.primary};
    }

    & .euiDataGridRowCell {
      font-size: ${euiTheme.size.m};

      // Vertically center content
      .euiDataGridRowCell__content {
        display: flex;
        align-items: center;
      }
    }
    & .euiDataGridRowCell.euiDataGridRowCell--numeric {
      text-align: left;
    }
    & .euiDataGridHeaderCell--numeric .euiDataGridHeaderCell__content {
      flex-grow: 0;
      text-align: left;
    }
    & .assetInventoryDataTableTotal {
      font-size: ${euiTheme.size.m};
      font-weight: ${euiTheme.font.weight.bold};
      border-right: ${euiTheme.border.thin};
      margin-inline: ${euiTheme.size.s};
      padding-right: ${euiTheme.size.m};
    }

    & [data-test-subj='docTableExpandToggleColumn'] svg {
      inline-size: 16px;
      block-size: 16px;
    }

    & .unifiedDataTable__cellValue {
      font-family: ${euiTheme.font.family};
    }
    & .unifiedDataTable__inner .euiDataGrid__controls {
      border-top: none;
    }
    & .euiDataGrid__leftControls {
      flex-grow: 1;
    }
  `;

  const groupBySelector = css`
    margin-left: auto;
  `;

  return {
    gridStyle,
    groupBySelector,
    gridContainer,
    gridProgressBar,
  };
};
