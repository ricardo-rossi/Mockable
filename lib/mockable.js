/**
 * mockable.js
 */

"use strict";

var http = require('http'),
  nodeStatic = require('node-static');

var Server = function (root, options) {
  this.format = ".json";
  this.port = 9081;
  this.pathToFile = null;
  this.fileName = null;
  this.server = new nodeStatic.Server(root, options);
};

Server.prototype.run = function () {
  var that = this;
  http.createServer(function (request, response) {

    console.log("> " + request.method + " " + request.url);

    that.handleRequest(request);
    that.server.serve(request, response, function (err, res) {
      if (err) {
        console.error("> Error serving " + request.url + " - " + err.message);
        that.handleBaseRequest(request);
        console.error("> Trying now " + request.url + " - " + err.message);
        that.server.serve(request, response, function (err, res) {
          if (err) {
            console.error("> Could't find " + request.url + " - " + err.message);
            response.writeHead(err.status, err.headers);
            response.end();
          } else {
            console.log("> Found file " + request.url + " | " + res.message);
          }
        });
      } else {
        console.log("> Found file " + request.url + " | " + res.message);
      }
    });

  }).listen(that.port);

  console.log("> mockable is listening on http://127.0.0.1:" + that.port);
};

Server.prototype.handleRequest = function (request) {
  var that = this;

  that.fileName = request.url.substring(request.url.lastIndexOf("/")).replace("/", "");
  that.pathToFile = request.url.substring(0, request.url.lastIndexOf("/"));

  request.url = that.pathToFile + "/" + request.method + "." + that.fileName + that.format;
};

Server.prototype.handleBaseRequest = function (request) {
  var that = this;

  request.url = that.pathToFile + "/" + that.fileName + "/" + request.method + ".index" + that.format;
};


exports.Server = Server;
