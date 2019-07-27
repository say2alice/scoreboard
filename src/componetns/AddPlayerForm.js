import React from 'react';

export class AddPlayerForm extends React.Component {
	state = {
		value: ''
	}

	handleValueChange = (e) => {
		this.setState({value: e.target.value});
	}

	handleSumit = (e) => {
		// 기본 이벤트 막기
		e.preventDefault();

		let playerInput = document.getElementById("player");
		console.log("Player Input Validation Check ", playerInput.validity.valid);
		console.log("Form Validation Check ", document.getElementById("playerForm").checkValidity())

		if(!playerInput.validity.valid) {
			// 안내 메시지 보이기
			return
		}

		this.props.addPlayer(this.state.value);
	}

	render() {
		return (
			<form className="form" onSubmit={this.handleSumit} noValidate id="playerForm">
				<input className="input" type="text" placeholder="enter a player's name"
							 value={this.state.value} onChange={this.handleValueChange} required id="player"/>
				<input className="input" type="submit" value="Add Player" />
			</form>
		)
	}
}