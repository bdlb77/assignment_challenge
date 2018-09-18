import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; 

class DeviceShow extends Component {
	render(){
		return(
			<div className="device" >
				<div className="device-info">
					<h3>{this.props.device.type}</h3>
					<h5>{this.props.device.id}</h5>
					<p>{this.props.device.status}</p>
				</div>
				<Link to="/">
					Back to Index
				</Link>
			</div>
		)
	}
}
function mapStateToProps(state, ownProps) {
 const idFromUrl = ownProps.match.params.id; // From URL
 const device = state.devices.find(p => p.id === idFromUrl);
 return { device: device };
} 

export default connect(mapStateToProps)(DeviceShow);