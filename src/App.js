import React, { Component } from 'react';
import DeckOfCards from './components/DeckOfCards';
import Buttons from './components/Buttons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DeckOfCards /> 
        <Buttons /> 
      </div>
    );
  }
}

export default App;
