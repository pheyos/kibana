/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import useObservable from 'react-use/lib/useObservable';
import { useCallback, useEffect, useMemo } from 'react';
import { useKibana } from '../../../../common/lib/kibana/kibana_react';

export const useLatestStats = () => {
  const { siemMigrations } = useKibana().services;

  useEffect(() => {
    siemMigrations.rules.startPolling();
  }, [siemMigrations.rules]);

  const refreshStats = useCallback(() => {
    siemMigrations.rules.getRuleMigrationsStats(); // this updates latestStats$ internally
  }, [siemMigrations.rules]);

  const latestStats$ = useMemo(() => siemMigrations.rules.getLatestStats$(), [siemMigrations]);
  const latestStats = useObservable(latestStats$, null);

  return { data: latestStats ?? [], isLoading: latestStats === null, refreshStats };
};
