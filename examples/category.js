const { FunctionList } = require('../../dist/index').default

const list = new FunctionList()

console.log(`The functions for 'Replay' in the vMix API:`)
console.log(list.inCategory('Replay'))
