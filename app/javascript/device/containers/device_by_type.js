import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; 
import DeviceTypeInput from './device_type_input';
import DeviceByTypeList from './device_by_type_list';

class DeviceByType extends Component {
	render(){
		return(
			<div className= "container device-type-input">
				<Link to="/" className="home-btn"><i className="fa fa-home" aria-hidden="true"></i></Link>
				<DeviceTypeInput />
				<DeviceByTypeList />
			</div>
		)
	}
}

export default DeviceByType;