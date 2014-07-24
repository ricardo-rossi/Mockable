/**
 * Mockable - test.js
 *
 * Copyright (c) 2014 Ricardo Rossi, contributors
 * Licensed under the MIT license.
 * https://github.com/ricardo-rossi/Mockable/blob/master/LICENSE
 */

"use strict";

// division-by-zero-test.js

var vows = require('vows'),
  assert = require('assert');

// Create a Test Suite
vows.describe('Division by Zero').addBatch({
  'when dividing a number by zero': {
    topic: function () { return 42 / 0; },

    'we get Infinity': function (topic) {
      assert.equal (topic, Infinity);
    }
  },
  'but when dividing zero by zero': {
    topic: function () { return 0 / 0; },

    'we get a value which': {
      'is not a number': function (topic) {
        assert.isNaN (topic);
      },
      'is not equal to itself': function (topic) {
        assert.notEqual (topic, topic);
      }
    }
  }
}).export(module);
