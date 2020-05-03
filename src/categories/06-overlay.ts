export default {

	// MultiView overlay functions - start

	MoveMultiViewOverlay: {
		description: 'Move Overlay in Input MultiView according to Value parameter. Example: 1,2 moves Overlay1 to Overlay2',
		parameters: {
			Input: 'input',
			Value: [ // Composite - separated by ","
				{
					type: 'number',
					description: 'FromIndex - starting by 1'
				},
				{
					type: 'number',
					description: 'ToIndex - starting by 1'
				},
			],
		}
	},

	MultiViewOverlay: {
		description: 'Toggle On/Off MultiView Overlay For Input At Index',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Index starting from 1'
			}
		}
	},

	MultiViewOverlayOff: {
		description: 'Switch Off MultiView Overlay For Input At Index',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Index starting from 1'
			}
		}
	},

	MultiViewOverlayOn: {
		description: 'Switch On MultiView Overlay For Input At Index',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Index starting from 1'
			}
		}
	},

	// MultiView overlay functions - end

	// Overlay 1 functions - start

	OverlayInput1: {
		description: 'Toggle Overlay1 On/Off with selected Input using configured Transition',
		parameters: {
			Input: 'input'
		}
	},

	OverlayInput1In: {
		description: 'Transition In to Overlay1 with selected Input',
		parameters: {
			Input: 'input'
		}
	},

	OverlayInput1Off: 'Immediately switch Overlay1 Off (Cut)',
	OverlayInput1Out: 'Transition Out Overlay1',
	OverlayInput1Zoom: 'Zooms PIP Overlay 1 to fill Fullscreen and vice versa',

	// Overlay 1 functions - end

	// Overlay 2 functions - start

	OverlayInput2: {
		description: 'Toggle Overlay2 On/Off with selected Input using configured Transition',
		parameters: {
			Input: 'input'
		}
	},

	OverlayInput2In: {
		description: 'Transition In to Overlay2 with selected Input',
		parameters: {
			Input: 'input'
		}
	},

	OverlayInput2Off: 'Immediately switch Overlay2 Off (Cut)',
	OverlayInput2Out: 'Transition Out Overlay2',
	OverlayInput2Zoom: 'Zooms PIP Overlay 2 to fill Fullscreen and vice versa',

	// Overlay 2 functions - end

	// Overlay 3 functions - start

	OverlayInput3: {
		description: 'Toggle Overlay3 On/Off with selected Input using configured Transition',
		parameters: {
			Input: 'input'
		}
	},

	OverlayInput3In: {
		description: 'Transition In to Overlay3 with selected Input',
		parameters: {
			Input: 'input'
		}
	},

	OverlayInput3Off: 'Immediately switch Overlay3 Off (Cut)',
	OverlayInput3Out: 'Transition Out Overlay3',
	OverlayInput3Zoom: 'Zooms PIP Overlay 3 to fill Fullscreen and vice versa',

	// Overlay 3 functions - end

	// Overlay 4 functions - start

	OverlayInput4: {
		description: 'Toggle Overlay4 On/Off with selected Input using configured Transition',
		parameters: {
			Input: 'input'
		}
	},

	OverlayInput4In: {
		description: 'Transition In to Overlay4 with selected Input',
		parameters: {
			Input: 'input'
		}
	},

	OverlayInput4Off: 'Immediately switch Overlay4 Off (Cut)',
	OverlayInput4Out: 'Transition Out Overlay4',
	OverlayInput4Zoom: 'Zooms PIP Overlay 4 to fill Fullscreen and vice versa',

	// Overlay 4 functions - end

	OverlayInputAllOff: 'Immediately switch all Overlays Off',

	PreviewOverlayInput1: {
		description: 'Preview Overlay1 using the selected Input',
		parameters: {
			Input: 'input'
		}
	},

	PreviewOverlayInput2: {
		description: 'Preview Overlay2 using the selected Input',
		parameters: {
			Input: 'input'
		}
	},

	PreviewOverlayInput3: {
		description: 'Preview Overlay3 using the selected Input',
		parameters: {
			Input: 'input'
		}
	},

	PreviewOverlayInput4: {
		description: 'Preview Overlay4 using the selected Input',
		parameters: {
			Input: 'input'
		}
	},

	SetMultiViewOverlay: {
		description: 'Change Overlay in Input MultiView according to Value parameter. Example: 1,2 changes Overlay1 to Input2',
		parameters: {
			Input: 'input',
			Value: [ // Composite - separated by ","
				{
					type: 'number',
					description: 'Overlay number (1 to 4)'
				},
				{
					type: 'string',
					description: 'Input to set as layer'
				},
			],
		}
	},
}
