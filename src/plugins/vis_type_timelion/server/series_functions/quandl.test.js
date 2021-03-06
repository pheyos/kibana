/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { parse } from 'query-string';
import fn from './quandl';
import moment from 'moment';
import fetchMock from 'node-fetch';

const parseURL = require('url').parse;
const tlConfig = require('./fixtures/tl_config')();

function parseUrlParams(url) {
  return parse(parseURL(url).query, { sort: false });
}

jest.mock('node-fetch', () =>
  jest.fn(() =>
    Promise.resolve({
      json: function () {
        return {
          name: '__beer__',
          data: [
            ['2015-01-01', 3],
            ['2015-01-02', 14],
            ['2015-01-03', 15.92],
            ['2015-01-04', 65.35],
          ],
        };
      },
    })
  )
);

import invoke from './helpers/invoke_series_fn.js';

describe('quandl', function () {
  beforeEach(function () {
    jest.clearAllMocks();
  });

  it('should wrap the quandl response up in a seriesList', function () {
    return invoke(fn, []).then(function (result) {
      expect(result.output.list[0].data[0][1]).toEqual(3);
      expect(result.output.list[0].data[1][1]).toEqual(14);
    });
  });

  it('should set the label to that of the quandl name', function () {
    return invoke(fn, []).then(function (result) {
      expect(result.output.list[0].label).toEqual('__beer__');
    });
  });

  it('should call the quandl API with the quandl code that has been passed', function () {
    return invoke(fn, ['BEER/IS_GOOD']).then(function () {
      expect(fetchMock).toHaveBeenCalled();
      expect(fetchMock.mock.calls[0][0].match(/datasets\/(.*).json/)[1]).toEqual('BEER/IS_GOOD');
    });
  });

  it('should limit the time span and interval to the stuff attached to tlConfig', function () {
    return invoke(fn, []).then(function () {
      const params = parseUrlParams(fetchMock.mock.calls[0][0]);
      expect(params.trim_start).toEqual(moment.utc(tlConfig.time.from).format('YYYY-MM-DD'));
      expect(params.trim_end).toEqual(moment.utc(tlConfig.time.to).format('YYYY-MM-DD'));
    });
  });

  it('should throw an error is passed an unsupported interval', function () {
    return expect(invoke(fn, [], { time: { interval: '2d' } })).rejects.toThrowError();
  });

  it('should use the configured API key when talking to quandl', function () {
    return invoke(fn, [], { settings: { 'timelion:quandl.key': 'bEeR' } }).then(function () {
      const params = parseUrlParams(fetchMock.mock.calls[0][0]);
      expect(params.auth_token).toEqual('bEeR');
    });
  });
});
