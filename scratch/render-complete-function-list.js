const fs = require('fs')
const path = require('path')

const FunctionList = require('../dist/index').default

const list = new FunctionList()

const dir = path.resolve(__dirname, '../rendered')

const destinationFull = path.resolve(dir, 'list.json')
const destinationMin = path.resolve(dir, 'list.min.json')

const funcs = list.all()

console.log('The complete list of functions in the vMix API were saved to:')
// Save nicely formatted JSON to file
// https://gist.github.com/collingo/6700069
fs.writeFileSync(destinationFull, JSON.stringify(funcs, null, 2))
console.log('(pretty)\t', destinationFull)

// Minimised version JSON to file
fs.writeFileSync(destinationMin, JSON.stringify(funcs))
console.log('(minified)\t', destinationMin)

console.log()

