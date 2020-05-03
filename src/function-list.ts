import _ from 'lodash'

import {
	SimpleFunctionParameter,
	VmixFunctionDefinition,
	VmixFunctionParameter,
	VmixFunctionParameterType
} from '../types/vmix-function-definition'
import {
	IntermediateVmixFunctionDefinition,
	IntermediateVmixFunctionParameter
} from '../types/intermediate/intermediate-vmix-function-definition'

import functionsIntermediateList from '../functions/index'

const validParameterTypes: string[] = ['string', 'number', 'input', 'url']


// 
export default class FunctionList {
	protected _functions: VmixFunctionDefinition[] = []

	constructor() {
		let functions = {}
		Object.entries(functionsIntermediateList)
			.forEach(([category, functionsInCategory]) => {
				functions = {
					...this.parseFunctions(category, functionsInCategory),
					...functions
				}
			})

		this._functions = Object.values(functions)
	}

	/**
	 * Returns complete list of functions in the vMix API
	 */
	all = (): VmixFunctionDefinition[] => {
		return this._functions
	}

	/**
	 * Returns list of functions in specific category
	 * Works case insentitive
	 */
	inCategory = (category: string) => {
		return this.all()
			.filter(f => f.category.toLowerCase() === category.toLowerCase())
	}

	/**
	 * Get function by function name
	 */
	get = (functionName: string): VmixFunctionDefinition => {
		const func = this._functions
			.find(f => f.function.toLowerCase() === functionName.toLowerCase())

		if (!func) {
			throw new Error(`Function not found with name '${functionName}'`)
		}

		return func
	}

	/**
	 * 
	 * @param functions
	 */
	protected parseFunctions = (
		category: string,
		functions: { [key: string]: IntermediateVmixFunctionDefinition }
	): { [key: string]: VmixFunctionDefinition } => {
		return _.keyBy((
			Object.entries(functions)
				.map(([functionName, obj]) => this.parseFunction(category, functionName, obj))
		),
			(func: VmixFunctionDefinition) => func.function
		)
	}

	/**
	 * 
	 * @param functionName
	 * @param functionObj
	 */
	protected parseFunction = (
		category: string,
		functionName: string,
		functionObj: IntermediateVmixFunctionDefinition
	): VmixFunctionDefinition => {
		const output = {
			category,
			function: functionName,
			description: '',
			parameters: {},
			examples: []
		} as VmixFunctionDefinition

		// Is functionObj just a string - then parse it as description
		if (typeof functionObj === 'string') {
			output.description = functionObj
			return output
		}

		// Is functionObj not a object
		if (typeof functionObj !== 'object') {
			console.error(functionObj)
			throw new Error(`Invalid function object of type ${typeof functionObj}`)
		}

		// Is functionObj an object, we can read from it
		if ('description' in functionObj) {
			output.description = functionObj.description || ''
		}
		if ('examples' in functionObj && functionObj.examples && Array.isArray(functionObj.examples)) {
			output.examples = (functionObj.examples as string[])
		}
		if ('parameters' in functionObj) {
			output.parameters = this.parseFunctionParameters(functionObj.parameters || {})
		}

		return output
	}

	/**
	 * 
	 * @param params
	 */
	protected parseFunctionParameters = (
		params: { [key: string]: IntermediateVmixFunctionParameter }
	): { [key: string]: VmixFunctionParameter } => {
		const parameters: { [key: string]: VmixFunctionParameter } = {}

		Object.entries(params).forEach(([paramKey, parameterValue]) => {
			parameters[paramKey] = this.parseFunctionParameter(paramKey, parameterValue)
		})

		return parameters
	}

	/**
	 * 
	 * @param paramKey
	 * @param value
	 */
	protected parseFunctionParameter = (
		paramKey: string,
		value: IntermediateVmixFunctionParameter
	): VmixFunctionParameter => {

		if (Array.isArray(value)) {
			return {
				composites: value.reduce(
					(all: SimpleFunctionParameter[], subparamValue) => {
						all.push(this.parseFunctionParameter(paramKey, subparamValue) as SimpleFunctionParameter)
						return all
					},
					[])
			}
		}

		const parameter: SimpleFunctionParameter = {
			type: 'string',
			description: '',
			optional: false
		}

		// If value is a string - wrap just type
		if (typeof value === 'string') {
			parameter.type = value as VmixFunctionParameterType
		}
		// If value is an object - wrap type, description and examlpes if possible 
		else if (typeof value === 'object') {
			if ('type' in value) {
				parameter.type = value.type
			}
			if ('description' in value) {
				parameter.description = value.description || ''
			}
			if ('optional' in value) {
				parameter.optional = value.optional || false
			}
		}

		if (!validParameterTypes.includes(parameter.type)) {
			throw new Error(`Parameter '${paramKey}' had unknown type '${parameter.type}'...`)
		}

		return parameter
	}
}
