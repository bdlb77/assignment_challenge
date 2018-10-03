import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; 
import DeviceTypeInput from './device_type_input';
import DeviceByTypeList from './device_by_type_list';

class DeviceByType extends Component {
	render(){
		return(
			<div className= "container">
				<div className="device" >
					<DeviceTypeInput />
				</div>
				<div className="flex-contianer-devices">
					<DeviceByTypeList />
				</div>
				<Link to="/">
					Back to Index
				</Link>
			</div>
		)
	}
}


export default DeviceByType;