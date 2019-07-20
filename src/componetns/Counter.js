import React from "react";

export class Counter extends React.Component {
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
	// changeScore = (delta) => {
	// 	// this.setState({score: this.state.score+delta});
	// 	// this.setState(prevState => {return {score: prevState.score + delta} });
	// 	this.setState(prevState => ({score: prevState.score + delta}));
	// }

	render() {
		return (
			<div className="counter">
				<button className="counter-action decrement" onClick={() => this.props.changeScore(this.props.id, -1)}> - </button>
				<span className="counter-score">{this.props.score}</span>
				{/*표현식*/}
				{/*<button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button>*/}
				{/*선언문*/}
				<button className="counter-action increment" onClick={() => this.props.changeScore(this.props.id, 1)}> + </button>
			</div>
		);
	}
}

