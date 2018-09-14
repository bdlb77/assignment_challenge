import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'; 

import {fetchDevices} from '../actions'

class DeviceList extends Component{
	// Add event listener on button when component mounts
	// handle click when click happens => call fetch devices
	// remove event listener when CDM

	componentDidMount() {
		this.props.fetchDevices()
	}

	render(){
		const the_devices = this.props.devices.map( device => {
			let keyPercent;
			if(this.props.comparePercentage){
				Object.entries(this.props.comparePercentage).forEach( ([key,percentValue]) =>{
					console.log(key === device.id && `${key}`)
					if(device.id === key){
						 keyPercent = percentValue;
					}
				})
			}	
				const percent = (keyPercent  ?`${keyPercent} % Change from last week` : `sorry no valid data`)
				const classes = `device ${device.id}`
				return (
					<div className="col-md-6" key={device.id}>
						<Link to={`/devices/${device.id}`} >
							<div className={classes} >
								<div className="device-info">
									<h3>{device.type}</h3>
									<h5>{device.id}</h5>
									<p>{device.status}</p>
									<p>{percent}</p>
								</div>
							</div>
						</Link>
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
		devices: state.devices,
		comparePercentage: state.comparePercentage
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchDevices: fetchDevices}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceList);