import React, { Component } from 'react';

import CardQuestion from './CardQuestion';
import CardAnswer from './CardAnswer';

class Card extends Component {

    render() {

        return (

            <div className="Card">
            	<CardQuestion />
            	<CardAnswer />
            </div>
        );
    }
}

export default Card;