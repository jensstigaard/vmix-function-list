//
import { VmixFunctionParameterType } from './../vmix-function-definition'

// Function description type - can only be a string
type FunctionDescriptionDefinition = string

type FunctionParameterValue = {
	type: VmixFunctionParameterType
	description?: string
	optional?: boolean
}

// Function parameter can be a description, a function parameter value or array of these
export type IntermediateVmixFunctionParameter = FunctionDescriptionDefinition
	| FunctionParameterValue
	| FunctionParameterValue[]

export type IntermediateVmixFunctionDefinition = FunctionDescriptionDefinition | {
	description?: string
	parameters?: {
		[key: string]: IntermediateVmixFunctionParameter
	}
	examples?: string[]
}