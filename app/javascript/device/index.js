
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

const container = document.querySelector('.device-container')
const initialState = {
	devices: JSON.parse(container.dataset.devices)
}

const reducers = combineReducers({
		devices: DeviceListReducer
});

const middlewares = applyMiddleware(reduxPromise,logger); 
const store = createStore(reducers, initialState, middlewares);



ReactDOM.render(
	 <Provider store={store} >
			<DeviceApp />
	 </Provider>, container
);


