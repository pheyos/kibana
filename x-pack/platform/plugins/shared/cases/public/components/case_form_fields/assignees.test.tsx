/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { FC, PropsWithChildren } from 'react';
import React from 'react';
import userEvent from '@testing-library/user-event';

import type { FormHook } from '@kbn/es-ui-shared-plugin/static/forms/hook_form_lib';
import { useForm, Form } from '@kbn/es-ui-shared-plugin/static/forms/hook_form_lib';
import { userProfiles } from '../../containers/user_profiles/api.mock';
import { Assignees } from './assignees';
import { act, waitFor, screen } from '@testing-library/react';
import * as api from '../../containers/user_profiles/api';
import type { UserProfile } from '@kbn/user-profile-components';
import { renderWithTestingProviders } from '../../common/mock';

jest.mock('../../containers/user_profiles/api');

const currentUserProfile = userProfiles[0];

// Failing: See https://github.com/elastic/kibana/issues/189719
describe('Assignees', () => {
  let globalForm: FormHook;

  const MockHookWrapperComponent: FC<PropsWithChildren<unknown>> = ({ children }) => {
    const { form } = useForm();
    globalForm = form;

    return <Form form={form}>{children}</Form>;
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders', async () => {
    renderWithTestingProviders(
      <MockHookWrapperComponent>
        <Assignees isLoading={false} />
      </MockHookWrapperComponent>
    );

    await waitFor(() => {
      expect(screen.queryByTestId('comboBoxSearchInput')).not.toBeDisabled();
    });

    expect(await screen.findByTestId('createCaseAssigneesComboBox')).toBeInTheDocument();
  });

  it('does not render the assign yourself link when the current user profile is undefined', async () => {
    const spyOnGetCurrentUserProfile = jest.spyOn(api, 'getCurrentUserProfile');
    spyOnGetCurrentUserProfile.mockResolvedValue(undefined as unknown as UserProfile);

    renderWithTestingProviders(
      <MockHookWrapperComponent>
        <Assignees isLoading={false} />
      </MockHookWrapperComponent>
    );

    await waitFor(() => {
      expect(screen.queryByTestId('comboBoxSearchInput')).not.toBeDisabled();
    });

    expect(screen.queryByTestId('create-case-assign-yourself-link')).not.toBeInTheDocument();
    expect(await screen.findByTestId('createCaseAssigneesComboBox')).toBeInTheDocument();
  });

  it('selects the current user correctly', async () => {
    const spyOnGetCurrentUserProfile = jest.spyOn(api, 'getCurrentUserProfile');
    spyOnGetCurrentUserProfile.mockResolvedValue(currentUserProfile);

    renderWithTestingProviders(
      <MockHookWrapperComponent>
        <Assignees isLoading={false} />
      </MockHookWrapperComponent>
    );

    await waitFor(() => {
      expect(screen.queryByTestId('comboBoxSearchInput')).not.toBeDisabled();
    });

    await userEvent.click(await screen.findByTestId('create-case-assign-yourself-link'));

    expect(globalForm.getFormData()).toEqual({ assignees: [{ uid: currentUserProfile.uid }] });
  });

  it('disables the assign yourself button if the current user is already selected', async () => {
    const spyOnGetCurrentUserProfile = jest.spyOn(api, 'getCurrentUserProfile');
    spyOnGetCurrentUserProfile.mockResolvedValue(currentUserProfile);

    renderWithTestingProviders(
      <MockHookWrapperComponent>
        <Assignees isLoading={false} />
      </MockHookWrapperComponent>
    );

    await waitFor(() => {
      expect(screen.queryByTestId('comboBoxSearchInput')).not.toBeDisabled();
    });

    await userEvent.click(await screen.findByTestId('create-case-assign-yourself-link'));

    await waitFor(() => {
      expect(globalForm.getFormData()).toEqual({ assignees: [{ uid: currentUserProfile.uid }] });
    });

    expect(await screen.findByTestId('create-case-assign-yourself-link')).toBeDisabled();
  });

  it('assignees users correctly', async () => {
    renderWithTestingProviders(
      <MockHookWrapperComponent>
        <Assignees isLoading={false} />
      </MockHookWrapperComponent>
    );

    await waitFor(() => {
      expect(screen.queryByTestId('comboBoxSearchInput')).not.toBeDisabled();
    });

    await userEvent.type(await screen.findByTestId('comboBoxSearchInput'), 'dr', { delay: 1 });

    expect(
      await screen.findByTestId('comboBoxOptionsList createCaseAssigneesComboBox-optionsList')
    ).toBeInTheDocument();

    expect(await screen.findByText(`${currentUserProfile.user.full_name}`)).toBeInTheDocument();

    await userEvent.click(await screen.findByText(`${currentUserProfile.user.full_name}`));

    await waitFor(() => {
      expect(globalForm.getFormData()).toEqual({ assignees: [{ uid: currentUserProfile.uid }] });
    });
  });

  it('allows selection of similarly named users', async () => {
    const similarProfiles: UserProfile[] = [
      {
        uid: '123',
        enabled: true,
        data: {},
        user: {
          username: '123',
          full_name: 'Turtle',
        },
      },
      {
        uid: '456',
        enabled: true,
        data: {},
        user: {
          username: '456',
          full_name: 'turtle',
        },
      },
    ];

    const spyOnSuggestUserProfiles = jest.spyOn(api, 'suggestUserProfiles');
    spyOnSuggestUserProfiles.mockResolvedValue(similarProfiles);

    renderWithTestingProviders(
      <MockHookWrapperComponent>
        <Assignees isLoading={false} />
      </MockHookWrapperComponent>
    );

    await waitFor(() => {
      expect(screen.queryByTestId('comboBoxSearchInput')).not.toBeDisabled();
    });

    await userEvent.click(await screen.findByTestId('comboBoxSearchInput'));

    expect(await screen.findByText('Turtle')).toBeInTheDocument();
    expect(await screen.findByText('turtle')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Turtle'), { pointerEventsCheck: 0 });

    // ensure that the similar user is still available for selection
    expect(await screen.findByText('turtle')).toBeInTheDocument();
  });

  it('fetches the unknown user profiles using bulk_get', async () => {
    // the profile is not returned by the suggest API
    const userProfile = {
      uid: 'u_qau3P4T1H-_f1dNHyEOWJzVkGQhLH1gnNMVvYxqmZcs_0',
      enabled: true,
      data: {},
      user: {
        username: 'uncertain_crawdad',
        email: 'uncertain_crawdad@profiles.elastic.co',
        full_name: 'Uncertain Crawdad',
      },
    };

    const spyOnBulkGetUserProfiles = jest.spyOn(api, 'bulkGetUserProfiles');
    spyOnBulkGetUserProfiles.mockResolvedValue([userProfile]);

    renderWithTestingProviders(
      <MockHookWrapperComponent>
        <Assignees isLoading={false} />
      </MockHookWrapperComponent>
    );

    expect(screen.queryByText(userProfile.user.full_name)).not.toBeInTheDocument();

    act(() => {
      globalForm.setFieldValue('assignees', [{ uid: userProfile.uid }]);
    });

    await waitFor(() => {
      expect(globalForm.getFormData()).toEqual({
        assignees: [{ uid: userProfile.uid }],
      });
    });

    await waitFor(() => {
      expect(spyOnBulkGetUserProfiles).toBeCalledTimes(1);
    });

    expect(spyOnBulkGetUserProfiles).toHaveBeenCalledWith({
      security: expect.anything(),
      uids: [userProfile.uid],
    });

    expect(await screen.findByText(userProfile.user.full_name)).toBeInTheDocument();
  });
});
