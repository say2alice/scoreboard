import React from "react";
import PropTypes from "prop-types";

export class Counter extends React.Component {
	// state 변경 setState,  비동기
	// state overriding
	// 이벤트 우측에는 함수선언, 결과 아님
	state = {
		score: 0
	};

	// arrow function this 자신
	// changeScore = (delta) => {
	// 	// this.setState({score: this.state.score+delta});
	// 	// this.setState(prevState => {return {score: prevState.score + delta} });
	// 	this.setState(prevState => ({score: prevState.score + delta}));
	// }

	render() {

		const {id, score, changeScore} = this.props;

		return (
			<div className="counter">
				<button className="counter-action decrement" onClick={() => changeScore(id, -1)}> - </button>
				<span className="counter-score">{score}</span>
				{/*표현식*/}
				{/*<button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button>*/}
				{/*선언문*/}
				<button className="counter-action increment" onClick={() => changeScore(id, 1)}> + </button>
			</div>
		);
	}
}

Counter.propTypes = {
	id: PropTypes.number,
	score: PropTypes.number,
	changeScore: PropTypes.func
}