/**
 * mockable.js
 */

"use strict";

var mockable = require('../lib/mockable');

var server = new mockable.Server(9082, '.');

server.run();