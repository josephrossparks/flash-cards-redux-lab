import data from '../data.js';
import _ from 'lodash';

const INITIAL_STATE = {
	cards: data,
	selectedCardIndex: 0,
	flipped: false
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

    	case 'FLIP_CARD':
    		return flipCard(state);

    	case 'NEXT_CARD':
    		return nextCard(state);

    	case 'PREVIOUS_CARD':
    		return previousCard(state);

    	case 'SHUFFLE':
    		return shuffle(state);	
         
        default:
        	return state;
        	
    }
}

function flipCard(state) {
	return Object.assign({}, state, {
        flipped: !state.flipped
    });
}

function shuffle(state) {
	return Object.assign({}, state, {
        cards: _.shuffle(state.cards),
        flipped: false,
    	selectedCardIndex: 0
    });
}

function nextCard(state) {

	if (state.selectedCardIndex === state.cards.length - 1 ) {
		return state;
	}
	return Object.assign({}, state, {
        selectedCardIndex: state.selectedCardIndex + 1,
        flipped: false
    });
}

function previousCard(state) {
	if (state.selectedCardIndex === 0 ) {
		return state;
	}
	return Object.assign({}, state, {
        selectedCardIndex: state.selectedCardIndex - 1,
        flipped: false
    });
}