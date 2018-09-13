
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {logger} from 'redux-logger';
import reduxPromise from 'redux-promise';

// Internal
import DeviceApp from './components/device_app';

// Reducers
import DeviceListReducer from './reducers/device_list_reducer'

const initialState = {
	devices: [
		{
			timestamp: '2009-12-01T06:59:22Z',
			id: '1q2w3e4r',
			type: 'sensor',
			status: 'online'
		},
		{
			timestamp: '2009-12-3T06:59:22Z',
			id: '1q2w43x4r',
			type: 'gateway',
			status: 'offline'
		}
	]
}

const reducers = combineReducers({
		devices: DeviceListReducer
});

const middlewares = applyMiddleware(reduxPromise,logger); 
const store = createStore(reducers, initialState, middlewares);

const container = document.querySelector('.device-container')


ReactDOM.render(
	 <Provider store={store}>
			<DeviceApp />
	 </Provider>, container
);