import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from './Card.js';


class DeckOfCards extends Component {

   render() {

        const selectedCardIndex = this.props.cards.map((card, index) => {

            if (this.props.selectedCardIndex === index) {
                return <Card key={index}
                            card={card}
                            flipped={this.props.flipped}
                            currentCard={index+1}
                            length={this.props.cards.length} />
            }
        });

        return(
            <div className="DeckOfCards">
                {selectedCardIndex}
            </div>
        )
   }
}

function mapStateToProps(state) {
    return {
        cards: state.cards,
        selectedCardIndex: state.selectedCardIndex,
        flipped: state.flipped
    }
}

export default connect(mapStateToProps)(DeckOfCards);
