import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDeviceTypesAndStatus } from '../actions';

class DeviceTypeInput extends Component {

  constructor(props) {
    super(props);
  	
  	this.state = {
  		typeValue: 'sensor',
  		statusValue: 'online'
  	}
  }
  handleStatus = event => {
  	this.setState({statusValue: event.target.value})
  }

  handleType = (event) => {
		this.setState({typeValue: event.target.value})
	}
	handleClick = (e) => {
		e.preventDefault();
		this.props.fetchDeviceTypesAndStatus(this.state.typeValue, this.state.statusValue);
	}
  render() {
    return (
      <div className= "text-center">
      	<form action="" className="device-input">
					<select id="device-type-two" value={this.state.typeValue} onChange={this.handleType}>
						<option value="sensor">Sensor</option>
						<option value="gateway">Gateway</option>
					</select>
					<select id="device-status-two" value={this.state.statusValue} onChange={this.handleStatus}>
						<option value="online">Online</option>
						<option value="offline">Offline</option>
					</select>
					<submit
						className= "btn btn-primary btn-sm btn-device-type"
						type="submit"
						onClick={this.handleClick}>Submit
					</submit>
      	</form>
      	<div className= "device-props-wrapper">
      		<div className= "device-props">Type: {this.state.typeValue.toUpperCase()}</div>
      		<div className= "device-props">Status: {this.state.statusValue.toUpperCase()}</div>
      	</div>
  	</div>
    );
  }
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchDeviceTypesAndStatus}, dispatch);
}

export default connect(null, mapDispatchToProps)(DeviceTypeInput);