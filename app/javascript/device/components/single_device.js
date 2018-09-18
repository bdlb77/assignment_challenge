import React from 'react';
import { Link } from 'react-router-dom';

const Device  = (props) => {
	const classes = `device ${props.id}`
	return (
		<div className="col-md-6">
			<Link to={`/devices/${props.id}`} >
				<div className={classes} >
					<div className="device-info">
						<h3>{props.type}</h3>
						<h5>{props.id}</h5>
						<p>{props.status}</p>
						<p>PERCENT CHANGE</p>

					</div>
				</div>
			</Link>
		</div>
	)
}


export default Device;
