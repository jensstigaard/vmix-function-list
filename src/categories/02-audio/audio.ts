// Description used multiple places
const audioBussesDesc: string = 'Valid bus names M,A,B,C,D,E,F,G - Value can be mixed, e.g. MAB - to toggle MAB busses'

export default {
	Audio: {
		description: 'Toggle Audio Mute On/Off for an Input',
		parameters: {
			Input: 'input'
		}
	},

	AudioAuto: {
		description: 'Toggle AudioAuto (Audio Follow Video) On/Off for an Input',
		parameters: {
			Input: 'input'
		}
	},

	AudioAutoOff: {
		description: 'Switch AudioAuto (Audio Follow Video) Off for an Input',
		parameters: {
			Input: 'input'
		}
	},

	AudioAutoOn: {
		description: 'Switch AudioAuto (Audio Follow Video) On for an Input',
		parameters: {
			Input: 'input'
		}
	},

	// Audio busses general functions
	AudioBus: {
		description: 'Toggle on/off Audio Bus(ses) for an Input',
		parameters: {
			Input: 'input',
			Value: {
				type: 'string',
				description: 'Busses to toggle. ' + audioBussesDesc
			}
		}
	},

	AudioBusOff: {
		description: 'Switch off Audio Bus(ses) for an Input',
		parameters: {
			Input: 'input',
			Value: {
				type: 'string',
				description: 'Busses to switch off. ' + audioBussesDesc
			}
		}
	},

	AudioBusOn: {
		description: 'Switch on Audio Bus(ses) for an Input',
		parameters: {
			Input: 'input',
			Value: {
				type: 'string',
				description: 'Busses to switch on. ' + audioBussesDesc
			}
		}
	},

	AudioMixerShowHide: {
		description: 'Toggle show/hide of Audio Mixer panel',
		parameters: {}
	},

	AudioOff: {
		description: 'Switch Audio off for an Input',
		parameters: {
			Input: 'input'
		}
	},

	AudioOn: {
		description: 'Switch Audio on for an Input',
		parameters: {
			Input: 'input'
		}
	},

	AudioPluginOff: {
		description: 'Switch off Audio Plugin for an Input',
		parameters: {
			Input: 'input',
			Value: {
				type: 'string',
				description: 'Plugin Number starting from 1'
			}
		}
	},

	AudioPluginOn: {
		description: 'Switch on Audio Plugin for an Input',
		parameters: {
			Input: 'input',
			Value: {
				type: 'string',
				description: 'Plugin Number starting from 1'
			}
		}
	},

	AudioPluginOnOff: {
		description: 'Toggle on/off Audio Plugin for an Input',
		parameters: {
			Input: 'input',
			Value: {
				type: 'string',
				description: 'Plugin Number starting from 1'
			}
		}
	},

	AudioPluginShow: {
		description: 'Show Audio Plugin Editor',
		parameters: {
			Input: 'input',
			Value: {
				type: 'string',
				description: 'Plugin Number starting from 1'
			}
		}
	},
}