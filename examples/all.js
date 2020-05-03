const { FunctionList } = require('../../dist/index').default

const list = new FunctionList()

console.log('The complete list of functions in the vMix API:')
console.log(list.all())
