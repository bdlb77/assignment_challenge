import { FETCH_DEVICES_BY_TYPE_AND_STATUS } from '../actions';

export default function DevicesTypeReducer(state = null, action){
	switch(action.type){
		case FETCH_DEVICES_BY_TYPE_AND_STATUS:
			return action.payload;
		default:
			return state;
	}
}