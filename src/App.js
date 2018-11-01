import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt=""/>
          <label>bulbasaur</label>
        </div>
        <div>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" alt=""/>
          <label>ivysaur</label>
        </div>
      </div>
    );
  }
}

export default App;
