export type VmixFunctionParameterType = string // 'string' | 'number' | 'input' | 'url'
//
export type SimpleFunctionParameter = {
	type: VmixFunctionParameterType
	description: string
	optional: boolean
}

export type CompositeFunctionParameter = {
	composites: SimpleFunctionParameter[]
}

export type VmixFunctionParameter = SimpleFunctionParameter | CompositeFunctionParameter

export type VmixFunctionDefinition = {
	function: string
	category: string
	description: string
	parameters: { [key: string]: VmixFunctionParameter }
	examples: string[]
}