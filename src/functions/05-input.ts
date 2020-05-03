import { Input } from '../types/input'

export default {
	ActiveInput: {
		description: 'Send to Output the selected Input',
		parameters: {
			Input: 'input'
		}
	},

	AddInput: {
		description: `Create a new Input based on information provided in Value. 
		Examples of types:
		Video|c:\path\to\video.avi
		Image|c:\path\to\image.jpg				
		Photos|c:\path\to\folder
		Xaml|c:\path\to\title.xaml
		VideoList|c:\path\to\playlist.m3u
		Colour|HTMLColor
		AudioFile|c:\path\to\audio.wav
		Flash|c:\path\to\flash.swf
		PowerPoint|c:\path\to\powerpoint.pptx
		`,
		parameters: {
			Value: [ // Composite value
				{
					type: 'string',
					description: 'Type'
				},
				{
					type: 'string',
					description: 'Filename'
				},
			]
		}
	},

	AutoPauseOff: {
		description: 'Auto Pause off for Input',
		parameters: {
			Input: 'input'
		}
	},

	AutoPauseOn: {
		description: 'Auto Pause on for Input',
		parameters: {
			Input: 'input'
		}
	},

	AutoPlayFirst: {
		description: 'Toggle automatically playing first item in a List with Transition',
		parameters: {
			Input: 'input'
		}
	},

	AutoPlayFirstOff: {
		description: 'Switch off automatically playing first item in a List with Transition',
		parameters: {
			Input: 'input'
		}
	},

	AutoPlayFirstOn: {
		description: 'Switch on automatically playing first item in a List with Transition',
		parameters: {
			Input: 'input'
		}
	},

	AutoPlayNext: {
		description: 'Toggle automatically playing next item in a List',
		parameters: {
			Input: 'input'
		}
	},

	AutoPlayNextOff: {
		description: 'Switch Off automatically playing next item in a List',
		parameters: {
			Input: 'input'
		}
	},

	AutoPlayNextOn: {
		description: 'Switch On automatically playing next item in a List',
		parameters: {
			Input: 'input'
		}
	},

	AutoPlayOff: {
		description: 'Switch Off automatically playing on transition',
		parameters: {
			Input: 'input'
		}
	},

	AutoPlayOn: {
		description: 'Switch On automatically playing on transition',
		parameters: {
			Input: 'input'
		}
	},

	AutoRestartOff: {
		description: 'Switch Off automatically restarting on transition',
		parameters: {
			Input: 'input'
		}
	},

	AutoRestartOn: {
		description: 'Switch On automatically restarting on transition',
		parameters: {
			Input: 'input'
		}
	},

	ColourCorrectionAuto: {
		description: 'Perform Basic Auto Colour Correction for Input.',
		parameters: {
			Input: 'input'
		}
	},

	ColourCorrectionReset: {
		description: 'Reset Colour Correction for Input.',
		parameters: {
			Input: 'input'
		}
	},

	DeinterlaceOff: {
		description: 'Switch off deinterlacing for Input.',
		parameters: {
			Input: 'input'
		}
	},

	DeinterlaceOn: {
		description: 'Switch on deinterlacing for Input.',
		parameters: {
			Input: 'input'
		}
	},

	InputPreviewHide: {
		description: 'Hides large preview of input',
		parameters: {
			Input: 'input'
		}
	},

	InputPreviewShow: {
		description: 'Shows large preview of input',
		parameters: {
			Input: 'input'
		}
	},

	InputPreviewShowHide: {
		description: 'Toggles large preview of input',
		parameters: {
			Input: 'input'
		}
	},

	// New in vMix 24
	LayerOff: {
		description: 'Turn off layer for input',
		parameters: {
			Input: {
				type: 'input'
			},
			Value: {
				type: 'number',
				description: 'Layer number 1-10'
			}
		}
	},

	LayerOn: {
		description: 'Turn on layer for input',
		parameters: {
			Input: {
				type: 'input'
			},
			Value: {
				type: 'number',
				description: 'Layer number 1-10'
			}
		}
	},

	LayerOnOff: {
		description: 'Toggle layer for input',
		parameters: {
			Input: {
				type: 'input'
			},
			Value: {
				type: 'number',
				description: 'Layer number 1-10'
			}
		}
	},

	ListAdd: {
		description: 'Add Filename to List',
		parameters: {
			Input: {
				type: 'input',
				description: 'List Input'
			},
			Value: {
				type: 'string',
				description: 'Filename to be added to list'
			}
		}
	},

	ListExport: {
		description: 'Export List as M3U',
		parameters: {
			Input: {
				type: 'input',
				description: 'List Input'
			},
			Value: {
				type: 'string',
				description: 'Filename of exported file'
			}
		}
	},

	ListPlayOut: {
		description: 'Play out list input',
		parameters: {
			Input: 'input'
		}
	},

	ListRemove: {
		description: 'Remove from List by Index',
		parameters: {
			Input: {
				type: 'input',
				description: 'List Input'
			},
			Value: {
				type: 'number',
				description: 'Index starting from 1'
			}
		}
	},

	ListRemoveAll: {
		description: 'Remove all items from List',
		parameters: {
			Input: 'input'
		}
	},

	ListShowHide: {
		description: 'Toggle show/hide list',
		parameters: {
			Input: 'input'
		}
	},

	ListShuffle: {
		description: 'Toggle Shuffle (randomize) List',
		parameters: {
			Input: 'input'
		}
	},

	LivePlayPause: {
		description: 'Toggle Live/Pause of Input',
		parameters: {
			Input: 'input'
		}
	},

	LoopOff: {
		description: 'Switch off looping of Input',
		parameters: {
			Input: 'input'
		}
	},

	LoopOn: {
		description: 'Switch on looping of Input',
		parameters: {
			Input: 'input'
		}
	},

	MarkIn: {
		description: 'Mark in on current position for Input',
		parameters: {
			Input: 'input'
		}
	},

	MarkOut: {
		description: 'Mark out on current position for Input',
		parameters: {
			Input: 'input'
		}
	},

	MarkReset: {
		description: 'Reset Mark in and out for Input',
		parameters: {
			Input: 'input'
		}
	},

	MarkResetIn: {
		description: 'Reset Mark in for Input',
		parameters: {
			Input: 'input'
		}
	},

	MarkResetOut: {
		description: 'Reset Mark out for Input',
		parameters: {
			Input: 'input'
		}
	},

	MirrorOff: {
		description: 'Switch off mirror for Input',
		parameters: {
			Input: 'input'
		}
	},

	MirrorOn: {
		description: 'Switch on mirror for Input',
		parameters: {
			Input: 'input'
		}
	},

	MoveInput: {
		description: 'Move Input',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'New input number starting from 1'
			}
		}
	},

	NextItem: {
		description: 'Move to next item in List',
		parameters: {
			Input: 'input'
		}
	},

	NextPicture: {
		description: 'Move to Next Picture for Photo and PowerPoint Inputs',
		parameters: {
			Input: 'input'
		}
	},

	Pause: {
		description: 'Pause input',
		parameters: {
			Input: 'input'
		}
	},

	Play: {
		description: 'Play input',
		parameters: {
			Input: 'input'
		}
	},

	PlayPause: {
		description: 'Toggle play/pause for input',
		parameters: {
			Input: 'input'
		}
	},

	PreviewInput: {
		description: 'Send selected input to Preview',
		parameters: {
			Input: 'input'
		}
	},

	PreviewInputNext: 'Send the next Input to Preview',

	PreviewInputPrevious: 'Send the previous Input to Preview',

	PreviousItem: {
		description: 'Move to previous item in List',
		parameters: {
			Input: 'input'
		}
	},

	PreviousPicture: {
		description: 'Move to Previous Picture for Photo and PowerPoint Inputs',
		parameters: {
			Input: 'input'
		}
	},

	RemoveInput: {
		description: 'Remove input',
		parameters: {
			Input: 'input'
		}
	},

	ResetInput: {
		description: 'Reset input',
		parameters: {
			Input: 'input'
		}
	},

	Restart: {
		description: 'Restart input',
		parameters: {
			Input: 'input'
		}
	},

	SaveVideoDelay: {
		description: 'Save video clip from Video Delay',
		parameters: {
			Input: 'input',
			Duration: {
				type: 'number',
				description: 'In milliseconds'
			}
		}
	},

	SelectCategory: {
		description: 'Select category of inputs',
		parameters: {
			Value: {
				type: 'string',
				description: 'Name of caregory'
			}
		}
	},

	SelectIndex: {
		description: 'Photos,List: Selects item in List according to Value starting from number 1. Virtual Set: Zooms to selected preset using the current speed settings',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Index of item'
			}
		}
	},

	SetAlpha: {
		description: 'Set Input transparency',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Alpha between 0 and 255. 0 is transparent. 255 is opaque.'
			}
		}
	},

	SetCCGainB: {
		description: 'Change Gain B level of Input.',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Value between 0 and 2. 1 is original value.'
			}
		}
	},

	SetCCGainG: {
		description: 'Change Gain G level of Input.',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Value between 0 and 2. 1 is original value.'
			}
		}
	},

	SetCCGainR: {
		description: 'Change Gain R level of Input.',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Value between 0 and 2. 1 is original value.'
			}
		}
	},

	SetCCGainRGB: {
		description: 'Change Gain RGB level of Input.',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Value between 0 and 2. 1 is original value.'
			}
		}
	},

	SetCCGammaB: {
		description: 'Change Gamma B level of Input.',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Value between -1 and 1. 0 is original value.'
			}
		}
	},

	SetCCGammaG: {
		description: 'Change Gamma G level of Input.',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Value between -1 and 1. 0 is original value.'
			}
		}
	},

	SetCCGammaR: {
		description: 'Change Gamma R level of Input.',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Value between -1 and 1. 0 is original value.'
			}
		}
	},

	SetCCGammaRGB: {
		description: 'Change Gamma RGB level of Input.',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Value between -1 and 1. 0 is original value.'
			}
		}
	},

	SetCCHue: {
		description: 'Change Hue level of Input.',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Value between -1 and 1. 0 is original value.'
			}
		}
	},

	SetCCLiftB: {
		description: 'Change Lift B level of Input.',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Value between -1 and 1. 0 is original value.'
			}
		}
	},

	SetCCLiftG: {
		description: 'Change Lift G level of Input.',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Value between -1 and 1. 0 is original value.'
			}
		}
	},

	SetCCLiftR: {
		description: 'Change Lift R level of Input.',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Value between -1 and 1. 0 is original value.'
			}
		}
	},

	SetCCLiftRGB: {
		description: 'Change Lift RGB level of Input.',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Value between -1 and 1. 0 is original value.'
			}
		}
	},

	SetCCSaturation: {
		description: 'Change Saturation level of Input.',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Value between -1 and 1. 0 is original value. -1 is greyscale. 1 is very saturated.'
			}
		}
	},

	SetInputName: {
		description: 'Set the Display Name of the Input',
		parameters: {
			Input: 'input',
			Value: {
				type: 'string',
				description: 'New display name'
			}
		}
	},

	SetPanX: {
		description: 'Change current PanX value of Input',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Value between -2 to 2. 0=centered, -2=100% to left, 2=100% to right'
			}
		}
	},

	SetPanY: {
		description: 'Change current PanY value of Input',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Value between -2 to 2. 0=centered, -2=100% to bottom, 2=100% to top'
			}
		}
	},

	SetPictureEffect: {
		description: 'Set transition effect for Photos and PowerPoint Inputs.',
		parameters: {
			Input: 'input',
			Value: {
				type: 'string',
				description: 'Transition name. (Fade, Zoom, etc)'
			}
		}
	},

	SetPictureEffectDuration: {
		description: 'Set duration of transition effect for Photos and PowerPoint Inputs.',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Duration in milliseconds'
			}
		}
	},

	SetPictureTransition: {
		description: 'Set transition time between Photos and PowerPoint slides.',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Duration in seconds between entries'
			}
		}
	},

	SetPosition: {
		description: 'Set Position of selected Input',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Value in Milliseconds'
			}
		}
	},

	SetRate: {
		description: 'Set Playback speed/rate for Videos and Video Delays',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Value between 0.1 and 4. 0.5=50%, 1=100%, 2=200%, 4=400%'
			}
		}
	},

	SetRateSlowMotion: {
		description: 'Set Slow Motion speed for Instant Replay',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Value between 0.1 and 1.0. 0.1=10%, 0.5=50%, 1=100%'
			}
		}
	},

	SetZoom: {
		description: 'Change current Zoom level of Input.',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Value between 0 and 5.0. 1=100%, 0.5=50%, 2=200%'
			}
		}
	},

	SharpenOff: {
		description: 'Switch off sharpen for Input.',
		parameters: {
			Input: 'input'
		}
	},

	SharpenOn: {
		description: 'Switch on sharpen for Input.',
		parameters: {
			Input: 'input'
		}
	},

	VideoCallAudioSource: {
		description: 'Select audio source to route to Video Call (to let the caller receive the selected audio). Including mix-minus.',
		parameters: {
			Input: 'input',
			Value: {
				type: 'string',
				description: 'Bus Valid values: Master,Headphones,BusA,BusB,BusC,BusD,BusE,BusF,BusG'
			}
		}
	},

	VideoCallVideoSource: {
		description: 'Select video source to route to Video Call (to let the caller receive the selected video).',
		parameters: {
			Input: 'input',
			Value: {
				type: 'string',
				description: 'Valid values: Output1,Output2,Output3,Output4'
			}
		}
	},

	VideoDelayStartRecording: {
		description: 'Start Video Delay Recording',
		parameters: {
			Input: 'input',
			Duration: {
				type: 'number',
				description: 'Delay in milliseconds'
			}
		}
	},

	VideoDelayStartStopRecording: {
		description: 'Toggle start/stop Video Delay Recording',
		parameters: {
			Input: 'input',
			Duration: {
				type: 'number',
				description: 'Duration in milliseconds'
			}
		}
	},

	VideoDelayStopRecording: {
		description: 'Stop Video Delay Recording',
		parameters: {
			Input: 'input',
			Duration: {
				type: 'number',
				description: 'Duration in milliseconds'
			}
		}
	},

	WaitForCompletion: {
		description: 'Wait for a Video Input to reach the end of playback.',
		parameters: {
			Input: 'input',

			Duration: {
				type: 'number',
				description: 'Duration in milliseconds'
			}
		}
	}
}