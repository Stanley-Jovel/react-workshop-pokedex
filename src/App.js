import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
  state = {
    pokemon1: null
  }

  componentDidMount = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/1/')
      .then(response => {
        this.setState({
          pokemon1: response.data
        })
      })
  }

  render() {
    return (
      <div className="App">
        { this.state.pokemon1 &&
          <div>
            <img src={this.state.pokemon1.sprites.front_default} alt=""/>
            <label>{this.state.pokemon1.name}</label>
          </div>
        }
      </div>
    );
  }
}

export default App;
