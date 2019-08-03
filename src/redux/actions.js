// 액션은 객체
// 액션 creator는 액션을 생성하는 함수
import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER, SEARCH_NAME, SET_IS_SORTED} from "./actionTypes";

export const addPlayer = (name) => ({
	type: ADD_PLAYER,
	name
})

export const changeScore = (id, delta) => ({
	type: CHANGE_SCORE,
	id,
	delta
})

export const removePlayer = (id) => ({
	type: REMOVE_PLAYER,
	id
})

export const setIsSorted = (isSorted) => ({
	type: SET_IS_SORTED,
	isSorted
})

export const searchName = (keyword) => ({
	type : SEARCH_NAME,
	keyword
})