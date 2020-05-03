export default {
	PTZCreateVirtualInput: {
		description: 'Creates a PTZ Virtual Input with the current Position',
		parameters: {
			Input: 'input'
		}
	},

	PTZFocusAuto: {
		description: 'Turn on auto focus for PTZ camera',
		parameters: {
			Input: 'input'
		}
	},

	PTZFocusFar: {
		description: 'Move focus farer away with speed for PTZ camera',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Speed 0.0 - 1.0'
			}
		}
	},

	PTZFocusManual: {
		description: 'Turn on manual focus for PTZ camera (disables auto focus)',
		parameters: {
			Input: 'input'
		}
	},

	PTZFocusNear: {
		description: 'Move focus nearer with speed for PTZ camera',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Speed 0.0 - 1.0'
			}
		}
	},

	PTZFocusStop: {
		description: 'Stop focus movement for PTZ camera',
		parameters: {
			Input: 'input'
		}
	},

	PTZHome: {
		description: 'Go to home position for PTZ camera',
		parameters: {
			Input: 'input'
		}
	},

	PTZMoveDown: {
		description: 'Move down with speed for PTZ camera',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Speed 0.0 - 1.0'
			}
		}
	},

	PTZMoveDownLeft: {
		description: 'Move down+left with speed for PTZ camera',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Speed 0.0 - 1.0'
			}
		}
	},

	PTZMoveDownRight: {
		description: 'Move down+right with speed for PTZ camera',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Speed 0.0 - 1.0'
			}
		}
	},

	PTZMoveLeft: {
		description: 'Move left with speed for PTZ camera',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Speed 0.0 - 1.0'
			}
		}
	},

	PTZMoveRight: {
		description: 'Move right with speed for PTZ camera',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Speed 0.0 - 1.0'
			}
		}
	},

	PTZMoveStop: {
		description: 'Stop all movement for PTZ camera',
		parameters: {
			Input: 'input'
		}
	},

	PTZMoveToVirtualInputPosition: {
		description: 'Moves to the Position of the PTZ Virtual Input without selecting it into Preview',
		parameters: {
			Input: 'input'
		}
	},

	PTZMoveToVirtualInputPositionByIndex: {
		description: 'Moves to the Position of the PTZ Virtual Input associated with this Input.',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Index 0-100. Index is first Input found starting from 0'
			}
		}
	},

	PTZMoveUp: {
		description: 'Move up with speed for PTZ camera',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Speed 0.0 - 1.0'
			}
		}
	},

	PTZMoveUpLeft: {
		description: 'Move up+left with speed for PTZ camera',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Speed 0.0 - 1.0'
			}
		}
	},

	PTZMoveUpRight: {
		description: 'Move up+right with speed for PTZ camera',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Speed 0.0 - 1.0'
			}
		}
	},

	PTZUpdateVirtualInput: {
		description: 'Updates selected PTZ Virtual Input with current Position',
		parameters: {
			Input: 'input'
		}
	},


	PTZZoomIn: {
		description: 'Zoom in with speed for PTZ camera',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Speed 0.0 - 1.0'
			}
		}
	},

	PTZZoomOut: {
		description: 'Zoom out with speed for PTZ camera',
		parameters: {
			Input: 'input',
			Value: {
				type: 'number',
				description: 'Speed 0.0 - 1.0'
			}
		}
	},

	PTZZoomStop: {
		description: 'Stop zoom for PTZ camera',
		parameters: {
			Input: 'input'
		}
	}
}
