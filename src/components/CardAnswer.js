import React, { Component } from 'react';

class CardAnswer extends Component {

    render() {
        // Here we added a delete button. When clicked, it directly calls the
        // function that was passed to us via onDelete=....
        return (
            <div className="Card">
            	<p>This is an answer.</p>
            </div>
        );
    }
}

export default CardAnswer;