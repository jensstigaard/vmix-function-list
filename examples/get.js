const { FunctionList } = require('../../dist/index').default

const list = new FunctionList()

console.log(`The function definition for 'SetText' in the vMix API:`)
console.log(list.get('SetText'))
