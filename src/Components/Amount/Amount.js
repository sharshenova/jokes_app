import React from 'react';

function Amount (props) {
	return (
		<div className="Amount">
			<input type="number" placeholder="Desired amount" onChange={props.setUserAmount} value={props.value}></input>
		</div>
	)
}

export default Amount;

