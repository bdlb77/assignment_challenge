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
	 		theDevices = ( this.props.devices.map( device => {
			// let keyPercent;
			// if(this.props.comparePercentage){
			// 	Object.entries(this.props.comparePercentage).forEach( ([key,percentValue]) =>{
			// 		console.log(key === device.id && `${key}`)
			// 		if(device.id === key){
			// 			 keyPercent = percentValue;
			// 		}
			// 	})
			// }	
				// const percent = (keyPercent  ?`${keyPercent} % Change from last week` : `sorry no valid data`)				return (
					return <Device key={device.id} type={device.type} status={device.status} />

			}))
	 	}
			return(
				<div className="device-list">
					{theDevices}
				</div>
			)
	}
}
function mapStateToProps(state){
	return {
		devices: state.devices,
		comparePercentage: state.comparePercentage
	}
}
// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({fetchDevices: fetchDevices}, dispatch);
// }

export default connect(mapStateToProps)(DeviceList);