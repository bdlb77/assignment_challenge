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
      <div>
      	<form action="">
					<select value={this.state.typeValue} onChange={this.handleType}>
						<option value="sensor">Sensor</option>
						<option value="gateway">Gateway</option>
					</select>
					<select value={this.state.statusValue} onChange={this.handleStatus}>
						<option value="online">Online</option>
						<option value="offline">Offline</option>
					</select>
					<submit
						className= "btn btn-primary btn-sm"
						type="submit"
						onClick={this.handleClick}>Submit
					</submit>
      	</form>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchDeviceTypesAndStatus}, dispatch);
}

export default connect(null, mapDispatchToProps)(DeviceTypeInput);