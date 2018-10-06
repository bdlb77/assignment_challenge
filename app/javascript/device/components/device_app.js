import React from 'react';
import DeviceList from '../containers/device_list';
import DeviceDateInput from '../containers/device_date_input';
import { Link } from 'react-router-dom'; 
const DeviceApp = (props) => {
	return(
		<div className="device-app container">
			<div className="row">
				<div className="col-md-12 devices-input">
					<Link to="/devices" className="btn btn-default">Search Type and Status</Link>
					<DeviceDateInput />
				</div>
			</div>
			<div className="row">
				<DeviceList />
			</div>
		</div>
	)
}

export default DeviceApp;