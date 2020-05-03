export default {

	BrowserBack: {
		description: 'Go back one page for browser input',
		parameters: {
			Input: 'input'
		}
	},

	BrowserForward: {
		description: 'Go forward one page for browser input',
		parameters: {
			Input: 'input'
		}
	},

	BrowserKeyboardDisabled: {
		description: 'Disable keyboard for browser input',
		parameters: {
			Input: 'input'
		}
	},

	BrowserKeyboardEnabled: {
		description: 'Enable keyboard for browser input',
		parameters: {
			Input: 'input'
		}
	},

	BrowserMouseDisabled: {
		description: 'Disable mouse interaction for browser input',
		parameters: {
			Input: 'input'
		}
	},

	BrowserMouseEnabled: {
		description: 'Enable mouse interaction for browser input',
		parameters: {
			Input: 'input'
		}
	},

	BrowserNavigate: {
		description: 'Navigate browser input to specific URL',
		parameters: {
			Input: 'input',
			Value: {
				type: 'url',
				description: 'URL to navigate to'
			}
		}
	},

	BrowserReload: {
		description: 'Reload page for browser input',
		parameters: {
			Input: 'input'
		}
	}
}
