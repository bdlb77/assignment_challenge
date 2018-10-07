import React from 'react';
import DeviceByDateList from '../containers/device_by_date_list';
import DeviceDateInput from '../containers/device_date_input';
import { Link } from 'react-router-dom'; 
const DeviceApp = () => {
	return(
		<div className="device-app container">
			<div className="row">
				<div className="col-md-12 devices-input">
					<Link to="/devices" className="btn btn-default btn-search">Search Type and Status</Link>
					<DeviceDateInput />
				</div>
			</div>
			<DeviceByDateList />
		</div>
	);
};

export default DeviceApp;