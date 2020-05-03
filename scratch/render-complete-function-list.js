const fs = require('fs')
const path = require('path')

const { FunctionList } = require('../dist/index').default

const list = new FunctionList()


const destinationFull = path.resolve(__dirname, '../complete-function-list', 'list.json')
const destinationMin = path.resolve(__dirname, '../complete-function-list', 'list.min.json')

const funcs = list.all()

// Save nicely formatted JSON to file
// https://gist.github.com/collingo/6700069
fs.writeFileSync(destinationFull, JSON.stringify(funcs, null, 2))
console.log('The complete list of functions in the vMix API were saved to', destinationFull)

// Minimised version JSON to file
fs.writeFileSync(destinationMin, JSON.stringify(funcs))
console.log('The complete list of functions in the vMix API were saved to', destinationMin)

