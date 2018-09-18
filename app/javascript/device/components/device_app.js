import React from 'react';
import DeviceList from '../containers/device_list';
import DeviceDateInput from '../containers/device_date_input'
const DeviceApp = (props) => {
	return(
		<div className="device-app">
			<div className="row">
				<DeviceDateInput />
			</div>
			<div className="row">
				<DeviceList />
			</div>
		</div>
	)
}

export default DeviceApp;