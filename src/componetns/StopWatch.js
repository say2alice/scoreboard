import React from 'react';

export class StopWatch extends React.Component {

	state = {
		timer:0,
		isRunning: false
	};

	tickRef;

	render() {
		return (
			<div className="stopwatch">
				<h2>StopWatch</h2>
				<span className="stopwatch-time">{this.state.timer}</span>
				<button onClick={this.handleStopWatch}>{this.state.isRunning?'stop':'start'}</button>
				<button onClick={this.handleReset}>Reset</button>
			</div>
		);
	}

	tick = () => {

		if(this.state.isRunning) {
			this.setState(prevStat => ({
					timer: prevStat.timer + 1
				}))
		}
	}

	handleStopWatch = () => {
		this.setState(ps => ({isRunning: !ps.isRunning}));
	}

	handleReset = () => {
		this.setState({timer: 0});
	}

	// DOM이 랜더링 된 후 호출
	// 네트워크 호출, jquery 로딩
	// jquery를 index.html에서 호출 금지.. 전역 문제, 로딩 속도 문제, 컴포넌트 단위
	componentDidMount() {
		this.tickRef = setInterval(this.tick, 1000)
	}

	// DOM 이 파괴될 때 호출
	// 리소스 해제
	componentWillUnmount() {
		clearInterval(this.tickRef);
	}
}
  
