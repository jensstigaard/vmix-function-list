import General from './01-general'

import Audio from './02-audio/index'
import Transition from './03-transition'
import Output from './04-output'
import Title from './05-title'
import Input from './05-input'
import Overlay from './06-overlay'
import Playlist from './07-playlist'
import Scripting from './08-scripting'
import Replay from './09-replay'
import NDI from './10-ndi'
import PTZ from './11-ptz'
import Preset from './12-preset'
import DataSources from './13-datasources'
import Browser from './14-browser'

// All functions broken up in categories
// Respecting the order of the vMix documentation
// See https://www.vmix.com/help23/ShortcutFunctionReference.html
export default {
	General,
	Audio,
	Transition,
	Output,
	Title,
	Input,
	Overlay,
	Playlist,
	Scripting,
	Replay,
	NDI,
	PTZ,
	Preset,
	DataSources,
	Browser
}
