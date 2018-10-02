import {FETCH_DEVICES} from '../actions';

export default function DeviceListReducer(state = {}, action){
	switch(action.type){
		case FETCH_DEVICES:
				return  action.payload
		default:
			return state;
	}
	debugger
}