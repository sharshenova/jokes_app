import React, { Component } from 'react';
import './App.css';
import Jokes from "./Components/Jokes/Jokes";


class App extends Component {

	constructor(props) {
		super(props);
		this.state = {};
		this.state.jokes = [];
		this.state.amount = 5;
	}

	componentDidMount() {
		this.getRandomJokes(this.state.amount);
	}

	getRandomJokes(amount) {

		const JOKES_URL = 'https://api.chucknorris.io/jokes/random';

		let joke_numbers = []
		for (let n=0; n<amount; n++) {
			joke_numbers.push(n)
		};
		
		const promises = joke_numbers.map(joke_number =>
			fetch(JOKES_URL).then(response => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error('Something went wrong with network request');
				}
			})
		)

		// Promise.all ждёт, пока все промисы выполнятся и потом только возвращает список результатов
		// его так же можно чейнить - chain, передавать по цепочке then, catch).
		Promise.all(promises).then(jokes => {
			const updatedJokes = jokes.map(joke => {
				return {
					...joke
				}
			});

			this.setState({...this.state, jokes: updatedJokes});
			console.log(this.state.jokes);
		})

	};

	render() {
		return (
			<div className="App">
				<Jokes items={this.state.jokes}/>
			</div>
		);
	}
}

export default App;
