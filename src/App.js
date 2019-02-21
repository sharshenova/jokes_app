import React, { Component } from 'react';
import './App.css';
import Joke from "./Components/Joke/Joke"

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {};
		this.state.joke = [];
	}

	componentDidMount() {
		this.getRandomJokes();
	}

	getRandomJokes() {
		const JOKES_URL = 'https://api.chucknorris.io/jokes/random';
		fetch(JOKES_URL).then(response => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error('Something went wrong with network request');
			}
		}).then(joke => {
			this.setState({joke: joke});
		}).catch(error => {
			console.log(error);
		});
	}

	render() {
		return (
			<div className="App">
				<Joke joke={this.state.joke.value}/>
			</div>
		);
	}
}

export default App;
