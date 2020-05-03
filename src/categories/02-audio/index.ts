import audio from './audio'
import busses from './busses'
import master from './master'
import set from './set'
import solo from './solo'

export default {
	...audio,
	...busses,
	...master,
	...set,
	...solo
}