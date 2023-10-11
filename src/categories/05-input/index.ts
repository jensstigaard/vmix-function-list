import { Input } from '../../types/input'

import SetCC from './set-cc'

function SetLayerEntries() {
  const [start, end] = [1, 10]

  const output: Record<string, any> = {}

  const parameters = {
    Input: 'input',
    Value: 'string',
  }

  const map = {
    Crop: `Change current Crop value of Input Layer.
   
		X1,Y1,X2,Y2
		
		Value = X1,Y2,X2,Y2`,
    CropX1: `Change current Crop X1 value of Input Layer.
   
   1=No Crop, 0=Full Crop
   
   Value = Y2 0-1`,
    CropX2: `Change current Crop X2 value of Input Layer.
   
   1=No Crop, 0=Full Crop
   
   Value = Y2 0-1`,
    CropY1: `Change current Crop Y1 value of Input Layer.
   
   1=No Crop, 0=Full Crop
   
   Value = Y2 0-1`,
    CropY2: `Change current Crop Y2 value of Input Layer.
   
   1=No Crop, 0=Full Crop
   
   Value = Y2 0-1`,
    Height: `Change current Height value of Input Layer.
   
		In pixels based on preset resolution
		
		Value = Pixels -4096-4096`,
    PanX: `Change current PanX value of Input Layer.
   
   0=centered, -2=100% to bottom, 2=100% to top
   
   Value = Pan -2-2`,
    PanY: `Change current PanY value of Input Layer.
   
   0=centered, -2=100% to bottom, 2=100% to top
   
   Value = Pan -2-2`,
    Rectangle: `Change current Rectangle values of Input Layer in pixels.
   
		X,Y,Width,Height
		
		Value = X,Y,Width,Height`,
    Width: `Change current Width value of Input Layer.
   
   In pixels based on preset resolution
   
   Value = Pixels -4096-4096`,
    X: `Change current X value of Input Layer.
   
		In pixels based on preset resolution
		
		Value = Pixels -4096-4096`,
    Y: `Change current Y value of Input Layer.
   
		In pixels based on preset resolution
		
		Value = Pixels -4096-4096`,
    Zoom: `Change current Zoom level of Input Layer.
   
		1=100%, 0.5=50%, 2=200%
		
		Value = Zoom 0-5`,
  }

  // Iterate through the dynamic input entries
  for (let i = start; i <= end; i++) {
    const prefix = `SetLayer${i}`

    for (const [type, desc] of Object.entries(map)) {
      output[`${prefix}${type}`] = {
        description: desc,
        parameters,
      }
    }
  }

  return output
}

