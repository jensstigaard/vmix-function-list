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

	ReplayChangeDirection: 'Switch replay direction - forward/reverse',

	ReplayChangeSpeed: {
		description: 'Change replay playback speed',
		parameters: {
			Value: {
				type: 'number',
				description: 'Speed in percentage'
			}
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
			}
		}
	},

	ReplayDeleteLastEvent: 'Delete last replay event',
	ReplayDeleteSelectedEvent: 'Delete selected replay event',

	ReplayDuplicateLastEvent: 'Duplicate last replay event',
	ReplayDuplicateSelectedEvent: 'Duplicate selected replay event',

	ReplayExportLastEvent: {
		description: 'Export last replay event to specific folder',
		parameters: {
			Value: {
				type: 'string',
				description: 'Folder'
			}
		}
	},

	ReplayFastBackward: {
		description: 'Replay fast backwards',
		parameters: {
			Value: {
				type: 'number',
				description: 'Speed 1-30x'
			}
		}
	},

	ReplayFastForward: {
		description: 'Replay fast forward',
		parameters: {
			Value: {
				type: 'number',
				description: 'Speed 1-30x'
			}
		}
	},

	ReplayJumpFrames: {
		description: 'Replay jump frames',
		parameters: {
			Value: {
				type: 'number',
				description: 'Frames'
			}
		}
	},

	ReplayJumpFramesFastOff: {
		description: 'ReplayJumpFrames jumps 1 frame for each value instead of 1 second.',
		parameters: {
			Channel: {
				type: 'string',
				description: 'Valid values: Current, A or B'
			}
		}
	},

	ReplayJumpFramesFastOn: {
		description: 'ReplayJumpFrames jumps 1 second for each value instead of 1 frame.',
		parameters: {
			Channel: {
				type: 'string',
				description: 'Valid values: Current, A or B'
			}
		}
	},

	ReplayJumpToNow: 'Replay jump to now',

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
			Value: {
				type: 'number',
				description: 'Number of frames relative. Negative number = previous in time. Positive number = Forward in time'
			}
		}
	},

	ReplayMoveSelectedOutPoint: {
		description: 'Replay: Move Out-point for selected event',
		parameters: {
			Value: {
				type: 'number',
				description: 'Number of frames relative. Negative number = previous in time. Positive number = Forward in time'
			}
		}
	},

	ReplayPause: 'Replay: Pause playback',
	ReplayPlay: 'Replay: Resume playback',

	ReplayPlayAllEvents: 'Replay: Play all events in active list (do NOT automatically transition to output)',
	ReplayPlayAllEventsToOutput: 'Replay: Play all events in active list (automatically transition to output)',

	ReplayPlayBackward: 'Replay: Reverse playback of replay',

	ReplayPlayEvent: {
		description: 'Replay: Play Event by ID',
		parameters: {
			Value: {
				type: 'number',
				description: 'Event number: 0-1000'
			}
		}
	},

	ReplayPlayEventsByID: {
		description: 'Replay: Play Events by ID (do NOT automatically transition to output)',
		parameters: {
			Value: {
				type: 'string',
				description: 'List of Events each with number 0-1000'
			}
		}
	},

	ReplayPlayEventsByIDToOutput: {
		description: 'Replay: Play Events by ID (automatically transition to output)',
		parameters: {
			Value: {
				type: 'string',
				description: 'List of Events each with number 0-1000'
			}
		}
	},

	ReplayPlayEventToOutput: {
		description: 'Replay: Play Event by ID',
		parameters: {
			Value: {
				type: 'number',
				description: 'Event number: 0-1000'
			}
		}
	},

	ReplayPlayForward: 'Replay: Forward Playback of replay inputs',

	ReplayPlayLastEvent: 'Replay: Playback of last event (do NOT automatically transition to output)',
	ReplayPlayLastEventToOutput: 'Replay: Playback of last event (automatically transition to output)',

	ReplayPlayNext: 'Replay: Play Next event',

	ReplayPlayPause: 'Replay: Resume or pause playback of replay input',
	ReplayPlayPrevious: 'Replay: Play Previous event',

	ReplayPlaySelectedEvent: 'Replay: Play selected event (do NOT automatically transition to output)',
	ReplayPlaySelectedEventToOutput: 'Replay: Play selected event (automatically transition to output)',

	ReplayRecorded: 'Replay: Set in Recorded mode (non live)',

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

	ReplaySelectEvents1: 'Replay: Select events category 1',
	ReplaySelectEvents2: 'Replay: Select events category 2',
	ReplaySelectEvents3: 'Replay: Select events category 3',
	ReplaySelectEvents4: 'Replay: Select events category 4',
	ReplaySelectEvents5: 'Replay: Select events category 5',
	ReplaySelectEvents6: 'Replay: Select events category 6',
	ReplaySelectEvents7: 'Replay: Select events category 7',
	ReplaySelectEvents8: 'Replay: Select events category 8',

	ReplaySelectEvents9: 'Replay: Select events category 9',
	ReplaySelectEvents10: 'Replay: Select events category 10',
	ReplaySelectEvents11: 'Replay: Select events category 11',
	ReplaySelectEvents12: 'Replay: Select events category 12',
	ReplaySelectEvents13: 'Replay: Select events category 13',
	ReplaySelectEvents14: 'Replay: Select events category 14',
	ReplaySelectEvents15: 'Replay: Select events category 15',
	ReplaySelectEvents16: 'Replay: Select events category 16',
	ReplaySelectEvents17: 'Replay: Select events category 17',
	ReplaySelectEvents18: 'Replay: Select events category 18',
	ReplaySelectEvents19: 'Replay: Select events category 19',
	ReplaySelectEvents20: 'Replay: Select events category 20',

	ReplaySelectFirstEvent: 'Replay: Select first event (oldest - in top) of active list/category',
	ReplaySelectLastEvent: 'Replay: Select Last event (newest - in bottom) of active list/category',

	ReplaySelectNextEvent: 'Replay: Select next event in list (down)',
	ReplaySelectPreviousEvent: 'Replay: Select previous event in list (up)',

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


	ReplaySetDirectionBackward: 'Replay: Set direction backwards - Reverse playback',
	ReplaySetDirectionForward: 'Replay: Set direction backwards - Forward (normal) playback',

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

	ReplayStopEvents: 'Replay: Stop events playback',

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

	ReplayUpdateSelectedInPoint: 'Replay: Update In point of Selected Event to current Position',
	ReplayUpdateSelectedOutPoint: 'Replay: Update Mark Out point of Selected Event to current Position',

	// New in vMix 24
	ReplayUpdateSelectedSpeed: 'Replay: Update Selected Event to use Current Speed.',

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
