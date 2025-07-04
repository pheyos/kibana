/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React, { useMemo } from 'react';
import useToggle from 'react-use/lib/useToggle';

import {
  EuiButtonEmpty,
  EuiModalFooter,
  EuiFlyout,
  EuiFlyoutHeader,
  EuiTitle,
  EuiFlyoutBody,
  EuiInMemoryTable,
  EuiFlexGroup,
  EuiButton,
  EuiPortal,
} from '@elastic/eui';
import { i18n } from '@kbn/i18n';
import { FormattedMessage } from '@kbn/i18n-react';
import type { EuiBasicTableColumn } from '@elastic/eui';
import { EuiButtonIcon } from '@elastic/eui';
import type { SavedViewOperations, SavedViewItem } from '../../../common/saved_views';

export interface ManageViewsFlyoutProps<TSavedViewState extends SavedViewItem> {
  views?: SavedViewItem[];
  loading: boolean;
  onClose(): void;
  onMakeDefaultView: SavedViewOperations<TSavedViewState>['setDefaultViewById'];
  onSwitchView: SavedViewOperations<TSavedViewState>['switchViewById'];
  onDeleteView: SavedViewOperations<TSavedViewState>['deleteViewById'];
  triggerRef: React.RefObject<HTMLButtonElement>;
}

interface DeleteConfimationProps {
  isDisabled?: boolean;
  onConfirm(): void;
}

const searchConfig = {
  box: { incremental: true },
};

export function ManageViewsFlyout<TSavedViewState extends SavedViewItem>({
  onClose,
  views = [],
  onSwitchView,
  onMakeDefaultView,
  onDeleteView,
  loading,
  triggerRef,
}: ManageViewsFlyoutProps<TSavedViewState>) {
  // Add name as top level property to allow in memory search
  const namedViews = useMemo(() => views.map(addOwnName), [views]);

  const renderName = (name: string, item: SavedViewItem) => (
    <EuiButtonEmpty
      aria-label={i18n.translate('xpack.infra.renderName.button.ariaLabel', {
        defaultMessage: 'Switch to {name}',
        values: { name },
      })}
      key={item.id}
      data-test-subj="infraRenderNameButton"
      onClick={() => {
        onSwitchView(item.id);
        onClose();
      }}
    >
      {name}
    </EuiButtonEmpty>
  );

  const renderDeleteAction = (item: SavedViewItem) => {
    return (
      <DeleteConfimation
        key={item.id}
        isDisabled={item.attributes.isDefault}
        onConfirm={() => {
          onDeleteView(item.id);
        }}
      />
    );
  };

  const renderMakeDefaultAction = (item: SavedViewItem) => {
    return (
      <EuiButtonIcon
        aria-label={i18n.translate('xpack.infra.renderMakeDefaultAction.defaultButton.ariaLabel', {
          defaultMessage: 'Mark as default',
        })}
        key={item.id}
        data-test-subj="infraRenderMakeDefaultActionButton"
        iconType={item.attributes.isDefault ? 'starFilled' : 'starEmpty'}
        size="s"
        onClick={() => {
          onMakeDefaultView(item.id);
        }}
      />
    );
  };

  const handleCloseFlyout = () => {
    onClose();
    requestAnimationFrame(() => {
      triggerRef.current?.focus();
    });
  };

  const columns: Array<EuiBasicTableColumn<SavedViewItem>> = [
    {
      field: 'name',
      name: i18n.translate('xpack.infra.openView.columnNames.name', { defaultMessage: 'Name' }),
      sortable: true,
      truncateText: true,
      render: renderName,
    },
    {
      name: i18n.translate('xpack.infra.openView.columnNames.actions', {
        defaultMessage: 'Actions',
      }),
      actions: [
        {
          render: renderMakeDefaultAction,
        },
        {
          available: (item) => !item.attributes.isStatic,
          render: renderDeleteAction,
        },
      ],
    },
  ];

  return (
    <EuiPortal>
      <EuiFlyout
        onClose={handleCloseFlyout}
        data-test-subj="loadViewsFlyout"
        aria-label={i18n.translate('xpack.infra.openView.flyout.ariaLabel', {
          defaultMessage: 'Manage saved views dialog',
        })}
      >
        <EuiFlyoutHeader>
          <EuiTitle size="m">
            <h2>
              <FormattedMessage
                defaultMessage="Manage saved views"
                id="xpack.infra.openView.flyoutHeader"
              />
            </h2>
          </EuiTitle>
        </EuiFlyoutHeader>
        <EuiFlyoutBody>
          <EuiInMemoryTable
            items={namedViews}
            columns={columns}
            loading={loading}
            search={searchConfig}
            pagination={true}
            sorting={true}
          />
        </EuiFlyoutBody>
        <EuiModalFooter>
          <EuiButtonEmpty
            aria-label={i18n.translate('xpack.infra.manageViewsFlyout.cancelButton.ariaLabel', {
              defaultMessage: 'Cancel',
            })}
            data-test-subj="cancelSavedViewModal"
            onClick={onClose}
          >
            <FormattedMessage defaultMessage="Cancel" id="xpack.infra.openView.cancelButton" />
          </EuiButtonEmpty>
        </EuiModalFooter>
      </EuiFlyout>
    </EuiPortal>
  );
}

const DeleteConfimation = ({ isDisabled, onConfirm }: DeleteConfimationProps) => {
  const [isConfirmVisible, toggleVisibility] = useToggle(false);

  return isConfirmVisible ? (
    <EuiFlexGroup>
      <EuiButtonEmpty
        aria-label={i18n.translate('xpack.infra.deleteConfimation.cancelButton.ariaLabel', {
          defaultMessage: 'Cancel',
        })}
        onClick={toggleVisibility}
        data-test-subj="hideConfirm"
      >
        <FormattedMessage defaultMessage="cancel" id="xpack.infra.waffle.savedViews.cancel" />
      </EuiButtonEmpty>
      <EuiButton
        disabled={isDisabled}
        fill={true}
        iconType="trash"
        color="danger"
        onClick={onConfirm}
        data-test-subj="showConfirm"
      >
        <FormattedMessage
          defaultMessage="Delete view?"
          id="xpack.infra.openView.actionNames.deleteConfirmation"
        />
      </EuiButton>
    </EuiFlexGroup>
  ) : (
    <EuiButtonIcon
      aria-label={i18n.translate('xpack.infra.deleteConfimation.deleteButton.ariaLabel', {
        defaultMessage: 'Delete',
      })}
      data-test-subj="infraDeleteConfimationButton"
      iconType="trash"
      color="danger"
      size="s"
      onClick={toggleVisibility}
    />
  );
};

/**
 * Helpers
 */
const addOwnName = <TSavedViewState extends SavedViewItem>(view: TSavedViewState) => ({
  ...view,
  name: view.attributes.name,
});
