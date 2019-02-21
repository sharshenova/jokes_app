import React, { Component } from 'react';

class Joke extends Component {

	render () {
		return (
			<div className="container">
				<h2>Best jokes about Chuck Norris in the Internet</h2>
				{this.props.joke}
			</div>
		);
	};
};

export default Joke;