const fs = require('fs')
const path = require('path')

const FunctionList = require('../dist/index').default

const list = new FunctionList()

const dir = path.resolve(__dirname, '../rendered')

const destPathPrettyList = path.resolve(dir, 'list.json')
const destPathMinifiedList = path.resolve(dir, 'list.min.json')
const destPathCountNumOfFunctions = path.resolve(dir, 'count.txt')

const funcs = list.all()

console.log(`The complete list of (${funcs.length}) functions in the vMix API were saved to:`)

// Save nicely formatted JSON to file
// https://gist.github.com/collingo/6700069
fs.writeFileSync(destPathPrettyList, JSON.stringify(funcs, null, 2))
console.log('(list pretty)', '\t\t\t', destPathPrettyList)

// Minimised version JSON to file
fs.writeFileSync(destPathMinifiedList, JSON.stringify(funcs))
console.log('(list minified)', '\t\t', destPathMinifiedList)

// Minimised version JSON to file
fs.writeFileSync(destPathCountNumOfFunctions, `${funcs.length}`)
console.log('(count number of functions)\t', destPathCountNumOfFunctions)

console.log()

