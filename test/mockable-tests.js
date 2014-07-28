/**
 * Mockable - test.js
 *
 * Copyright (c) 2014 Ricardo Rossi, contributors
 * Licensed under the MIT license.
 * https://github.com/ricardo-rossi/Mockable/blob/master/LICENSE
 */

"use strict";

var vows = require('vows'),
  assert = require('assert'),
  request = require('request'),
  mockable = require('../lib/mockable');

var server;
var TEST_PORT = 9081;
var TEST_SERVER = 'http://localhost:' + TEST_PORT;

server = new mockable.Server(TEST_PORT, './test');
server.run();

// Create a Test Suite
var suite = vows.describe('mockable tests');

suite.addBatch({
  'serving GET /data/6471': {
    topic: function () {
      request.get(TEST_SERVER + '/data/6471', this.callback);
    },
    'should respond with 200': function (error, response, body) {
      assert.equal(response.statusCode, 200);
    },
    'should respond with application/json': function (error, response, body) {
      assert.equal(response.headers['content-type'], 'application/json');
    },
    'should respond including the text Ricardo': function (error, response, body) {
      assert.isTrue(body.indexOf('Ricardo') > 0);
    }
  }
}).export(module);
