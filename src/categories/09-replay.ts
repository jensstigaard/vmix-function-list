const CHANNEL = {
	type: 'string',
	description: 'Valid values: Current, A or B'
}

export default {

	ReplayACamera1: 'Set Replay A input to camera 1',
	ReplayACamera2: 'Set Replay A input to camera 2',
	ReplayACamera3: 'Set Replay A input to camera 3',
	ReplayACamera4: 'Set Replay A input to camera 4',
	ReplayACamera5: 'Set Replay A input to camera 5',
	ReplayACamera6: 'Set Replay A input to camera 6',
	ReplayACamera7: 'Set Replay A input to camera 7',
	ReplayACamera8: 'Set Replay A input to camera 8',

	ReplayBCamera1: 'Set Replay B input to camera 1',
	ReplayBCamera2: 'Set Replay B input to camera 2',
	ReplayBCamera3: 'Set Replay B input to camera 3',
	ReplayBCamera4: 'Set Replay B input to camera 4',
	ReplayBCamera5: 'Set Replay B input to camera 5',
	ReplayBCamera6: 'Set Replay B input to camera 6',
	ReplayBCamera7: 'Set Replay B input to camera 7',
	ReplayBCamera8: 'Set Replay B input to camera 8',

	ReplayCamera1: 'Set Current Replay playout to camera 1',
	ReplayCamera2: 'Set Current Replay playout to camera 2',
	ReplayCamera3: 'Set Current Replay playout to camera 3',
	ReplayCamera4: 'Set Current Replay playout to camera 4',
	ReplayCamera5: 'Set Current Replay playout to camera 5',
	ReplayCamera6: 'Set Current Replay playout to camera 6',
	ReplayCamera7: 'Set Current Replay playout to camera 7',
	ReplayCamera8: 'Set Current Replay playout to camera 8',

	ReplayChangeDirection: {
		description: 'Switch replay direction - forward/reverse',
		parameters: {
			Channel: CHANNEL
		}
	},

	ReplayChangeSpeed: {
		description: 'Change replay playback speed',
		parameters: {
			Value: {
				type: 'number',
				description: 'Speed in percentage'
			},
			Channel: CHANNEL
		}
	},

	ReplayCopyLastEvent: {
		description: 'Copy last replay event to event list',
		parameters: {
			Value: {
				type: 'number',
				description: 'Event list 0-19'
			}
		}
	},

	ReplayCopySelectedEvent: {
		description: 'Copy selected replay event to event list',
		parameters: {
			Value: {
				type: 'number',
				description: 'Event list 0-19'
			},
		},
	},

	ReplayDeleteLastEvent: {
		description: 'Delete last replay event',
		parameters: {
			Channel: CHANNEL,
		},
	},
	ReplayDeleteSelectedEvent: {
		description: 'Delete selected replay event',
		parameters: {
			Channel: CHANNEL,
		},
	},

	// {
	// 	description: '',
	// 	parameters: {
	// 		Channel: {
	// 			type: 'string',
	// 			description: 'Valid values: Current, A or B'
	// 		},
	// 	},
	// },

	ReplayDuplicateLastEvent: {
		description: 'Duplicate last replay event',
		parameters: {
			Channel: CHANNEL,
		},
	},
	ReplayDuplicateSelectedEvent: {
		description: 'Duplicate selected replay event',
		parameters: {
			Channel: CHANNEL,
		},
	},

	ReplayExportLastEvent: {
		description: 'Export last replay event to specific folder',
		parameters: {
			Channel: CHANNEL,
			Value: {
				type: 'string',
				description: 'Replay clip export destination folder. I.e C:\\\\vMix Replay Exported Clips\\'
			},
		}
	},

	ReplayFastBackward: {
		description: 'Replay fast backwards',
		parameters: {
			Channel: CHANNEL,
			Value: {
				type: 'number',
				description: 'Speed 1-30x'
			},
		}
	},

	ReplayFastForward: {
		description: 'Replay fast forward',
		parameters: {
			Channel: CHANNEL,
			Value: {
				type: 'number',
				description: 'Speed 1-30x'
			}
		}
	},

	ReplayJumpFrames: {
		description: 'Replay jump frames',
		parameters: {
			Channel: CHANNEL,
			Value: {
				type: 'number',
				description: 'Number of frames to jump'
			}
		}
	},

	ReplayJumpFramesFastOff: {
		description: 'ReplayJumpFrames jumps 1 frame for each value instead of 1 second.',
		parameters: {
			Channel: CHANNEL
		}
	},

	ReplayJumpFramesFastOn: {
		description: 'ReplayJumpFrames jumps 1 second for each value instead of 1 frame.',
		parameters: {
			Channel: CHANNEL,
		}
	},

	ReplayJumpToNow: {
		description: 'Replay jump to now',
		parameters: {
			Channel: CHANNEL,
		}
	},

	ReplayLastEventCameraOff: {
		description: 'Replay turn off speficied camera angle for last event',
		parameters: {
			Value: {
				type: 'number',
				description: 'Camera angle 1-8'
			}
		}
	},

	ReplayLastEventCameraOn: {
		description: 'Replay turn on speficied camera angle for last event',
		parameters: {
			Value: {
				type: 'number',
				description: 'Camera angle 1-8'
			}
		}
	},

	ReplayLastEventSingleCameraOn: {
		description: 'Replay turn on only speficied camera angle for last event (turns off all other angles for event)',
		parameters: {
			Value: {
				type: 'number',
				description: 'Camera angle 1-8'
			}
		}
	},

	ReplayLive: 'Replay: Turn on replay live mode - replay window showing live sources and new replays are created in repect to now timestamp',
	ReplayLiveToggle: 'Replay: Toggle on/off replay live mode - toggles whether replay window is showing live sources and new replays are created in repect to now timestamp',
	ReplayMarkCancel: 'Replay: Cancel marking of event',
	ReplayMarkIn: 'Replay: Mark In for new replay event in respect to current timestamp selected in replay module (from live/non live mode)',
	ReplayMarkInLive: 'Replay: Mark In for new replay event in respect to live',

	ReplayMarkInOut: {
		description: 'Replay: Mark In/Out based on number of seconds and current timestamp selected in replay module (from live/non live mode)',
		parameters: {
			Value: {
				type: 'number',
				description: 'Seconds'
			}
		}
	},

	ReplayMarkInOutLive: {
		description: 'Replay: Mark In/Out based on number of seconds back from right now',
		parameters: {
			Value: {
				type: 'number',
				description: 'Seconds'
			}
		}
	},

	// Added in version 26
	ReplayMarkInOutLiveFuture: {
		description: 'Number of seconds into the future to use when creating a new event.',
		parameters: {
			Value: {
				type: 'number',
				description: 'Seconds'
			}
		}
	},

	ReplayMarkInOutRecorded: {
		description: 'Replay: Mark In/Out based on number of seconds back from current selected timestamp of recorded session',
		parameters: {
			Value: {
				type: 'number',
				description: 'Seconds'
			}
		}
	},

	ReplayMarkInRecorded: 'Replay: Mark In based on currently selected timestamp of recorded session',
	ReplayMarkInRecordedNow: 'Replay: Mark In based on currently selected timestamp of now timestamp in recorded session',

	ReplayMarkOut: 'Replay: Mark Out based on currently selected timestamp of recorded session',

	ReplayMoveLastEvent: {
		description: 'Replay: Move Last replay event to other event list',
		parameters: {
			Value: {
				type: 'number',
				description: 'Event list 0-19'
			}
		}
	},

	ReplayMoveSelectedEvent: {
		description: 'Replay: Move selected replay event to other event list',
		parameters: {
			Value: {
				type: 'number',
				description: 'Event list 0-19'
			}
		}
	},

	ReplayMoveSelectedEventDown: 'Replay: Move selected event down in list',
	ReplayMoveSelectedEventUp: 'Replay: Move selected previous event up in list',

	ReplayMoveSelectedInPoint: {
		description: 'Replay: Move In-point for selected event',
		parameters: {
			Channel: CHANNEL,

			Value: {
				type: 'number',
				description: 'Number of frames relative. Negative number = previous in time. Positive number = Forward in time'
			}
		}
	},

	ReplayMoveSelectedOutPoint: {
		description: 'Replay: Move Out-point for selected event',
		parameters: {
			Channel: CHANNEL,

			Value: {
				type: 'number',
				description: 'Number of frames relative. Negative number = previous in time. Positive number = Forward in time'
			}
		}
	},

	ReplayPause: {
		description: 'Replay: Pause playback',
		parameters: {
			Channel: CHANNEL,
		},
	},

	ReplayPlay: {
		description: 'Replay: Resume playback',
		parameters: {
			Channel: CHANNEL,
		},
	},

	ReplayPlayAllEvents: {
		description: 'Replay: Play all events in active list (do NOT automatically transition to output)',
		parameters: {
			Channel: CHANNEL,
		},
	},
	ReplayPlayAllEventsToOutput: {
		description: 'Replay: Play all events in active list (automatically transition to output)',
		parameters: {
			Channel: CHANNEL,
		},
	},

	ReplayPlayBackward: {
		description: 'Replay: Reverse playback of replay',
		parameters: {
			Channel: CHANNEL,
		},
	},

	ReplayPlayEvent: {
		description: 'Replay: Play Event by ID',
		parameters: {
			Channel: CHANNEL,

			Value: {
				type: 'number',
				description: 'Event number: 0-1000'
			}
		}
	},

	ReplayPlayEventsByID: {
		description: 'Replay: Play Events by ID (do NOT automatically transition to output)',
		parameters: {
			Channel: CHANNEL,

			Value: {
				type: 'string',
				description: 'List of Events each with number 0-1000'
			}
		}
	},

	ReplayPlayEventsByIDToOutput: {
		description: 'Replay: Play Events by ID (automatically transition to output)',
		parameters: {
			Channel: CHANNEL,

			Value: {
				type: 'string',
				description: 'List of Events each with number 0-1000'
			}
		}
	},

	ReplayPlayEventToOutput: {
		description: 'Replay: Play Event by ID',
		parameters: {
			Channel: CHANNEL,

			Value: {
				type: 'number',
				description: 'Event number: 0-1000'
			}
		}
	},

	ReplayPlayForward: {
		description: 'Replay: Forward Playback of replay inputs',
		parameters: {
			Channel: CHANNEL,
		}
	},

	ReplayPlayLastEvent: {
		description: 'Replay: Playback of last event (do NOT automatically transition to output)',
		parameters: {
			Channel: CHANNEL,
		}
	},
	ReplayPlayLastEventToOutput: {
		description: 'Replay: Playback of last event (automatically transition to output)',
		parameters: {
			Channel: CHANNEL,
		}
	},

	ReplayPlayNext: {
		description: 'Replay: Play Next event',
		parameters: {
			Channel: CHANNEL,
		}
	},

	ReplayPlayPause: {
		description: 'Replay: Resume or pause playback of replay input',
		parameters: {
			Channel: CHANNEL,
		}
	},
	ReplayPlayPrevious: {
		description: 'Replay: Play Previous event',
		parameters: {
			Channel: CHANNEL,
		}
	},

	ReplayPlaySelectedEvent: {
		description: 'Replay: Play selected event (do NOT automatically transition to output)',
		parameters: {
			Channel: CHANNEL,
		}
	},

	ReplayPlaySelectedEventToOutput: {
		description: 'Replay: Play selected event (automatically transition to output)',
		parameters: {
			Channel: CHANNEL,
		}
	},

	ReplayRecorded: 'Replay: Set in Recorded mode (non live)',

	ReplayScrollSelectedEvent: {
		description: 'Move back or forward through events list',
		parameters: {
			Value: {
				type: 'number',
				description: 'Count between -10 and 10',
			},
		}
	
	},

	ReplaySelectAllEvents: 'Select all events in active channel.',

	ReplaySelectChannelA: '',
	ReplaySelectChannelAB: '',
	ReplaySelectChannelB: '',

	ReplaySelectedEventCameraOff: {
		description: 'Replay: Turn off desired camera angle for selected event',
		parameters: {
			Value: {
				type: 'number',
				description: 'Camera angle 1-8'
			}
		}
	},

	ReplaySelectedEventCameraOn: {
		description: 'Replay: Turn on desired camera angle for selected event',
		parameters: {
			Value: {
				type: 'number',
				description: 'Camera angle 1-8'
			}
		}
	},

	ReplaySelectedEventSingleCameraOn: {
		description: 'Replay: Turn on only desired camera angle for selected event (turns off all other angles for event)',
		parameters: {
			Value: {
				type: 'number',
				description: 'Camera angle 1-8'
			}
		}
	},

	ReplaySelectEvents1: {
		description: 'Replay: Select events category 1',
		parameters: {
			Channel: CHANNEL,
		}
	},
	ReplaySelectEvents2: {
		description: 'Replay: Select events category 2',
		parameters: {
			Channel: CHANNEL,
		}
	},
	ReplaySelectEvents3: {
		description: 'Replay: Select events category 3',
		parameters: {
			Channel: CHANNEL,
		}
	},
	ReplaySelectEvents4: {
		description: 'Replay: Select events category 4',
		parameters: {
			Channel: CHANNEL,
		}
	},
	ReplaySelectEvents5: {
		description: 'Replay: Select events category 5',
		parameters: {
			Channel: CHANNEL,
		}
	},
	ReplaySelectEvents6: {
		description: 'Replay: Select events category 6',
		parameters: {
			Channel: CHANNEL,
		}
	},
	ReplaySelectEvents7: {
		description: 'Replay: Select events category 7',
		parameters: {
			Channel: CHANNEL,
		}
	},
	ReplaySelectEvents8: {
		description: 'Replay: Select events category 9',
		parameters: {
			Channel: CHANNEL,
		}
	},

	ReplaySelectEvents9: {
		description: 'Replay: Select events category 9',
		parameters: {
			Channel: CHANNEL,
		}
	},
	ReplaySelectEvents10: {
		description: 'Replay: Select events category 10',
		parameters: {
			Channel: CHANNEL,
		}
	},
	ReplaySelectEvents11: {
		description: 'Replay: Select events category 11',
		parameters: {
			Channel: CHANNEL,
		}
	},
	ReplaySelectEvents12: {
		description: 'Replay: Select events category 12',
		parameters: {
			Channel: CHANNEL,
		}
	},
	ReplaySelectEvents13: {
		description: 'Replay: Select events category 13',
		parameters: {
			Channel: CHANNEL,
		}
	},
	ReplaySelectEvents14: {
		description: 'Replay: Select events category 14',
		parameters: {
			Channel: CHANNEL,
		}
	},
	ReplaySelectEvents15: {
		description: 'Replay: Select events category 15',
		parameters: {
			Channel: CHANNEL,
		}
	},
	ReplaySelectEvents16: {
		description: 'Replay: Select events category 16',
		parameters: {
			Channel: CHANNEL,
		}
	},
	ReplaySelectEvents17: {
		description: 'Replay: Select events category 17',
		parameters: {
			Channel: CHANNEL,
		}
	},
	ReplaySelectEvents18: {
		description: 'Replay: Select events category 18',
		parameters: {
			Channel: CHANNEL,
		}
	},
	ReplaySelectEvents19: {
		description: 'Replay: Select events category 19',
		parameters: {
			Channel: CHANNEL,
		}
	},
	ReplaySelectEvents20: {
		description: 'Replay: Select events category 20',
		parameters: {
			Channel: CHANNEL,
		}
	},

	ReplaySelectFirstEvent: {
		description: 'Replay: Select first event (oldest - in top) of active list/category',
		parameters: {
			Channel: CHANNEL,
		}
	},
	ReplaySelectLastEvent: {
		description: 'Replay: Select Last event (newest - in bottom) of active list/category',
		parameters: {
			Channel: CHANNEL,
		}
	},

	ReplaySelectNextEvent: {
		description: 'Replay: Select next event in list (down)',
		parameters: {
			Channel: CHANNEL,
		}
	},
	ReplaySelectPreviousEvent: {
		description: 'Replay: Select previous event in list (up)',
		parameters: {
			Channel: CHANNEL,
		}
	},

	ReplaySetAudioSource: {
		description: 'Replay: Set audio source',
		parameters: {
			Value: {
				type: 'string',
				description: 'Name as per dropdown box in IR module configuration window. Values: Master, Follow, Camera1, Camera2, ..., Camera8'
			}
		}
	},

	// Added in version 26
	ReplaySetChannelAToBTimecode: {
		description: 'Replay: Set A Timecode to B Timecode',
	},

	// Added in version 26
	ReplaySetChannelBToATimecode: {
		description: 'Replay: Set B Timecode to A Timecode',
	},


	ReplaySetDirectionBackward: {
		description: 'Replay: Set direction backwards - Reverse playback',
		parameters: {
			Channel: CHANNEL,
		}
	},
	ReplaySetDirectionForward: {
		description: 'Replay: Set direction backwards - Forward (normal) playback',
		parameters: {
			Channel: CHANNEL,
		}
	},

	ReplaySetLastEventText: {
		description: 'Replay: Set text for last event',
		parameters: {
			Value: {
				type: 'string',
				description: 'Text'
			}
		}
	},

	ReplaySetLastEventTextCamera: {
		description: 'Replay: Changes the text of last event of the specified angle (1-8). Example: 3,angle3text',
		parameters: {
			Value: [ // Composite separated by ","
				{
					type: 'number',
					description: 'Camera'
				},
				{
					type: 'string',
					description: 'Text'
				}
			]
		}
	},

	ReplaySetSelectedEventText: {
		description: 'Replay: Set text for selected event',
		parameters: {
			Value: {
				type: 'string',
				description: 'Text'
			}
		}
	},

	ReplaySetSelectedEventTextCamera: {
		description: 'Replay: Changes the text of the selected event of the specified angle (1-8). Example: 3,angle3text',
		parameters: {
			Value: [ // Composite separated by ","
				{
					type: 'number',
					description: 'Camera'
				},
				{
					type: 'string',
					description: 'Text'
				}
			]
		}
	},

	ReplaySetSpeed: {
		description: 'Replay: See SetRateSlowMotion',
		parameters: {
			Value: {
				type: 'number',
				description: 'Speed 0.0-1.0'
			},

			Channel: {
				type: 'string',
				description: 'Valid values: Current, A or B'
			}
		}
	},

	// Added in version 26
	ReplaySetTimecode: {
		description: 'Replay: Set position to Timecode',
		parameters: {
			Value: {
				type: 'number',
				description: 'Timecode in format yyyy-MM-ddTHH:mm:ss.fff'
			},

			Channel: {
				type: 'string',
				description: 'Valid values: Current, A or B'
			}
		}
	},

	ReplayShowHide: 'Replay: Show/hide replay window',

	ReplayStartRecording: 'Replay: Start recording of replay session',
	ReplayStartStopRecording: 'Replay: Toggle start/stop recording replay',

	ReplayStopEvents: {
		description: 'Replay: Stop events playback on a replay channel',
		parameters: {
			Channel: CHANNEL,
		}
	},

	ReplayStopRecording: 'Replay: Stop recording of replay session',

	ReplaySwapChannels: 'Swap A to B and vice versa, includes angles and playback status.',

	ReplayToggleLastEventCamera1: 'Replay: Toggle Camera angle 1 for Last event',
	ReplayToggleLastEventCamera2: 'Replay: Toggle Camera angle 2 for Last event',
	ReplayToggleLastEventCamera3: 'Replay: Toggle Camera angle 3 for Last event',
	ReplayToggleLastEventCamera4: 'Replay: Toggle Camera angle 4 for Last event',
	ReplayToggleLastEventCamera5: 'Replay: Toggle Camera angle 5 for Last event',
	ReplayToggleLastEventCamera6: 'Replay: Toggle Camera angle 6 for Last event',
	ReplayToggleLastEventCamera7: 'Replay: Toggle Camera angle 7 for Last event',
	ReplayToggleLastEventCamera8: 'Replay: Toggle Camera angle 8 for Last event',

	ReplayToggleSelectedEventCamera1: 'Replay: Toggle Camera angle 1 for Selected event',
	ReplayToggleSelectedEventCamera2: 'Replay: Toggle Camera angle 2 for Selected event',
	ReplayToggleSelectedEventCamera3: 'Replay: Toggle Camera angle 3 for Selected event',
	ReplayToggleSelectedEventCamera4: 'Replay: Toggle Camera angle 4 for Selected event',
	ReplayToggleSelectedEventCamera5: 'Replay: Toggle Camera angle 5 for Selected event',
	ReplayToggleSelectedEventCamera6: 'Replay: Toggle Camera angle 6 for Selected event',
	ReplayToggleSelectedEventCamera7: 'Replay: Toggle Camera angle 7 for Selected event',
	ReplayToggleSelectedEventCamera8: 'Replay: Toggle Camera angle 8 for Selected event',

	ReplayUpdateSelectedInPoint: {
		description: 'Replay: Update In point of Selected Event to current Position on the given Channel',
		parameters: {
			Channel: CHANNEL,
		}
	},
	ReplayUpdateSelectedOutPoint: {
		description: 'Replay: Update Mark Out point of Selected Event to current Position on the given Channel',
		parameters: {
			Channel: CHANNEL,
		}
	},

	// New in vMix 24
	ReplayUpdateSelectedSpeed: {
		description: 'Replay: Update Selected Event to use Current Speed.',
		parameters: {
			Channel: CHANNEL,
		}
	},

	ReplayUpdateSelectedSpeedDefault: {
		description: 'Update Selected Event to use Default Speed.',
		parameters: {
			Channel: {
				type: 'string',
				description: 'Valid values: Current, A or B'
			}
		}
	}
}
