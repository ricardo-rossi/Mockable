#Mockable
> A quick and dirty way to mock APIs

[![NPM](https://nodei.co/npm/mockable.png?downloads=true)](https://nodei.co/npm/mockable/)  
[![NPM version](https://badge.fury.io/js/mockable.svg)](http://badge.fury.io/js/mockable)
[![dependencies](https://david-dm.org/ricardo-rossi/mockable.png)](https://david-dm.org/ricardo-rossi/mockable)
[![Travis](https://travis-ci.org/ricardo-rossi/Mockable.svg?branch=master)](https://travis-ci.org/ricardo-rossi/Mockable)

### Overview

If you often work on client-side code and need a quick way to simulate a server API, then Mockable is for you. 
Mockable has its own HTTP server, can work via either a CLI interface or embedded in other modules, and supports 
any HTTP method with zero configuration. It should have you mocking APIs in no time. Use it and let me know 
if it's missing anything else you need ;)

### Features

  * Easily simulates any server APIs by simply placing mocked responses into simple files
  * Supports any standard HTTP method (e.g., *GET*, *PUT*, *POST*, *DELETE*, etc)
  * Understands [RESTful APIs](http://stackoverflow.com/questions/671118/what-exactly-is-restful-programming)
  * Comes with a built-in web server (using [node-static](https://github.com/cloudhead/node-static))
  * Zero configuration: Mock new APIs without restarting Mockable
  * Supports JSON, XML, or whatever else you want to use 


### Prerequisites

Before you use Mockable, you need [Node.js](http://nodejs.org/) v0.8 or higher and [npm](https://www.npmjs.org/). 
Please see [How to install Node.js and npm](http://blog.nodeknockout.com/post/65463770933/how-to-install-node-js-and-npm)


### Installation

The preferred installation method is using the -g (global) flag  
```
$ npm install -g mockable
```

### Running Mockable

#### CLI Option   
After you install Mockable globally (as shown above) you can run it from your terminal like this:

Serve up the current directory   
```
$ mockable
serving "." at http://127.0.0.1:9081
```

Serve up using port 9082  
```
$ mockable -p 9082
serving "." at http://127.0.0.1:9082
```

Serve up a different directory   
```
$ mockable public
serving "public" at http://127.0.0.1:9081
```

Specify additional headers (this one is useful for development)   
```
$ mockable -H '{"Cache-Control": "no-cache, must-revalidate"}'
serving "." at http://127.0.0.1:9081
```

Set cache control max age   
```
$ mockable -c 7200
serving "." at http://127.0.0.1:9081
```

Show help message, including all options   
```
$ mockable -h
```
#### Embedded Option  

Alternatively, you can install Mockable locally.

```
$ npm install mockable
```

And then use it from within your own Node.js modules as shown:

```
var mockable = require('mockable');
var server = new mockable.Server(9082, '.');
server.run();
```

### Mocking APIs

Mocking APIs with Mockable is easy. Just follow this simple rule:


To Mock this:  
```
A request to /A/B/C using 'HTTP_METHOD_NAME'
```

Do this: Create the following directory structure under your 'served' directory:  
```
A
└── B
```
Then create a file names HTTP_METHOD_NAME.C.json and mock some JSON in it. 
(Replace HTTP_METHOD_NAME with the corresponding GET, POST, PUT, DELETE, etc.)
```
A
└── B
    └── HTTP_METHOD_NAME.C.json
```

### Some Examples

#### Mocking GET /api/users/123 

To Mock the following API request:
```
GET /api/users/123
```
Create a file with some mocked JSON such as:
```
{
    "name": "Ricardo Rossi"
}
```
And save it as GET.123.json under this directory structure:
```
api
└── users
    └── GET.123.json
```
Run Mockable and test the API:
```
$ curl --request GET 'http://127.0.0.1:9081/api/users/123'
{
    "name": "Ricardo Rossi"
}
```
 
#### Mocking PUT /api/users/123 

Same as above except name the file PUT.123.json instead

#### Mocking DELETE /api/users/123 

Same as above except name the file DELETE.123.json instead

#### Mocking GET /api/users 

To Mock the following API request:
```
GET /api/users
```
Create a file with some mocked JSON such as:
```
[
    {
        "name": "Ricardo Rossi"
    },
    {
        "name": "John Doe"
    },
    {
        "name": "Foo Bar"
    }
]
```
And save it as GET.index.json under this directory structure:
```
api
└── users
    └── GET.index.json
```
Run Mockable and test the API:
```
$ curl --request GET 'http://127.0.0.1:9081/api/users'
[
    {
        "name": "Ricardo Rossi"
    },
    {
        "name": "John Doe"
    },
    {
        "name": "Foo Bar"
    }
]
```

#### Mocking POST /api/users

Same as above except name the file POST.index.json instead

### Feedback

Found an issue? [Enter it here](https://github.com/ricardo-rossi/Mockable/issues) or fix 
it using a [Pull Request](https://github.com/ricardo-rossi/Mockable/pulls)

### Contributors

 * Author: [Ricardo Rossi](https://github.com/ricardo-rossi)
 * Contributors: [Jim Lavin](https://github.com/lavinjj)

### License

  Mockable is open-source software licensed under the [MIT license](LICENSE)
  
