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
		this.props.addPlayer(this.state.value);
	}

	render() {
		return (
			<form className="form">
				<input className="input" type="text" placeholder="enter a player's name"
							 value={this.state.value} onChange={this.handleValueChange} />
				<input className="input" type="submit" value="Add Player"
							 onClick={this.handleSumit}/>
			</form>
		)
	}
}
  
