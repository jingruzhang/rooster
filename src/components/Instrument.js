import React from 'react';

const Instrument = (props) => {
	return(
		<div className="tile">
			<span>id:{props.id}</span>
			<h4>position:{props.position}</h4>
			<p>calls:{props.calls}</p>
			<p>fee: {props.fee}</p>
		</div>
	);
};

export default Instrument;