import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import {fetchDevices} from '../actions';
import Device from '../components/single_device'
class DeviceList extends Component{
	// Add event listener on button when component mounts
	// handle click when click happens => call fetch devices
	// remove event listener when CDM

	render(){
		let theDevices = null
		if (this.props.devices){
	 		if(this.props.devices.length > 0) {
	 			theDevices = ( this.props.devices.map( device => {
				return <Device key={device.device.id} id={device.device.id} type={device.device.type} status={device.device.status} percentage={device.percentage}/>
			}))
			}else{
	 			theDevices = "No Devices reported for this day. Pleas choose another day";
	 		}
		}
		return(
				<div className="device-list container">
					{theDevices ? theDevices : 'Please Select A day'}
				</div>
			)
		}
}
function mapStateToProps(state){
	return {
		devices: state.devices
	}
}
// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({fetchDevices: fetchDevices}, dispatch);
// }

export default connect(mapStateToProps)(DeviceList);
