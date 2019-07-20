import React from 'react';
import './App.css';

const Header = ({title, totalPlayers}) => {
// 객체 해체할당
  return (
    <header className="header">
      <h1 className="h1">{title}</h1>
      <span className="stats">Player: {totalPlayers}</span>
    </header>
  )};

const Player = ({id, name, score, removePlayer}) => {
  return (
    <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={() => removePlayer(id)}>x</button> {name}</span>
      <Counter score={score}/>
    </div>
  )};

class Counter extends React.Component {
  // state 변경 setState,  비동기
  // state overriding
  // 이벤트 우측에는 함수선언, 결과 아님
  state = {
    score: 0
  };

  incrementScore() {
    this.setState({score: this.state.score+1})
    // this.state.score = this.state.score + 1;
    console.log("incrementScore: " + this.state.score);
  };

  // arrow function this 자신
  changeScore = (delta) => {
    // this.setState({score: this.state.score+delta});
    // this.setState(prevState => {return {score: prevState.score + delta} });
    this.setState(prevState => ({score: prevState.score + delta}));
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={() => this.changeScore(-1)}> - </button>
        <span className="counter-score">{this.state.score}</span>
        {/*표현식*/}
        {/*<button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button>*/}
        {/*선언문*/}
        <button className="counter-action increment" onClick={() => this.changeScore(1)}> + </button>
      </div>
    )
  };
}

class App extends React.Component {
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
        <Header title="My Score Board" totalPlayers={1+10}/>
        {
          this.state.players.map(player =>
            <Player key={player.id} id={player.id} name={player.name} score={player.score}
                    removePlayer={this.handleRemovePlayer}/>)
        }
      </div>
    );
  }

  handleRemovePlayer = (id) => {
    console.log("id " + id);

    this.setState(prevState => ({
      players: prevState.players.filter(player => player.id !== id)
    }))
  }
}

export default App;