import React, { Component } from 'react';
import { connect } from 'react-redux';

import { flipCard, nextCard, previousCard, shuffle } from '../actions'


class Buttons extends Component {

    render() {
       
        return (
            <div className="ButtonContainer">
            	<button onClick={this.props.previousCard}>Previous</button>
                <button onClick={this.props.shuffle}>Shuffle</button>
                <button onClick={this.props.flipCard}>Flip</button>
                <button onClick={this.props.nextCard}>Next</button>
            </div>
        );
    }
}

const mapActionsToProps = { flipCard, nextCard, previousCard, shuffle };

export default connect(null, mapActionsToProps)(Buttons);