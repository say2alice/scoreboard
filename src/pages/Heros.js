import React from 'react';
import axios from 'axios';

export class Heroes extends React.Component {
	render() {
		return (
			<div>Heroes works</div>
		)
	}

	componentDidMount() {
		this.getHeroes().then(result => {
			console.log("result -> ", result);
		});
	}

	getHeroes = async () => {
		let response = await axios.get('http://ec2-15-164-134-124.ap-northeast-2.compute.amazonaws.com:8000/api/user/heroes?start_index=0&page_size=5');
		console.log(response.data);
	}
}
