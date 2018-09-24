import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDevices } from '../actions'
class DeviceDateInput extends Component{
	 constructor(props){
    // Required step: always call the parent class' constructor
    super(props);
		
		this.state = {
		date: ''
		}
	}	
	

	handleInput = (event) => {
		this.setState({date: event.target.value})
	};
	
	handleClick = (e) => {
		e.preventDefault();
		this.props.fetchDevices(this.state.date);
	
	}

	
	render(){
	const style= {
		width: '400px',
		margin: 0 +' auto'
	}
		return(
			<div className="form-wrapper" style={style} >
				<form action="">
					<input 
						type="date"
						value={this.state.date} 
						onChange={this.handleInput} />
					<button 
						className= "btn btn-primary"
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