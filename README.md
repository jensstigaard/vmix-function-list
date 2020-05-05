# vmix-function-list
Complete list of available functions in vMix.

[![package json version](https://img.shields.io/github/package-json/v/jensstigaard/vmix-function-list.svg)](https://www.github/jensstigaard/vmix-function-list)
[![npm version](https://badge.fury.io/js/vmix-function-list.svg)](https://www.npmjs.com/package/vmix-function-list)


## Methods
`.all()` - Returns a complete list of available functions in the vMix API.

`.category(category: string)` - Returns a list of available functions in a given category from the vMix API.

`.get(function: string)` - Returns a single function with a given name from the vMix API.

See examples or tests for more info.


## Rendered list
Check out the directory rendered/ where you can find .json files of rendered complete list of function, either minified or in regular format. 


# Installation and use

## As a dependency using npm
The repo is published at npmjs, meaning that you can easily add the utilities as a dependency in your frontend project.
Found here: https://www.npmjs.com/package/vmix-function-list
```sh
npm install vmix-function-list --save # or 'yarn add vmix-function-list -d'
```

In your code the simplest way to import the modules is the following:

```javascript
const { XmlApiDataParser, XmlGeneralState } = require('vmix-function-list')

// ...
```

You are also able to import all of the modules as a gathered variable, less elegant way:

```javascript
const vMixUtils = require('vmix-function-list')

// ...
```

### Examples
- [All](./examples/all.js)
- [Get category](./examples/category.js)
- [Get single function](./examples/get.js)

---


# Authors
Jens Grønhøj Stigaard - <jens@stigaard.info> (http://jens.stigaard.info)


# Contribution
You are more than welcome to contribute to the repository!

