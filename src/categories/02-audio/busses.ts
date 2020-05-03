// Some generic audio busses functions are found under audio

export default {
	// Bus A stuff
	BusAAudio: 'Toggle on/off Audio on Bus A',

	BusAAudioOff: 'Switch off Audio on Bus A',

	BusAAudioOn: 'Switch on Audio on Bus A',

	BusAAudioPluginOff: {
		description: 'Switch off Audio Plugin for Audio Bus A',
		parameters: {
			Value: {
				type: 'string',
				description: 'Plugin Number starting from 1'
			}
		}
	},

	BusAAudioPluginOn: {
		description: 'Switch on Audio Plugin for Audio Bus A',
		parameters: {
			Value: {
				type: 'string',
				description: 'Plugin Number starting from 1'
			}
		}
	},

	BusAAudioPluginOnOff: {
		description: 'Toggle on/off Audio Plugin for Audio Bus A',
		parameters: {
			Value: {
				type: 'string',
				description: 'Plugin Number starting from 1'
			}
		}
	},

	BusAAudioPluginShow: {
		description: 'Show Audio Plugin Editor for plugin on Audio Bus A',
		parameters: {
			Value: {
				type: 'string',
				description: 'Plugin Number starting from 1'
			}
		}
	},

	// Bus B stuff
	BusBAudio: 'Toggle on/off Audio on Bus B',

	BusBAudioOff: 'Switch off Audio on Bus B',

	BusBAudioOn: 'Switch on Audio on Bus B',

	BusBAudioPluginOff: {
		description: 'Switch off Audio Plugin for Audio Bus B',
		parameters: {
			Value: {
				type: 'number',
				description: 'Plugin Number starting from 1'
			}
		}
	},

	BusBAudioPluginOn: {
		description: 'Switch on Audio Plugin for Audio Bus B',
		parameters: {
			Value: {
				type: 'number',
				description: 'Plugin Number starting from 1'
			}
		}
	},

	BusBAudioPluginOnOff: {
		description: 'Toggle on/off Audio Plugin for Audio Bus B',
		parameters: {
			Value: {
				type: 'number',
				description: 'Plugin Number starting from 1'
			}
		}
	},

	BusBAudioPluginShow: {
		description: 'Show Audio Plugin Editor for plugin on Audio Bus B',
		parameters: {
			Value: {
				type: 'number',
				description: 'Plugin Number starting from 1'
			}
		}
	},


	// Bus X stuff
	BusXAudio: {
		description: 'Toggle on/off Audio on Bus X',
		parameters: {
			Value: {
				type: 'string',
				description: 'Bus name'
			}
		}
	},

	BusXAudioOff: {
		description: 'Switch off Audio on Bus X',
		parameters: {
			Value: {
				type: 'string',
				description: 'Bus name'
			}
		}
	},

	BusXAudioOn: {
		description: 'Switch on Audio on Bus X',
		parameters: {
			Value: {
				type: 'string',
				description: 'Bus name'
			}
		}
	},

	BusXAudioPluginOff: {
		description: 'Switch off Audio Plugin for Audio Bus X',
		parameters: {
			Value: [ // Composite - separated by ","
				{
					type: 'string',
					description: 'Bus'
				}, {
					type: 'number',
					description: 'PluginNumber - Plugin Number starting from 1'
				}
			]
		}
	},

	BusXAudioPluginOn: {
		description: 'Switch on Audio Plugin for Audio Bus X',
		parameters: {
			Value: [ // Composite - separated by ","
				{
					type: 'string',
					description: 'Bus'
				}, {
					type: 'number',
					description: 'PluginNumber - Plugin Number starting from 1'
				}
			]
		}
	},

	BusXAudioPluginOnOff: {
		description: 'Toggle on/off Audio Plugin for Audio Bus X',
		parameters: {
			Value: [ // Composite - separated by ","
				{
					type: 'string',
					description: 'Bus'
				}, {
					type: 'number',
					description: 'PluginNumber - Plugin Number starting from 1'
				}
			]
		}
	},

	BusXAudioPluginShow: {
		description: 'Show Audio Plugin Editor for plugin on Audio Bus X',
		parameters: {
			Value: [ // Composite - separated by ","
				{
					type: 'string',
					description: 'Bus'
				}, {
					type: 'number',
					description: 'PluginNumber - Plugin Number starting from 1'
				}
			]
		}
	},

	BusXSendToMaster: {
		description: 'Toggle on/off whether audio from Bus X is mixed on Master',
		parameters: {
			Value: {
				type: 'string',
				description: 'Bus name'
			}
		}
	},

	BusXSendToMasterOff: {
		description: 'Switch off whether audio from Bus X is mixed on Master',
		parameters: {
			Value: {
				type: 'string',
				description: 'Bus name'
			}
		}
	},

	BusXSendToMasterOn: {
		description: 'Switch on whether audio from Bus X is mixed on Master',
		parameters: {
			Value: {
				type: 'string',
				description: 'Bus name'
			}
		}
	},

	BusXSolo: {
		description: 'Toggle on/off solo on Bus X',
		parameters: {
			Value: {
				type: 'string',
				description: 'Bus name'
			}
		}
	},

	BusXSoloOff: {
		description: 'Switch off solo on Bus X',
		parameters: {
			Value: {
				type: 'string',
				description: 'Bus name'
			}
		}
	},

	BusXSoloOn: {
		description: 'Switch on solo on Bus X',
		parameters: {
			Value: {
				type: 'string',
				description: 'Bus name'
			}
		}
	}
}