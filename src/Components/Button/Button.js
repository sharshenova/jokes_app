import React from 'react';

function Button (props) {
	return (
		<div className="Button">
			<button class="btn btn-info" onClick={props.getExtraJokes}>GET JOKES</button>
		</div>
	)
}

export default Button;