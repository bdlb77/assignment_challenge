import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; 
import DeviceTypeInput from './device_type_input'
class DeviceByType extends Component {
	render(){
		return(
			<div>
				<div className="device" >
					<DeviceTypeInput />
				</div>
				<Link to="/">
					Back to Index
				</Link>
			</div>
		)
	}
}


export default DeviceByType;