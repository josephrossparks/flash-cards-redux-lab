import React, { Component } from 'react';
import data from '../data.js'


class Card extends Component {
	render () {

		return (
			<div className="Card">
				<div className="questionAndAnswer">
					<h4>{this.props.flipped ? this.props.card.answer : this.props.card.question}</h4>
				</div>
				<div className="Counter">
					<p>{this.props.currentCard}/{this.props.length}</p>
				</div>
			</div>
		)
	}
}

export default Card;
