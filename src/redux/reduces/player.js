const playersInitialState = {
	players: [
		{id: 1, name: 'HONG', score: 40},
		{id: 2, name: 'KIM', score: 50},
		{id: 3, name: 'LDK', score: 30},
		{id: 4, name: 'PARK', score: 60},
	]
}

// es6 기본값 설정 추가됩
export const playerRecuder = (state = playersInitialState, action) => {
	switch (action.type) {
		case '' :
			break;

		default :
			return state;
	}
}