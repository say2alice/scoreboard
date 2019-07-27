import React from 'react';
import {Statistics} from "./Statistics";
import {StopWatch} from "./StopWatch";

// 앞글자는 대문자, 반드시 react element를 리턴
export const Header = ({title, players}) => {
	return (
		<header className="header">
			<Statistics players={players}/>
			<h1 className="h1">{title}</h1>
			<StopWatch/>
		</header>
	)
}