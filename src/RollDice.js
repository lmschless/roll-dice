import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RollDice extends Component {
	static propTypes = {
		prop: PropTypes,
	};

	render() {
		return (
			<div>
				<i class="fas fa-dice-one" />
			</div>
		);
	}
}
