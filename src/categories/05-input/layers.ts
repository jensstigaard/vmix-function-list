export default {
  // New in vMix version 24
  LayerOff: {
    description: 'Turn off layer for input',
    parameters: {
      Input: {
        type: 'input',
      },
      Value: {
        type: 'number',
        description: 'Layer number 1-10',
      },
    },
  },

  LayerOn: {
    description: 'Turn on layer for input',
    parameters: {
      Input: {
        type: 'input',
      },
      Value: {
        type: 'number',
        description: 'Layer number 1-10',
      },
    },
  },

  LayerOnOff: {
    description: 'Toggle layer for input',
    parameters: {
      Input: {
        type: 'input',
      },
      Value: {
        type: 'number',
        description: 'Layer number 1-10',
      },
    },
  },

  SetLayerAnimated: {
    description: `Change Layer Index to Input. 
			Animate if input exists in another layer. 
			Example: 1,2,1000 changes Layer1 to Input2.`,
    parameters: {
      Input: 'input',
      Value: {
        type: 'string',
        description: 'Index,Input,DurationMilliseconds',
      },
    },
  },

  SetLayerDynamicCrop: {
    description: `Change current Crop value of Input Layer from DynamicValue1 (1-10).
		X1,Y1,X2,Y2 (values between 0 and 1)`,
    parameters: {
      Input: 'input',
      Value: {
        type: 'string',
        description: 'X1,Y1,X2,Y2',
      },
    },
  },

  SetLayerDynamicCropX1: {
    description: `Change current Crop X1 value of Input Layer from DynamicValue1 (1-10).
		0=No Crop, 1=Full Crop`,
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'X1 0.0-1.0',
      },
    },
  },

  SetLayerDynamicCropX2: {
    description: `Change current Crop X2 value of Input Layer from DynamicValue1 (1-10).
		0=No Crop, 1=Full Crop`,
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'X2 0.0-1.0',
      },
    },
  },

  SetLayerDynamicCropY1: {
    description: `Change current Crop Y1 value of Input Layer from DynamicValue1 (1-10).
		0=No Crop, 1=Full Crop`,
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Y1 0.0-1.0',
      },
    },
  },

  SetLayerDynamicCropY2: {
    description: `Change current Crop Y2 value of Input Layer from DynamicValue1 (1-10).
		0=No Crop, 1=Full Crop`,
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Y2 0.0-1.0',
      },
    },
  },

  SetLayerDynamicHeight: {
    description: `Change current Height value of Input Layer from DynamicValue1 (1-10).
		In pixels based on preset resolution`,
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Pixels -4096-4096',
      },
    },
  },

  SetLayerDynamicPanX: {
    description: `Change current PanX value of Input Layer from DynamicValue1 (1-10).
		0=centered, -2=100% to left, 2=100% to right`,
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Pan between -2.0 and 2.0',
      },
    },
  },

  SetLayerDynamicPanY: {
    description: `Change current PanY value of Input Layer from DynamicValue1 (1-10).
		0=centered, -2=100% to bottom, 2=100% to top`,
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Pan between -2.0 and 2.0',
      },
    },
  },

  SetLayerDynamicRectangle: {
    description: `Change current Rectangle values of Input Layer from DynamicValue1 (1-10) in pixels.`,
    parameters: {
      Input: 'input',
      Value: {
        type: 'string',
        description: 'X,Y,Width,Height',
      },
    },
  },

  SetLayerDynamicWidth: {
    description: `Change current Width value of Input Layer from DynamicValue1 (1-10).
			In pixels based on preset resolution`,
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Pixels -4096-4096',
      },
    },
  },

  SetLayerDynamicX: {
    description: `Change current X value of Input Layer from DynamicValue1 (1-10).
		In pixels based on preset resolution`,
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Pixels -4096-4096',
      },
    },
  },

  SetLayerDynamicY: {
    description: `Change current Y value of Input Layer from DynamicValue1 (1-10).
		In pixels based on preset resolution`,
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Pixels -4096-4096',
      },
    },
  },

  SetLayerDynamicZoom: {
    description: `Change current Zoom level of Input Layer from DynamicValue1 (1-10).
		1=100%, 0.5=50%, 2=200%`,
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Zoom between 0.0 and 5.0',
      },
    },
  },

  SwapLayerAnimated: {
    description: `Animate swapping the Layers in Input according to Value parameter.
		Example: 1,2,1000 swaps Layer1 and Layer2 over 1000 milliseconds.`,
    parameters: {
      Input: 'input',
      Value: {
        type: 'string',
        description: 'FromIndex,ToIndex,DurationMilliseconds',
      },
    },
  },
}
