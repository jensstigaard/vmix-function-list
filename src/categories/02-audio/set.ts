function SetVolumeBusMixerEntries() {
  const busses = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'M']
  const output: Record<string, any> = {}

  for (const bus of busses) {
    output[`SetVolumeBusMixer${bus}`] = {
      description: `Set Volume of an Input's ${bus} Bus`,
      parameters: {
        Input: 'input',

        Value: {
          type: 'number',
          description: 'Volume between 0 to 100',
        },
      },
    }
  }

  return output
}
function SetVolumeChannelMixerEntries() {
  const [start, end] = [1, 16]
  const output: Record<string, any> = {}

  for (let i = start; i <= end; i++) {
    output[`SetVolumeChannelMixer${i}`] = {
      description: `Set Volume of an Input\'s sub channel ${i}`,
      parameters: {
        Input: 'input',

        Value: {
          type: 'number',
          description: 'Volume between 0 to 100',
        },
      },
    }
  }

  return output
}

export default {
  SetBalance: {
    description: 'Set balance for input',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Balance between -1 to 1',
      },
    },
  },

  SetBusAVolume: {
    description: 'Set volume for Bus A',
    parameters: {
      Value: {
        type: 'number',
        description: 'Volume between 0 to 100',
      },
    },
  },

  SetBusBVolume: {
    description: 'Set volume for Bus B',
    parameters: {
      Value: {
        type: 'number',
        description: 'Volume between 0 to 100',
      },
    },
  },

  SetBusCVolume: {
    description: 'Set volume for Bus C',
    parameters: {
      Value: {
        type: 'number',
        description: 'Volume between 0 to 100',
      },
    },
  },

  SetBusDVolume: {
    description: 'Set volume for Bus D',
    parameters: {
      Value: {
        type: 'number',
        description: 'Volume between 0 to 100',
      },
    },
  },

  SetBusEVolume: {
    description: 'Set volume for Bus E',
    parameters: {
      Value: {
        type: 'number',
        description: 'Volume between 0 to 100',
      },
    },
  },

  SetBusFVolume: {
    description: 'Set volume for Bus F',
    parameters: {
      Value: {
        type: 'number',
        description: 'Volume between 0 to 100',
      },
    },
  },

  SetBusGVolume: {
    description: 'Set volume for Bus G',
    parameters: {
      Value: {
        type: 'number',
        description: 'Volume between 0 to 100',
      },
    },
  },

  SetGain: {
    description: 'Set gain for Input',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Gain (unit in dB) between 0 to 24',
      },
    },
  },

  SetGainChannel1: {
    description: 'Set gain on channel 1 for Input',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Gain (unit in dB) between 0 to 24',
      },
    },
  },

  SetGainChannel2: {
    description: 'Set gain on channel 2 for Input',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Gain (unit in dB) between 0 to 24',
      },
    },
  },

  SetHeadphonesVolume: {
    description: 'Set volume for Headphones',
    parameters: {
      Value: {
        type: 'number',
        description: 'Volume between 0 to 100',
      },
    },
  },

  SetMasterVolume: {
    description: 'Set volume for Master',
    parameters: {
      Value: {
        type: 'number',
        description: 'Volume between 0 to 100',
      },
    },
  },

  SetVolume: {
    description: 'Set volume for Input',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Volume between 0 to 100',
      },
    },
  },

  // Added in vMix version 27
  SetVolumeBusMixer: {
    description: "Set Volume of an Input's Bus Mixer (M,A,B,C,D,E,F,G)",
    parameters: {
      Input: 'input',
      Value: {
        type: 'string',
        description: 'Bus,Volume 0-100',
      },
    },
  },

  ...SetVolumeBusMixerEntries(),

  SetVolumeChannel1: {
    description:
      'Set volume on channel 1 for Input. When using SeparateMono on an Audio Input, this can be used to set channel volumes independently',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Volume between 0 to 100',
      },
    },
  },

  SetVolumeChannel2: {
    description:
      'Set volume on channel 2 for Input. When using SeparateMono on an Audio Input, this can be used to set channel volumes independently',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Volume between 0 to 100',
      },
    },
  },

  SetVolumeChannelMixer: {
    description: "Set Volume of an Input's sub channel",
    parameters: {
      Input: 'input',
      Value: [
        // Composite - separated by ","
        {
          type: 'number',
          description: 'Channel between 1 to 16',
        },
        {
          type: 'number',
          description: 'Volume between 0 to 100',
        },
      ],
    },
  },

  ...SetVolumeChannelMixerEntries(),

  SetVolumeFade: {
    description: 'Set volume gradually over x milliseconds',
    parameters: {
      Input: 'input',
      Value: [
        // Composite - separated by ","
        {
          type: 'number',
          description: 'Volume between 0 to 100',
        },
        {
          type: 'number',
          description: 'Duration in milliseconds',
        },
      ],
    },
  },
}
