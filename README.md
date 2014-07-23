#Mockable
> A quick and dirty way to mock APIs

[![NPM](https://nodei.co/npm/mockable.png?downloads=true)](https://nodei.co/npm/mockable/)  
[![NPM version](https://badge.fury.io/js/mockable.svg)](http://badge.fury.io/js/mockable)
[![dependencies](https://david-dm.org/ricardo-rossi/mockable.png)](https://david-dm.org/ricardo-rossi/mockable)

### Overview

If you often work on client-side code and need a quick way to simulate a server API, then Mockable is for you. 

### Features

  * Easily simulates any server APIs by simply placing mocked responses into files
  * Supports any standard HTTP method (e.g., *GET*, *PUT*, *POST*, *DELETE*, etc)
  * Understands [RESTful APIs](http://stackoverflow.com/questions/671118/what-exactly-is-restful-programming)
  * Comes with a built-in web server (using [node-static](https://github.com/cloudhead/node-static))
  * Zero configuration: Mock new APIs without restarting Mockable
  * Supports JSON, XML, or whatever you want to use 


### Prerequisites

Before you use Mockable, you need [Node.js](http://nodejs.org/) and [npm](https://www.npmjs.org/). 
Please see [How to install Node.js and npm](http://blog.nodeknockout.com/post/65463770933/how-to-install-node-js-and-npm)


### Installation

```
$ npm install -g mockable
```

### Usage

serve up the current directory   
```
$ mockable
serving "." at http://127.0.0.1:9081
```

serve up using port 9082  
```
$ mockable -p 9082
serving "." at http://127.0.0.1:9082
```

serve up a different directory   
```
$ mockable public
serving "public" at http://127.0.0.1:9081
```

specify additional headers (this one is useful for development)   
```
$ mockable -H '{"Cache-Control": "no-cache, must-revalidate"}'
serving "." at http://127.0.0.1:9081
```

set cache control max age   
```
$ mockable -c 7200
serving "." at http://127.0.0.1:9081
```

show help message, including all options   
```
$ mockable -h
```

### Contributors

 * Author: [Ricardo Rossi](https://github.com/ricardo-rossi)
 * Contributors: [Jim Lavin](https://github.com/lavinjj)

### License

  Mockable is open-source software licensed under the [MIT license](LICENSE)
  
