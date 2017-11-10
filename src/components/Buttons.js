import React, { Component } from 'react';


class Buttons extends Component {

    render() {
       
        return (
            <div className="ButtonContainer">
            	<button>Previous</button>
                <button>Shuffle</button>
                <button>Flip</button>
                <button>Next</button>
            </div>
        );
    }
}

export default Buttons;