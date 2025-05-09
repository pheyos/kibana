/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { exactCheck, foldLeftRight, getPaths } from '@kbn/securitysolution-io-ts-utils';
import { left } from 'fp-ts/Either';
import { pipe } from 'fp-ts/pipeable';
import { ErrorSchema } from './error_schema';
import { getErrorSchemaMock } from './error_schema.mock';

describe('error_schema', () => {
  test('it should validate an error with a UUID given for id', () => {
    const error = getErrorSchemaMock();
    const decoded = ErrorSchema.decode(getErrorSchemaMock());
    const checked = exactCheck(error, decoded);
    const message = pipe(checked, foldLeftRight);

    expect(getPaths(left(message.errors))).toEqual([]);
    expect(message.schema).toEqual(error);
  });

  test('it should validate an error with a plain string given for id since sometimes we echo the user id which might not be a UUID back out to them', () => {
    const error = getErrorSchemaMock('fake id');
    const decoded = ErrorSchema.decode(error);
    const checked = exactCheck(error, decoded);
    const message = pipe(checked, foldLeftRight);

    expect(getPaths(left(message.errors))).toEqual([]);
    expect(message.schema).toEqual(error);
  });

  test('it should NOT validate an error when it has extra data next to a valid payload element', () => {
    type InvalidError = ErrorSchema & { invalid_extra_data?: string };
    const error: InvalidError = getErrorSchemaMock();
    error.invalid_extra_data = 'invalid_extra_data';
    const decoded = ErrorSchema.decode(error);
    const checked = exactCheck(error, decoded);
    const message = pipe(checked, foldLeftRight);

    expect(getPaths(left(message.errors))).toEqual(['invalid keys "invalid_extra_data"']);
    expect(message.schema).toEqual({});
  });

  test('it should NOT validate an error when it has required elements deleted from it', () => {
    const error = getErrorSchemaMock();
    // @ts-expect-error
    delete error.error;
    const decoded = ErrorSchema.decode(error);
    const checked = exactCheck(error, decoded);
    const message = pipe(checked, foldLeftRight);

    expect(getPaths(left(message.errors))).toEqual([
      'Invalid value "undefined" supplied to "error"',
    ]);
    expect(message.schema).toEqual({});
  });
});
