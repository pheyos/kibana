/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

import expect from '@kbn/expect';
import { FtrProviderContext } from '../ftr_provider_context';

export default function ({ getService, getPageObjects }: FtrProviderContext) {
  const esArchiver = getService('esArchiver');
  const kibanaServer = getService('kibanaServer');
  const testSubjects = getService('testSubjects');
  const { common, header, discover, timePicker } = getPageObjects([
    'common',
    'header',
    'discover',
    'timePicker',
  ]);

  describe('errors', function describeIndexTests() {
    before(async function () {
      await esArchiver.loadIfNeeded(
        'src/platform/test/functional/fixtures/es_archiver/logstash_functional'
      );
      await kibanaServer.savedObjects.clean({ types: ['search', 'index-pattern'] });
      await kibanaServer.importExport.load(
        'src/platform/test/functional/fixtures/kbn_archiver/invalid_scripted_field'
      );
      await timePicker.setDefaultAbsoluteRangeViaUiSettings();
      await common.navigateToApp('discover');
    });

    after(async function () {
      await kibanaServer.savedObjects.clean({ types: ['search', 'index-pattern'] });
    });

    describe('invalid scripted field error', () => {
      it('is rendered', async () => {
        await discover.showsErrorCallout();
        const painlessStackTrace = await testSubjects.find('painlessStackTrace');
        expect(painlessStackTrace).not.to.be(undefined);
      });
    });

    describe('not found', () => {
      it('should redirect to main page when trying to access invalid route', async () => {
        await common.navigateToUrl('discover', '#/invalid-route', {
          useActualUrl: true,
          ensureCurrentUrl: false,
        });
        await header.awaitKibanaChrome();

        const invalidLink = await testSubjects.find('invalidRouteMessage');
        expect(await invalidLink.getVisibleText()).to.be(
          `Discover application doesn't recognize this route: /invalid-route`
        );
      });
    });
  });
}
