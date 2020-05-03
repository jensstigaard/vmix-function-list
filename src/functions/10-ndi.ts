export default {

	NDICommand: {
		description: 'Send specified command to NDI source.',
		parameters: {
			Input: 'input',
			Value: {
				type: 'string',
				description: 'Command to send'
			}
		}
	},

	NDISelectSourceByIndex: {
		description: 'Select NDI source by Index.',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Index 0-100'
			}
		}
	},

	NDISelectSourceByName: {
		description: 'Select NDI source by Name.',
		parameters: {
			Input: 'input',
			Value: {
				type: 'string',
				description: 'Name of source'
			}
		}
	},

	NDIStartRecording: {
		description: 'Start recording of NDI source input (raw NDI recording)',
		parameters: {
			Input: 'input'
		}
	},

	NDIStopRecording: {
		description: 'Stop recording of NDI source input (raw NDI recording)',
		parameters: {
			Input: 'input'
		}
	}
}
