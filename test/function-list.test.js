// Using assert library
const assert = require('assert')

// Import the modules
const vMixFunctionList = require('../dist/index').default

const functionList = new vMixFunctionList()

const TOTAL_NUMBER_OF_FUNCTIONS = 496

describe('function-list', function () {
    it('should have a large number of functions in total', function () {
        const allFunctions = functionList.all()
        assert.equal(allFunctions.length, TOTAL_NUMBER_OF_FUNCTIONS, 'Did not see expected number of functions')
    })

    it('should have a function called Cut', function () {
        const cutFunction = functionList.get('cut')

        // console.log(cutFunction)
        // console.log(cutFunction.parameters.Input)

        assert.equal(cutFunction.description, 'Cut transition', 'Did not see expected description')
        // Parameter
        assert.equal(Object.values(cutFunction.parameters).length, 1, 'Did not see expected number of parameters')
        assert.equal(typeof cutFunction.parameters.Input, 'object', 'Did not see expected parameter')
        assert.equal(cutFunction.parameters.Input.type, 'input', 'Did not see expected parameter info type')
        assert.equal(cutFunction.parameters.Input.optional, false, 'Did not see expected parameter info mandatory')
    })

})