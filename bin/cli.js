#!/usr/bin/env node

var mockable = require('./../lib/mockable');

var argv = require('optimist')
  .usage([
    'USAGE: $0 [-p <port>] [<directory>]',
    'A quick and dirty way to mock APIs']
    .join('\n\n'))
  .option('port', {
    alias: 'p',
    'default': 9081,
    description: 'TCP port at which the files will be served'
  })
  .option('cache', {
    alias: 'c',
    description: '"Cache-Control" header setting, defaults to 3600'
  })
  .option('headers', {
    alias: 'H',
    description: 'additional headers (in JSON format)'
  })
  .option('header-file', {
    alias: 'f',
    description: 'JSON file of additional headers'
  })
  .option('help', {
    alias: 'h',
    description: 'display this help message'
  })
  .argv;

var dir = argv._[0] || '.';

var options;

if (argv.help){
  require('optimist').showHelp(console.log);
  process.exit(0);
}

if (argv.cache){
  (options = options || {}).cache = argv.cache;
}

if (argv.headers){
  (options = options || {}).headers = JSON.parse(argv.headers);
}

var server = new mockable.Server(+argv.port, dir);
server.run();

console.log('> serving "' + dir + '" at http://127.0.0.1:' + argv.port);

