import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchDevices} from '../actions';
import Device from '../components/single_device'
class DeviceByDateList extends Component{
	render(){
		let theDevices = null;
		if (this.props.devices){
	 		if(this.props.devices.length > 0) {
	 			theDevices = ( 
	 				<div className="row device-list">{this.props.devices.map( device => {
				return <Device key={device.device.id} id={device.device.id} type={device.device.type} status={device.device.status} percentage={device.percentage}/>
			})}
	 			</div>
	 			)}else{
	 			theDevices = <div className="text-center select-text">Please choose a valid day.</div>;
	 		}
		}
		let selectText = (
			<div className="text-center select-text">
				Please Select A day
			</div>			
		)
		return(
				<div>
					{theDevices ? theDevices : selectText}
				</div>
			)
		}
}
function mapStateToProps(state){
	return {
		devices: state.devices
	}
}


export default connect(mapStateToProps)(DeviceByDateList);
