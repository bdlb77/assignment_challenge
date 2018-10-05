import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 

 class DeviceByTypeList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let dateData = null;
    if(this.props.devicesByType){
    	 dateData = (
    		Object.entries(this.props.devicesByType).map(([key,value]) =>{
					//  create new date object to support month written as string
					let options = { year: 'numeric', month: 'short', day: 'numeric' };
					let date = new Date(key)
					date = new Date(date.setDate(date.getDate() + 1))
					return (
						<div className="single-date-cell">
							<div>{date.toLocaleDateString("en-us", options)} </div>
							<div>Occurence: <strong>{value}</strong></div>
						</div>
					)
		    })
    	)
    }else{
    	return (
				<div className="input-wait text-center"><strong>{dateData = "Please select type and status"}</strong></div>
    	)
    }
  return (
    <div>
      <h3 className="text-center">Total Device Occurences For Last 30 Days:</h3>
      <div className="data-container">
        {dateData}
      </div>
    </div>
  );
  }
}

function mapStateToProps(state){
	return {
		devicesByType: state.devicesByType
	}
}
export default connect(mapStateToProps)(DeviceByTypeList);