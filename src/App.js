import React from 'react';
import './App.css';
import {Header} from "./componetns/Header";
import {Player} from "./componetns/Player";
import {AddPlayerForm} from "./componetns/AddPlayerForm";

class App extends React.Component {
  // Lifting up
  state = {
    players: [
      {id: 1, name: 'HONG', score: 40},
      {id: 2, name: 'KIM', score: 50},
      {id: 3, name: 'LDK', score: 30},
      {id: 4, name: 'PARK', score: 60},
    ]
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My Score Board" players={this.state.players}/>
        {
          this.state.players.map(player =>
            <Player key={player.id} id={player.id} name={player.name} score={player.score}
                    removePlayer={this.handleRemovePlayer}
                    changeScore={this.handleChangeScore}/>)
        }
        <AddPlayerForm/>
      </div>
    );
  }

  handleRemovePlayer = (id) => {
    console.log("id " + id);

    this.setState(prevState => ({
      players: prevState.players.filter(player => player.id !== id)
    }))
  };

  handleChangeScore = (id, delta) => {
    console.log('change score: ', id, delta);
    this.setState(prevState => {
      prevState.players.forEach ( player => {
        if(player.id === id) {
          player.score += delta;
        }
      })

      return {
        players: [...prevState.players]
      }
    })
  }
}

export default App;