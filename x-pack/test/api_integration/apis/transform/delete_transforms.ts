/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import expect from '@kbn/expect';

import { FtrProviderContext } from '../../ftr_provider_context';
import { COMMON_REQUEST_HEADERS } from '../../../functional/services/ml/common';
import { USER } from '../../../functional/services/transform/security_common';

// eslint-disable-next-line import/no-default-export
export default ({ getService }: FtrProviderContext) => {
  const esArchiver = getService('esArchiver');
  const supertest = getService('supertestWithoutAuth');
  const transform = getService('transform');

  async function runTransformsDeleteRequest(
    user: USER,
    requestBody: object,
    expectedResponsecode: number
  ): Promise<any> {
    const { body } = await supertest
      .post('/api/<TRANSFORM_DELETE_API>')
      .auth(user, transform.securityCommon.getPasswordForUser(user))
      .set(COMMON_REQUEST_HEADERS)
      .send(requestBody)
      .expect(expectedResponsecode);

    return body;
  }

  describe('delete_transforms', function () {
    before(async () => {
      await esArchiver.loadIfNeeded('ml/farequote');
      await transform.testResources.setKibanaTimeZoneToUTC();
    });

    after(async () => {
      await transform.api.cleanTransformIndices();
    });

    it('tests something', async () => {
      // actual test code
    });
  });
};
