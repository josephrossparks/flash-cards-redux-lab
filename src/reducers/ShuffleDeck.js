let nextCardId = 1;

// Here's the shape of our data.
export default function shuffleDeck(state) {
    return Object.assign({}, state, {
        // An array of 16 cards. When a card is taken off the board it becomes null.
        //board: generateRandomizedDeck(),
        // The cards that are currently flipped. Could be 0, 1, or 2 items here.
        flipped: [],
        
    });
}

// build a shuffled array of the 16 cards
function generateRandomizedBoard() {
    const board = [];
    const faces = [];
    for (let i = 0; i < 8; i++) {
        faces.push(i);
        faces.push(i);
    }

    for (let i = 16; i >= 1; i--) {
        let randomIndex = Math.floor(Math.random() * i);
        let randomFace = faces.splice(randomIndex, 1)[0];
        board.push({
            id: nextCardId++,
            cardFace: randomFace
        });
    }
    return board;
}
