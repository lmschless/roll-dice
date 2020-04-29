import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DieOne from './DieOne';
import './die.css';

export default class RollDice extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sideOne: 'fas fa-dice-one',
			sideTwo: 'fas fa-dice-six'
		};
	}
	roll = () => {
		let sides = [
			'fas fa-dice-one',
			'fas fa-dice-two',
			'fas fa-dice-three',
			'fas fa-dice-four',
			'fas fa-dice-five'
		];
		let randOne = sides[Math.floor(Math.random() * sides.length)];
		let randTwo = sides[Math.floor(Math.random() * sides.length)];

		this.setState({
			sideOne: randOne,
			sideTwo: randTwo
		});
	};

	render() {
		return (
			<React.Fragment>
				<div className=".Dice">
					<DieOne face={this.state.sideOne} />
					<DieOne face={this.state.sideTwo} />
					{/* <i className="fas fa-dice-one" /> */}
				</div>
				<button onClick={this.roll}>Roll Dice</button>
			</React.Fragment>
		);
	}
}
