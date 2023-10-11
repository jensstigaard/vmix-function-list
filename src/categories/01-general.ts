function SetDynamicValueEntries() {
  const [start, end] = [1, 4]

  const output: Record<string, any> = {}

  // Iterate through the dynamic input entries
  for (let i = start; i <= end; i++) {
    output[`SetDynamicValue${i}`] = {
      description: `Set Dynamic Value to use when specifying DynamicInput${i} as a shortcut value`,
      parameters: {
        Value: 'string',
      },
    }
  }

  return output
}

export default {
  ActivatorRefresh: 'Refresh all activator device lights and controls',

  CallManagerShowHide: 'Toggle show/hide of vMix call manager',

  KeyPress: {
    description: 'Force key press. To activate shortcuts',
    parameters: {
      Value: 'string',
    },
  },

  SendKeys: {
    description: 'Send keys to active window',
    parameters: {
      Value: 'string',
    },
  },

  ...SetDynamicValueEntries(),

  Undo: 'Undo closing Input.',
}
