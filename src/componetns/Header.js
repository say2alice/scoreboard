import React from 'react';
import {Statistics} from "./Statistics";
import {StopWatch} from "./StopWatch";
import PropTypes from "prop-types";

// 앞글자는 대문자, 반드시 react element를 리턴
export const Header = ({title, players}) => {


	// static propTypes ={
	// 	title: PropTypes.string,
	// 	players: PropTypes.array
	// }


	return (
		<header className="header">
			<Statistics players={players}/>
			<h1 className="h1">{title}</h1>
			<StopWatch/>
		</header>
	)
}

Header.propTypes ={
	title: PropTypes.string,
	players: PropTypes.arrayOf(PropTypes.shape(PropTypes.number, PropTypes.number, PropTypes.string))
}

Header.defaultProps = {
	title : "Score Board"
}