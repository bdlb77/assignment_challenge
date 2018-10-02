import React from 'react';

const Device  = (props) => {
	const classes = `device ${props.id}`;
	const inc = props.percentage > 0 ? 'increase' : '';
	const dec = props.percentage < 0 ? 'decrease' : '';
	const percentage = (
		props.percentage !== 0 ? `${Math.abs(props.percentage)}% ${inc}${dec} change from last week` : 'Cannot compute percentage change from last week'
		);
	return (
		<div className="col-md-6">
				<div className={classes} >
					<div className="device-info">
						<h3>{props.type}</h3>
						<h5>{props.id}</h5>
						<p>{props.status}</p>
						{percentage}
					</div>
				</div>
		</div>
	)
}


export default Device;
