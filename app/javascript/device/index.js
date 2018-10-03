
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {logger} from 'redux-logger';
import reduxPromise from 'redux-promise';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history/createBrowserHistory';
import { reducer as formReducer } from 'redux-form';
// Internal
import DeviceApp from './components/device_app';
import DeviceByType from './containers/device_by_type';
import DeviceDateInput from './containers/device_date_input';

// Reducers
import DeviceListReducer from './reducers/device_list_reducer';
import DevicesTypeReducer from './reducers/devices_type_reducer';

const container = document.querySelector('.device-container')
const initialState = {
	devices: JSON.parse(container.dataset.devices),
}

const reducers = combineReducers({
		devicesByType: DevicesTypeReducer,
		devices: DeviceListReducer,
		form: formReducer
});

const middlewares = applyMiddleware(reduxPromise,logger);
const store = createStore(reducers, initialState, middlewares);


ReactDOM.render(
	<Provider store={store} >
 		<Router history={history}>
 			<Switch>
      	<Route path="/" exact component={DeviceApp} ></Route>
      	<Route path="/devices" component={DeviceByType} ></Route>
			</Switch>
		</Router>
	</Provider>,
	container
);


