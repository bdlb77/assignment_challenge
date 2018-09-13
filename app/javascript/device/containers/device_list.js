import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {fetchDevices} from '../actions'

class DeviceList extends Component{
	componentWillMount() {
		this.props.fetchDevices();
	}
	render(){
		const the_devices = this.props.devices.map( device => {
		const classes = `device ${device.id}`
		return (
			<div className="col-md-3" key={device.id}>
				<div className={classes} >
					<div className="device-info">
						<h3>{device.type}</h3>
						<p>{device.status}</p>
					</div>
				</div>
			</div>
		)
			
		})
		return(
			<div className="device-list">
				{the_devices}
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		devices: state.devices
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchDevices: fetchDevices}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceList);