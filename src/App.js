import React from 'react';
import './App.css';
import {Header} from "./componetns/Header";
import {Player} from "./componetns/Player";
import {AddPlayerForm} from "./componetns/AddPlayerForm";
import connect from "react-redux/es/connect/connect";

class App extends React.Component {
  // Lifting up
  // state = {
  //   players: [
  //     {id: 1, name: 'HONG', score: 40},
  //     {id: 2, name: 'KIM', score: 50},
  //     {id: 3, name: 'LDK', score: 30},
  //     {id: 4, name: 'PARK', score: 60},
  //   ]
  // }

  // --> store에서 내려 받아야 됨
  // macId = 4;

  render() {
    return (
      <div className="scoreboard">
        <Header title="My Score Board" players={this.props.players}/>
        {
          this.props.players.map(player =>
            <Player key={player.id} id={player.id} name={player.name} score={player.score}
                    removePlayer={this.handleRemovePlayer}
                    changeScore={this.handleChangeScore}/>)
        }
        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
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

  // 3주차 비동기 처리
  // short hand property 키와 값이 같을 때 생량 name :name
  handleAddPlayer = (name) => {
    console.log(name);
    this.setState(p => {
      const player = {name, score:0, id: ++this.macId};
      p.players.push(player);
      return {
        players: p.players
      }
    })
  }
}

// store에 props에 연결. subscribe
// state에서 읽는 데이터는 로컬 props에서 읽음
const mapStateToProps = (state) => ({
  players: state.playerRecuder.players
})

// 커링펑션, HoC
// 컴포지션 기법
export default connect(mapStateToProps, null)(App);