export default {
  SetCCGainB: {
    description: 'Change Gain B level of Input',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Value between 0 and 2. 1 is original value',
      },
    },
  },

  SetCCGainG: {
    description: 'Change Gain G level of Input',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Value between 0 and 2. 1 is original value',
      },
    },
  },

  SetCCGainR: {
    description: 'Change Gain R level of Input',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Value between 0 and 2. 1 is original value',
      },
    },
  },

  SetCCGainRGB: {
    description: 'Change Gain RGB level of Input',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Value between 0 and 2. 1 is original value',
      },
    },
  },
  SetCCGainY: {
    description: 'Change Gain Y level of Input',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Value between 0 and 2. 1 is original value',
      },
    },
  },

  SetCCGammaB: {
    description: 'Change Gamma B level of Input',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Value between -1 and 1. 0 is original value',
      },
    },
  },

  SetCCGammaG: {
    description: 'Change Gamma G level of Input',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Value between -1 and 1. 0 is original value',
      },
    },
  },

  SetCCGammaR: {
    description: 'Change Gamma R level of Input',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Value between -1 and 1. 0 is original value',
      },
    },
  },

  SetCCGammaRGB: {
    description: 'Change Gamma RGB level of Input',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Value between -1 and 1. 0 is original value',
      },
    },
  },

  SetCCGammaY: {
    description: 'Change Gamma Y level of Input',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Value between -1 and 1. 0 is original value',
      },
    },
  },

  SetCCHue: {
    description: 'Change Hue level of Input',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Value between -1 and 1. 0 is original value',
      },
    },
  },

  SetCCLiftB: {
    description: 'Change Lift B level of Input',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Value between -1 and 1. 0 is original value',
      },
    },
  },

  SetCCLiftG: {
    description: 'Change Lift G level of Input',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Value between -1 and 1. 0 is original value',
      },
    },
  },

  SetCCLiftR: {
    description: 'Change Lift R level of Input',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Value between -1 and 1. 0 is original value',
      },
    },
  },

  SetCCLiftY: {
    description: 'Change Lift Y level of Input',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Value between -1 and 1. 0 is original value',
      },
    },
  },

  SetCCLiftRGB: {
    description: 'Change Lift RGB level of Input',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description: 'Value between -1 and 1. 0 is original value',
      },
    },
  },

  SetCCSaturation: {
    description: 'Change Saturation level of Input',
    parameters: {
      Input: 'input',
      Value: {
        type: 'number',
        description:
          'Value between -1 and 1. 0 is original value. -1 is greyscale. 1 is very saturated',
      },
    },
  },
}
