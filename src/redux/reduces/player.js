import {ADD_PLAYER} from "../actionTypes";

const playersInitialState = {
	players: [
		{id: 1, name: 'HONG', score: 40},
		{id: 2, name: 'KIM', score: 50},
		{id: 3, name: 'LDK', score: 30},
		{id: 4, name: 'PARK', score: 60},
	]
}

let maxID = 4;

// console.log(name);
// this.setState(p => {
// 	const player = {name, score:0, id: ++this.macId};
// 	p.players.push(player);
// 	return {
// 		players: p.players
// 	}
// })

// es6 기본값 설정 추가됩
export const playerRecuder = (state = playersInitialState, action) => {
	switch (action.type) {
		case ADD_PLAYER :
			const players = [...state.players];
			const player = {name: action.name, score: 0, id: ++maxID};
			players.push(player)
			// const players = state.players.push(player);
			// return {...state, players:player}
			return {...state, players}
			break;
		default :
			return state;
	}
}