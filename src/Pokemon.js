import React from 'react'
import axios from 'axios'

class Pokemon extends React.Component {
  state = {
    pokemon: null
  }

  componentDidMount = async () => {
    const response = await axios.get(this.props.url)

    this.setState({
      pokemon: response.data
    })
  }

  render() {
    if (!this.state.pokemon) {
      return null
    }

    return (
      <div>
        <img src={this.state.pokemon.sprites.front_default} alt=""/>
        <label>{this.state.pokemon.name}</label>
      </div>
    )
  }
}

export default Pokemon