import React from 'react';

function Amount (props) {
	return (
		<div className="Amount">
			<input type="number" className="mb-3 col-2" placeholder="Desired amount" onChange={props.setUserAmount} value={props.value}></input>
		</div>
	)
}

export default Amount;

