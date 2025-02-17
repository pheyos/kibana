/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
import React from 'react';
import { waitFor, renderHook } from '@testing-library/react';
import {
  UseLoadRuleAggregationsQueryProps,
  useLoadRuleAggregationsQuery as useLoadRuleAggregations,
} from './use_load_rule_aggregations_query';
import { RuleStatus } from '../../types';
import { useKibana } from '../../common/lib/kibana';
import { IToasts } from '@kbn/core-notifications-browser';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

jest.mock('../../common/lib/kibana');
jest.mock('../lib/rule_api/aggregate_kuery_filter', () => ({
  loadRuleAggregationsWithKueryFilter: jest.fn(),
}));

const useKibanaMock = useKibana as jest.Mocked<typeof useKibana>;

const { loadRuleAggregationsWithKueryFilter } = jest.requireMock(
  '../lib/rule_api/aggregate_kuery_filter'
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
});
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

const MOCK_TAGS = ['a', 'b', 'c'];

const MOCK_AGGS = {
  ruleEnabledStatus: { enabled: 2, disabled: 0 },
  ruleExecutionStatus: { ok: 1, active: 2, error: 3, pending: 4, unknown: 5, warning: 6 },
  ruleMutedStatus: { muted: 0, unmuted: 2 },
  ruleTags: MOCK_TAGS,
};

describe('useLoadRuleAggregations', () => {
  beforeEach(() => {
    useKibanaMock().services.notifications.toasts = {
      addDanger: jest.fn(),
    } as unknown as IToasts;

    loadRuleAggregationsWithKueryFilter.mockResolvedValue(MOCK_AGGS);
  });

  afterEach(() => {
    queryClient.clear();
    jest.clearAllMocks();
  });

  it('should call loadRuleAggregations API and handle result', async () => {
    const params: UseLoadRuleAggregationsQueryProps = {
      filters: {
        searchText: '',
        actionTypes: [],
        ruleExecutionStatuses: [],
        ruleLastRunOutcomes: [],
        ruleStatuses: [],
        ruleParams: {},
        tags: [],
      },
      enabled: true,
      refresh: undefined,
      ruleTypeIds: [],
      consumers: [],
    };

    const { rerender, result } = renderHook(
      () => {
        return useLoadRuleAggregations(params);
      },
      { wrapper }
    );

    rerender();

    await waitFor(() => {
      expect(loadRuleAggregationsWithKueryFilter).toBeCalledWith(
        expect.objectContaining({
          searchText: '',
          actionTypesFilter: [],
          ruleExecutionStatusesFilter: [],
          ruleLastRunOutcomesFilter: [],
          ruleStatusesFilter: [],
          tagsFilter: [],
          ruleTypeIds: [],
          consumers: [],
        })
      );
      expect(result.current.rulesStatusesTotal).toEqual(MOCK_AGGS.ruleExecutionStatus);
    });
  });

  it('should call loadRuleAggregation API with params and handle result', async () => {
    const params: UseLoadRuleAggregationsQueryProps = {
      filters: {
        searchText: 'test',
        actionTypes: ['action1', 'action2'],
        ruleExecutionStatuses: ['status1', 'status2'],
        ruleParams: {},
        ruleStatuses: ['enabled', 'snoozed'] as RuleStatus[],
        tags: ['tag1', 'tag2'],
        ruleLastRunOutcomes: ['outcome1', 'outcome2'],
      },
      enabled: true,
      refresh: undefined,
      ruleTypeIds: ['foo'],
      consumers: ['bar'],
    };

    const { rerender, result } = renderHook(() => useLoadRuleAggregations(params), {
      wrapper,
    });

    rerender();

    await waitFor(() => {
      expect(loadRuleAggregationsWithKueryFilter).toBeCalledWith(
        expect.objectContaining({
          searchText: 'test',
          actionTypesFilter: ['action1', 'action2'],
          ruleExecutionStatusesFilter: ['status1', 'status2'],
          ruleStatusesFilter: ['enabled', 'snoozed'] as RuleStatus[],
          tagsFilter: ['tag1', 'tag2'],
          ruleLastRunOutcomesFilter: ['outcome1', 'outcome2'],
          ruleTypeIds: ['foo'],
          consumers: ['bar'],
        })
      );
      expect(result.current.rulesStatusesTotal).toEqual(MOCK_AGGS.ruleExecutionStatus);
    });
  });

  it('should call onError if API fails', async () => {
    loadRuleAggregationsWithKueryFilter.mockRejectedValue('');
    const params = {
      filters: {
        searchText: '',
        types: [],
        actionTypes: [],
        ruleExecutionStatuses: [],
        ruleParams: {},
        ruleLastRunOutcomes: [],
        ruleStatuses: [],
        tags: [],
      },
      enabled: true,
      refresh: undefined,
    };

    renderHook(() => useLoadRuleAggregations(params), { wrapper });

    await waitFor(() =>
      expect(useKibanaMock().services.notifications.toasts.addDanger).toBeCalled()
    );
  });
});
