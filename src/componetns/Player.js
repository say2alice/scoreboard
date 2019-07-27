import React from 'react';
import {Counter} from "./Counter";

export class Player extends React.Component {
	render() {
		const {name, score, removePlayer, id, changeScore} = this.props;
		console.log(name, ' rendered');

		return (
			<div className="player">
			<span className="player-name">
				<button className="remove-player" onClick={() => removePlayer(id)}>x</button>
				{name}
			</span>
				<Counter id={id} score={score} changeScore={changeScore} />
			</div>
		);
	}

	// 속성값 변경 확인
	componentWillReceiveProps(nextProps, nextContext) {
		// console.log("cwr nextPropts :" ,nextProps)
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		// console.log("scu nextPropts :" ,nextProps)
		return this.props.score !== nextProps.score;
	}
}
