import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Pokemon from './Pokemon'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokemon url='https://pokeapi.co/api/v2/pokemon/1/'/>
        <Pokemon url='https://pokeapi.co/api/v2/pokemon/2/'/>
        <Pokemon url='https://pokeapi.co/api/v2/pokemon/3/'/>
        <Pokemon url='https://pokeapi.co/api/v2/pokemon/4/'/>
        <Pokemon url='https://pokeapi.co/api/v2/pokemon/5/'/>
      </div>
    );
  }
}

export default App;
