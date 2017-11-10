import React, { Component } from 'react';

class CardQuestion extends Component {

    render() {
        // Here we added a delete button. When clicked, it directly calls the
        // function that was passed to us via onDelete=....
        return (
            <div className="Card">
            	<p>This is a question.</p>
            </div>
        );
    }
}

export default CardQuestion;