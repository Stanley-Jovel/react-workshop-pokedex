import React, { Component } from 'react';
import './App.css';
import Pokemon from './Pokemon'
import Axios from 'axios';

class App extends Component {
  state = {
    pokemons: []
  }

  componentDidMount = async () => {
    const response = await Axios.get('https://pokeapi.co/api/v2/pokemon/')

    this.setState({
      pokemons: response.data.results.slice(0, 50)
    })
  }
  render() {
    return (
      <div className="App">
        {
          this.state.pokemons.map(pokemon => (
            <Pokemon key={pokemon.name} url={pokemon.url}/>
          ))
        }
      </div>
    );
  }
}

export default App;
