export default {
	MasterAudio: 'Toggle on/off Master audio',

	MasterAudioOff: 'Toggle off Master audio',

	MasterAudioOn: 'Toggle on Master audio',

	MasterAudioPluginOff: {
		description: 'Switch off Audio Plugin on Master',
		parameters: {
			Value: {
				type: 'number',
				description: 'Plugin Number starting from 1'
			}
		}
	},

	MasterAudioPluginOn: {
		description: 'Switch on Audio Plugin on Master',
		parameters: {
			Value: {
				type: 'number',
				description: 'Plugin Number starting from 1'
			}
		}
	},

	MasterAudioPluginOnOff: {
		description: 'Switch on/off Audio Plugin on Master',
		parameters: {
			Value: {
				type: 'number',
				description: 'Plugin Number starting from 1'
			}
		}
	},

	MasterAudioPluginShow: {
		description: 'Show Audio Plugin on Master',
		parameters: {
			Value: {
				type: 'number',
				description: 'Plugin Number starting from 1'
			}
		}
	}
}
