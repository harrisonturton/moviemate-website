import React, { Component } from "react";
import "../App.css";

// Movie Covers
import movie_deadpool from "../img/movies/movie-deadpool2.jpg";
import movie_quiet_place from "../img/movies/movie-a-quiet-place.jpg";
import movie_avengers from "../img/movies/movie-avengers.jpg";
import movie_blue_world_order from "../img/movies/movie-blue-world-order.jpg";
import movie_cargo from "../img/movies/movie-cargo.jpg";
import movie_chappa from "../img/movies/movie-chappaquiddick.jpg";
import movie_tully from "../img/movies/movie-tully.jpg";

export default class BackgroundGrid extends Component {
	render = () => (
		<div className="background-container">
			<div class="background">
				<SlidingRow reverse={true}/>
				<SlidingRow reverse={false}/>
				<SlidingRow reverse={true}/>
				<SlidingRow reverse={false}/>
			</div>
		</div>
	);
}

class SlidingRow extends Component {
	static defaultProps = {
		length: 10,
		reverse: false
	};
	_getRandSource = () => {
		const sources = [
			movie_deadpool,
			movie_quiet_place,
			movie_avengers,
			movie_blue_world_order,
			movie_cargo,
			movie_chappa,
			movie_tully
		];
		return sources[Math.floor(Math.random() * sources.length)];
	}
	render() {
		let { length, reverse } = this.props;
		let movie_covers = [];
		for (var i = 0; i < length; i++) {
			movie_covers.push(
				<img className="movie-slide" src={this._getRandSource()}/>
			);
		}

		return (
			<div className={`slide-row ${reverse ? "reversed" : "forward"}`}>
				{movie_covers}
			</div>
		);
	}
}
