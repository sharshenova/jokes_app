import React, { Component } from 'react';
import Joke from "./Joke/Joke"

class Jokes extends Component {

	render () {
	
		return (
			<div className="container">
				<h2>Best jokes about Chuck Norris in the Internet</h2>
				<div className="text-left">
					{this.props.items.map((joke) => {
						console.log(joke)
						return <Joke
							key = {joke.id}
							label = {joke.value}
						/>}
					)}
				</div>
			</div>
		);
	}
};

export default Jokes;