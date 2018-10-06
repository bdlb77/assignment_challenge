import React from 'react';

const Device  = (props) => {
	const classes = `device ${props.id}`;
	const inc = props.percentage > 0 ? 'increase' : '';
	const dec = props.percentage < 0 ? 'decrease' : '';
	const percentage = (
		props.percentage !== 0 ? `${Math.abs(props.percentage)}% ${inc}${dec} in usage` : 'not enough data'
		);
	return (
		<div className="col-md-4 col-sm-6 col-xs-12 device-container">
				<div className={classes} >
					<div className="device-info">
						<h3 className="text-center">{props.id}</h3>
						<div className="style-props">
							<p>{props.type}</p>
							<p>{props.status}</p>
						</div>
						<div className="percentage">comparison from last week: <br /><strong>{percentage}</strong></div>
					</div>
				</div>
		</div>
	)
}


export default Device;
