import React from 'react';
import {connect} from "react-redux";
import {addPlayer} from "../redux/reduces/actions";

export class AddPlayerForm extends React.Component {
	// state = {
	// 	value: ''
	// }
	//
	// handleValueChange = (e) => {
	// 	this.setState({value: e.target.value});
	// }

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

		// this.props.addPlayer(this.state.value);
		this.props.addPlayer(this.textInput.current.value);
	}

	textInput = React.createRef();

	render() {
		return (
			<form className="form" onSubmit={this.handleSumit} noValidate id="playerForm">
				<input className="input" type="text" placeholder="enter a player's name"
							 ref={this.textInput} required id="player"/>
							 {/*value={this.state.value} onChange={this.handleValueChange} required id="player"/>*/}
				<input className="input" type="submit" value="Add Player" />
			</form>
		)
	}
}

// publish
// props : function
// actionCreater은 리턴 action
const mapActionToProps = (dispatch) => ({
	addPlayer: (name) => dispatch(addPlayer(name))
})

// 커링펑션, HoC
// 컴포지션 기법
export default connect(null, mapActionToProps)(AddPlayerForm);
// export default App;