
//imports from the reducers folder here

import shuffleDeck from './ShuffleDeck.js';

// The starting state at page load is a new game.
const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
         
    	case "SHUFFLE_DECK":
            return shuffleDeck();

        default:
            return state;
    }
}
