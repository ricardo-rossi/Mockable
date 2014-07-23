/**
 * Mockable - mock-server.js
 *
 * Copyright (c) 2014 Ricardo Rossi, contributors
 * Licensed under the MIT license.
 * https://github.com/ricardo-rossi/Mockable/blob/master/LICENSE
 */

"use strict";

var mockable = require('../lib/mockable');

var server = new mockable.Server(9082, '.');

server.run();