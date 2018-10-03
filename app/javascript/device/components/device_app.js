import React from 'react';
import DeviceList from '../containers/device_list';
import DeviceDateInput from '../containers/device_date_input';
import { Link } from 'react-router-dom'; 
const DeviceApp = (props) => {
	return(
		<div className="device-app container">
			<div className="row">
				<DeviceDateInput />
				<Link to="/devices">Go To Device Type Search</Link>
			</div>
			<div className="row">
				<DeviceList />
			</div>
		</div>
	)
}

export default DeviceApp;