export default {
  ActiveInput: {
    description: 'Send to Output the selected Input',
    parameters: {
      Input: 'input',
    },
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
      Value: [
        // Composite value
        {
          type: 'string',
          description: 'Type',
        },
        {
          type: 'string',
          description: 'Filename',
        },
      ],
    },
  },

  AutoPauseOff: {
    description: 'Auto Pause off for Input',
    parameters: {
      Input: 'input',
    },
  },

  AutoPauseOn: {
    description: 'Auto Pause on for Input',
    parameters: {
      Input: 'input',
    },
  },

  AutoPlayFirst: {
    description:
      'Toggle automatically playing first item in a List with Transition',
    parameters: {
      Input: 'input',
    },
  },

  AutoPlayFirstOff: {
    description:
      'Switch off automatically playing first item in a List with Transition',
    parameters: {
      Input: 'input',
    },
  },

  AutoPlayFirstOn: {
    description:
      'Switch on automatically playing first item in a List with Transition',
    parameters: {
      Input: 'input',
    },
  },

  AutoPlayNext: {
    description: 'Toggle automatically playing next item in a List',
    parameters: {
      Input: 'input',
    },
  },

  AutoPlayNextOff: {
    description: 'Switch Off automatically playing next item in a List',
    parameters: {
      Input: 'input',
    },
  },

  AutoPlayNextOn: {
    description: 'Switch On automatically playing next item in a List',
    parameters: {
      Input: 'input',
    },
  },

  AutoPlayOff: {
    description: 'Switch Off automatically playing on transition',
    parameters: {
      Input: 'input',
    },
  },

  AutoPlayOn: {
    description: 'Switch On automatically playing on transition',
    parameters: {
      Input: 'input',
    },
  },

  AutoRestartOff: {
    description: 'Switch Off automatically restarting on transition',
    parameters: {
      Input: 'input',
    },
  },

  AutoRestartOn: {
    description: 'Switch On automatically restarting on transition',
    parameters: {
      Input: 'input',
    },
  },

  ColourCorrectionAuto: {
    description: 'Perform Basic Auto Colour Correction for Input',
    parameters: {
      Input: 'input',
    },
  },

  ColourCorrectionReset: {
    description: 'Reset Colour Correction for Input',
    parameters: {
      Input: 'input',
    },
  },

  CreateVirtualInput: {
    description: 'Create Virtual Input based on existing input',
    parameters: {
      Input: 'input',
    },
  },

  DeinterlaceOff: {
    description: 'Switch off deinterlacing for Input',
    parameters: {
      Input: 'input',
    },
  },

  DeinterlaceOn: {
    description: 'Switch on deinterlacing for Input',
    parameters: {
      Input: 'input',
    },
  },

  Effect1: {
    description: 'Toggle Effect 1 on/off',
    parameters: {
      Input: 'input',
    },
  },

  Effect1Off: {
    description: 'Turn off Effect 1',
    parameters: {
      Input: 'input',
    },
  },

  Effect1On: {
    description: 'Turn on Effect 1',
    parameters: {
      Input: 'input',
    },
  },

  Effect2: {
    description: 'Toggle Effect 2 on/off',
    parameters: {
      Input: 'input',
    },
  },

  Effect2Off: {
    description: 'Turn off Effect 2',
    parameters: {
      Input: 'input',
    },
  },

  Effect2On: {
    description: 'Turn on Effect 2',
    parameters: {
      Input: 'input',
    },
  },

  Effect3: {
    description: 'Toggle Effect 3 on/off',
    parameters: {
      Input: 'input',
    },
  },

  Effect3Off: {
    description: 'Turn off Effect 3',
    parameters: {
      Input: 'input',
    },
  },

  Effect3On: {
    description: 'Turn on Effect 3',
    parameters: {
      Input: 'input',
    },
  },

  Effect4: {
    description: 'Toggle Effect 4 on/off',
    parameters: {
      Input: 'input',
    },
  },

  Effect4Off: {
    description: 'Turn off Effect 4',
    parameters: {
      Input: 'input',
    },
  },

  Effect4On: {
    description: 'Turn on Effect 4',
    parameters: {
      Input: 'input',
    },
  },

  InputPreviewHide: {
    description: 'Hides large preview of input',
    parameters: {
      Input: 'input',
    },
  },

  InputPreviewShow: {
    description: 'Shows large preview of input',
    parameters: {
      Input: 'input',
    },
  },

  InputPreviewShowHide: {
    description: 'Toggles large preview of input',
    parameters: {
      Input: 'input',
    },
  },

  // New in vMix 24
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

  ListAdd: {
    description: 'Add Filename to List',
    parameters: {
      Input: {
        type: 'input',
        description: 'List Input',
      },
      Value: {
        type: 'string',
        description: 'Filename to be added to list',
      },
    },
  },

  ListExport: {
    description: 'Export List as M3U file',
    parameters: {
      Input: {
        type: 'input',
        description: 'List Input',
      },
      Value: {
        type: 'string',
        description: 'Filename of exported file',
      },
    },
  },

  ListPlayOut: {
    description: 'Play out list input',
    parameters: {
      Input: 'input',
    },
  },

  ListRemove: {
    description: 'Remove from List by Index',
    parameters: {
      Input: {
        type: 'input',
        description: 'List Input',
      },
      Value: {
        type: 'number',
        description: 'Index starting from 1',
      },
    },
  },

  ListRemoveAll: {
    description: 'Remove all items from List',
    parameters: {
      Input: 'input',
    },
  },

  ListShowHide: {
    description: 'Toggle show/hide list',
    parameters: {
      Input: 'input',
    },
  },

  ListShuffle: {
    description: 'Toggle Shuffle (randomize) List',
    parameters: {
      Input: 'input',
    },
  },

  LivePlayPause: {
    description: 'Toggle Live/Pause of Input',
    parameters: {
      Input: 'input',
    },
  },

  Loop: {
    description: 'Toogle looping of Input',
    parameters: {
      Input: 'input',
    },
  },

  LoopOff: {
    description: 'Switch off looping of Input',
    parameters: {
      Input: 'input',
    },
  },

  LoopOn: {
    description: 'Switch on looping of Input',
    parameters: {
      Input: 'input',
    },
  },

  MarkIn: {
    description: 'Mark in on current position for Input',
    parameters: {
      Input: 'input',
    },
  },

  MarkOut: {
    description: 'Mark out on current position for Input',
    parameters: {
      Input: 'input',
    },
  },

  MarkReset: {
    description: 'Reset Mark in and out for Input',
    parameters: {
      Input: 'input',
    },
  },

  MarkResetIn: {
    description: 'Reset Mark in for Input',
    parameters: {
      Input: 'input',
    },
  },

  MarkResetOut: {
    description: 'Reset Mark out for Input',
    parameters: {
      Input: 'input',
    },
  },

  MirrorOff: {
    description: 'Switch off mirror for Input',
    parameters: {
      Input: 'input',
    },
  },

  MirrorOn: {
    description: 'Switch on mirror for Input',
    parameters: {
      Input: 'input',
    },
  },

  MoveInput: {
    description: 'Move Input',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'New input number starting from 1',
      },
    },
  },

  MoveLayer: {
    description: 'Move Layer in Input according to Value parameter',
    parameters: {
      Input: 'input',
      Value: [
        // Composite
        {
          type: 'number',
          description: 'FromIndex (starting at 1)',
        },
        {
          type: 'number',
          description: 'ToIndex (starting at 1)',
        },
      ],
    },
  },

  NextItem: {
    description: 'Move to next item in List',
    parameters: {
      Input: 'input',
    },
  },

  NextPicture: {
    description: 'Move to Next Picture for Photo and PowerPoint Inputs',
    parameters: {
      Input: 'input',
    },
  },

  Pause: {
    description: 'Pause input',
    parameters: {
      Input: 'input',
    },
  },

  Play: {
    description: 'Play input',
    parameters: {
      Input: 'input',
    },
  },

  PlayPause: {
    description: 'Toggle play/pause for input',
    parameters: {
      Input: 'input',
    },
  },

  PreviewInput: {
    description: 'Send selected input to Preview',
    parameters: {
      Input: 'input',
    },
  },

  PreviewInputNext: 'Send the next Input to Preview',

  PreviewInputPrevious: 'Send the previous Input to Preview',

  PreviousItem: {
    description: 'Move to previous item in List',
    parameters: {
      Input: 'input',
    },
  },

  PreviousPicture: {
    description: 'Move to Previous Picture for Photo and PowerPoint Inputs',
    parameters: {
      Input: 'input',
    },
  },

  RemoveInput: {
    description: 'Remove input',
    parameters: {
      Input: 'input',
    },
  },

  ResetInput: {
    description: 'Reset input',
    parameters: {
      Input: 'input',
    },
  },

  Restart: {
    description: 'Restart input',
    parameters: {
      Input: 'input',
    },
  },

  SaveVideoDelay: {
    description: 'Save video clip from Video Delay',
    parameters: {
      Input: 'input',
      Duration: {
        type: 'number',
        description: 'In milliseconds',
      },
    },
  },

  SelectCategory: {
    description: 'Select category of inputs',
    parameters: {
      Value: {
        type: 'string',
        description: 'Name of caregory',
      },
    },
  },

  SelectIndex: {
    description:
      'Photos,List: Selects item in List according to Value starting from number 1. Virtual Set: Zooms to selected preset using the current speed settings',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Index of item',
      },
    },
  },

  SetAlpha: {
    description: 'Set Input transparency',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Alpha between 0 and 255. 0 is transparent. 255 is opaque',
      },
    },
  },

  ...SetCC,

  SetCrop: {
    description: 'Change current Crop value of Input',
    parameters: {
      Input: 'input',
      Value: {
        type: 'string',
        description: 'Format: X1,Y1,X2,Y2',
      },
    },
  },

  SetCropX1: {
    description: 'Change current Crop X1 value of Input.',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: '0=No Crop, 1=Full Crop',
      },
    },
  },

  SetCropX2: {
    description: 'Change current Crop X2 value of Input.',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: '0=No Crop, 1=Full Crop',
      },
    },
  },

  SetCropY1: {
    description: 'Change current Crop Y1 value of Input.',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: '0=No Crop, 1=Full Crop',
      },
    },
  },

  SetCropY2: {
    description: 'Change current Crop Y2 value of Input.',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: '0=No Crop, 1=Full Crop',
      },
    },
  },

  SetDynamicInput1: {
    description: 'Set Dynamic Input 1',
    parameters: {
      Value: 'input',
      // Input: 'input'
    },
  },

  SetDynamicInput2: {
    description: 'Set Dynamic Input 2',
    parameters: {
      Value: 'input',
      // Input: 'input'
    },
  },

  SetDynamicInput3: {
    description: 'Set Dynamic Input 3',
    parameters: {
      Value: 'input',
      // Input: 'input'
    },
  },

  SetDynamicInput4: {
    description: 'Set Dynamic Input 4',
    parameters: {
      Value: 'input',
      // Input: 'input'
    },
  },

  SetEffect1Strength: {
    description: 'Set Input 1 Effect Strength',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Value between 0.0 to 1.0',
      },
    },
  },

  SetEffect2Strength: {
    description: 'Set Input 2 Effect Strength',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Value between 0.0 to 1.0',
      },
    },
  },

  SetEffect3Strength: {
    description: 'Set Input 3 Effect Strength',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Value between 0.0 to 1.0',
      },
    },
  },

  SetEffect4Strength: {
    description: 'Set Input 4 Effect Strength',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Value between 0.0 to 1.0',
      },
    },
  },

  SetFrameDelay: {
    description: 'Set the delay in framees',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Number of frames',
      },
    },
  },

  SetInputName: {
    description: 'Set the Display Name of the Input',
    parameters: {
      Input: 'input',
      Value: {
        type: 'string',
        description: 'New display name',
      },
    },
  },

  SetLayer: {
    description:
      'Change Layer in Input according to Value parameter. Example: 1,2 changes Layer1 to Input2',
    parameters: {
      Input: 'input',
      Value: [
        // Composite - separated by ","
        {
          type: 'number',
          description: 'Layer number (1 to 10)',
        },
        {
          type: 'string',
          description: 'Input to set as layer',
        },
      ],
    },
  },

  ...SetLayerEntries(),

  SetPanX: {
    description: 'Change current PanX value of Input',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description:
          'Value between -2 to 2. 0=centered, -2=100% to left, 2=100% to right',
      },
    },
  },

  SetPanY: {
    description: 'Change current PanY value of Input',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description:
          'Value between -2 to 2. 0=centered, -2=100% to bottom, 2=100% to top',
      },
    },
  },

  SetPictureEffect: {
    description: 'Set transition effect for Photos and PowerPoint Inputs',
    parameters: {
      Input: 'input',
      Value: {
        type: 'string',
        description: 'Transition name. (Fade, Zoom, etc)',
      },
    },
  },

  SetPictureEffectDuration: {
    description:
      'Set duration of transition effect for Photos and PowerPoint Inputs',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Duration in milliseconds',
      },
    },
  },

  SetPictureTransition: {
    description: 'Set transition time between Photos and PowerPoint slides',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Duration in seconds between entries',
      },
    },
  },

  SetPosition: {
    description: 'Set Position of selected Input',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Value in Milliseconds',
      },
    },
  },

  SetRate: {
    description: 'Set Playback speed/rate for Videos and Video Delays',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Value between 0.1 and 4. 0.5=50%, 1=100%, 2=200%, 4=400%',
      },
    },
  },

  SetRateSlowMotion: {
    description: 'Set Slow Motion speed for Instant Replay',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Value between 0.1 and 1.0. 0.1=10%, 0.5=50%, 1=100%',
      },
    },
  },

  SetZoom: {
    description: 'Change current Zoom level of Input',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Value between 0 and 5.0. 1=100%, 0.5=50%, 2=200%',
      },
    },
  },

  SharpenOff: {
    description: 'Switch off sharpen for Input',
    parameters: {
      Input: 'input',
    },
  },

  SharpenOn: {
    description: 'Switch on sharpen for Input',
    parameters: {
      Input: 'input',
    },
  },

  VideoCallAudioSource: {
    description:
      'Select audio source to route to Video Call (to let the caller receive the selected audio). Including mix-minus',
    parameters: {
      Input: 'input',
      Value: {
        type: 'string',
        description:
          'Bus Valid values: Master,Headphones,BusA,BusB,BusC,BusD,BusE,BusF,BusG',
      },
    },
  },

  VideoCallVideoSource: {
    description:
      'Select video source to route to Video Call (to let the caller receive the selected video)',
    parameters: {
      Input: 'input',
      Value: {
        type: 'string',
        description: 'Valid values: Output1,Output2,Output3,Output4',
      },
    },
  },

  VideoDelayStartRecording: {
    description: 'Start Video Delay Recording',
    parameters: {
      Input: 'input',
      Duration: {
        type: 'number',
        description: 'Delay in milliseconds',
      },
    },
  },

  VideoDelayStartStopRecording: {
    description: 'Toggle start/stop Video Delay Recording',
    parameters: {
      Input: 'input',
      Duration: {
        type: 'number',
        description: 'Duration in milliseconds',
      },
    },
  },

  VideoDelayStopRecording: {
    description: 'Stop Video Delay Recording',
    parameters: {
      Input: 'input',
      Duration: {
        type: 'number',
        description: 'Duration in milliseconds',
      },
    },
  },

  WaitForCompletion: {
    description: 'Wait for a Video Input to reach the end of playback',
    parameters: {
      Input: 'input',

      Duration: {
        type: 'number',
        description: 'Duration in milliseconds',
      },
    },
  },
}
