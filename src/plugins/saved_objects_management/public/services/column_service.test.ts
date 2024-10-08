/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

import { spacesPluginMock } from '@kbn/spaces-plugin/public/mocks';
import { ShareToSpaceSavedObjectsManagementColumn } from './columns';
import {
  SavedObjectsManagementColumnService,
  SavedObjectsManagementColumnServiceSetup,
} from './column_service';
import { SavedObjectsManagementColumn } from './types';

class DummyColumn extends SavedObjectsManagementColumn {
  constructor(public id: string) {
    super();
  }

  public euiColumn = {
    field: 'id',
    name: 'name',
  };

  public loadData = async () => {};
}

describe('SavedObjectsManagementColumnRegistry', () => {
  let service: SavedObjectsManagementColumnService;
  let setup: SavedObjectsManagementColumnServiceSetup;

  const createColumn = (id: string): SavedObjectsManagementColumn => {
    return new DummyColumn(id);
  };

  beforeEach(() => {
    service = new SavedObjectsManagementColumnService();
    setup = service.setup();
  });

  describe('#register', () => {
    it('allows columns to be registered and retrieved', () => {
      const column = createColumn('foo');
      setup.register(column);
      const start = service.start(spacesPluginMock.createStartContract());
      expect(start.getAll()).toEqual([
        column,
        expect.any(ShareToSpaceSavedObjectsManagementColumn),
      ]);
    });

    it('does not allow columns with duplicate ids to be registered', () => {
      const column = createColumn('my-column');
      setup.register(column);
      expect(() => setup.register(column)).toThrowErrorMatchingInlineSnapshot(
        `"Saved Objects Management Column with id 'my-column' already exists"`
      );
    });

    it('does not register space column when SpacesApi.hasOnlyDefaultSpace is true', () => {
      const column = createColumn('foo');
      setup.register(column);
      const start = service.start(spacesPluginMock.createStartContract(true));
      expect(start.getAll()).toEqual(
        expect.not.arrayContaining([expect.any(ShareToSpaceSavedObjectsManagementColumn)])
      );
    });
  });
});
