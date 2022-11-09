# vmix-function-list
Complete list of available functions in vMix. Structured list read out from https://www.vmix.com/help25/ShortcutFunctionReference.html and from inside vMix > Settings > Shortcuts.

[![package json version](https://img.shields.io/github/package-json/v/jensstigaard/vmix-function-list.svg)](https://www.github/jensstigaard/vmix-function-list)
[![npm version](https://badge.fury.io/js/vmix-function-list.svg)](https://www.npmjs.com/package/vmix-function-list)

The version number of this repository reflects which version number of vMix the repository is updated for.

When a new patch or version is released to vMix, it is the plan that I check through the help files (and/or vMix itself) for whether new functions has been added to the vMix API, and this function list will be updated accordingly.

## Methods
`.all()` - Returns a complete list of available functions in the vMix API.

`.category(category: string)` - Returns a list of available functions in a given category from the vMix API.

`.get(function: string)` - Returns a single function with a given name from the vMix API.

See examples or tests for more info.


## Rendered list
In the `rendered/` directory you can find .json files of rendered complete list of function, either as minified or in regular format with indentation. 


# Installation and use

## As a dependency using npm
The repo is published at npmjs, meaning that you can easily add the utilities as a dependency in your frontend project.
Found here: https://www.npmjs.com/package/vmix-function-list
```sh
npm install vmix-function-list --save # or 'yarn add vmix-function-list -d'
```

In your code the simplest way to import the module is the following:

```javascript
const VmixFunctionList = require('vmix-function-list')

// List of all functions
console.log('All functions', VmixFunctionList.all())

// Get specific function (case-insensitive)
console.log('Get specific function: Cut', VmixFunctionList.get('cut'))
console.log('Get specific function: SetText', VmixFunctionList.get('SetText'))
```


### Examples
- [All](./examples/all.js)
- [Get category](./examples/category.js)
- [Get single function](./examples/get.js)

---


# Authors
[Jens Stigaard](https://github.com/jensstigaard)


# Contribution
You are more than welcome to contribute to the repository!
If you find any inconsistencies or missing functions, you are welcome to tell about it in an issue or make a pull request with the desired changes.

