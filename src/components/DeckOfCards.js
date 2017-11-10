import React, { Component } from 'react';

import Card from './Card.js';

class DeckOfCards extends Component {

    render() {

    	//Create a card component for each card in the deck.
    	/*const renderCardDeck = this.props.DeckOfCards.map((card, i) => {
    
            return <Card key={i} card={card} onClick={() => this.props.flipCard(card)} />
        });*/

        return (
            <div className="DeckOfCards">
            	<h2>Flash Card Review!</h2>
				<Card />
            </div>
        );
    }
}

export default DeckOfCards;