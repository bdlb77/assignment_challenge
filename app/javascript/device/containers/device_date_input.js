import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDevices } from '../actions';

class DeviceDateInput extends Component{
	 constructor(props){
    super(props);
		
		this.state = {
			date: ''
		}
	}	
	
	componentWillMount() {
		this.setState({typeValue: this.props.typeValue})
	}

	handleChange = (event) => {
		this.setState({date: event.target.value})
	};
	
	handleClick = (e) => {
		e.preventDefault();
		this.props.fetchDevices(this.state.date);
	
	}

	render(){
		return(
			<div className="form-wrapper device-date-input">
				<form action="">
					<input 
						type="date"
						value={this.state.date} 
						onChange={this.handleChange} />
					<button 
						className= "btn btn-default"
						type="submit"
						onClick={this.handleClick}>Submit
					</button>
				</form>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchDevices}, dispatch);
}
export default connect(null, mapDispatchToProps)(DeviceDateInput)
