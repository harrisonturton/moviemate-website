import React, { Component } from "react";
import "./App.css";
import 'font-awesome/css/font-awesome.min.css';
import movie_deadpool from "./img/movies/movie-deadpool2.jpg";
import movie_quiet_place from "./img/movies/movie-a-quiet-place.jpg";
import movie_avengers from "./img/movies/movie-avengers.jpg";
import movie_blue_world_order from "./img/movies/movie-blue-world-order.jpg";
import movie_cargo from "./img/movies/movie-cargo.jpg";
import movie_chappa from "./img/movies/movie-chappaquiddick.jpg";
import movie_tully from "./img/movies/movie-tully.jpg";

export default class App extends Component {
	render() {
		return (
			<div className="app">
				<div className="background-container">
					<div class="background">
						<SlideRow reversed={true}/>
						<SlideRow reversed={false}/>
						<SlideRow reversed={true}/>
						<SlideRow reversed={false}/>
					</div>
				</div>
				<nav>
					<a href="" class="logo">moviemate</a>
					<div class="nav-account-buttons">
						<a href="" class="nav-elem">LOGIN</a>
						<a href="" class="nav-register">SIGN UP</a>
					</div>
				</nav>
				<div className="content-container">
					<header>
						<h1>Infinite Cinema Visits</h1>
						<ChangingTitle
							titles={[
								"Blockbusters-on-Demand",
								"Gluten Free Movies",
								"\"A great idea\" - Mum",
								"Loved by dozens of people",
								"Bougie Netflix",
								"Please sign up",
								"Date-night every night",
								"In the Seats & Off the Streets",
								"Ryan Reynolds 3 times a week",
								"Suggest a tagline to contact@moviemate.com",
							]}
						/>
						<Button text="GET MOVIEMATE"/>
					</header>
					<div className="panel">
						<div className="tile-container">
							<NumberedTile
								number="1"
								text="Get the App"
							/>
							<NumberedTile
								number="2"
								text="Pick a Movie"
							/>
							<NumberedTile
								number="3"
								text="Go to the Cinema"
							/>
						</div>
						<div className="subheader-container">
							<h3>Go to the Movies whenever you want, for no extra cost.</h3>
							<h3>Only in Canberra.</h3>
							<span class="small-text">Only at Dendy Cinemas, Canberra Center. More locations coming soon!</span>
							<div className="sale-tile-container">
								<SaleTile
									name="MovieMate Unlimited"
									focused={true}
									price="12.99"
									items={[
										"20% off first month!",
										"For one person",
										"Unlimited Cinema Visits",
										"Cancel at any time",
									]}
								/>
								<SaleTile
									name="MovieMate Family"
									price="42.99"
									items={[
										"2 adults & 2 children",
										"Unlimited Cinema Visits",
										"Cancel at any time",
									]}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

class SaleTile extends Component {
	render () {
		let { price, items, focused, name } = this.props;
		if (price == undefined) price = "12.99";
		if (items == undefined) items = [];
		if (name == undefined) name = "Default";
		if (focused == undefined) focused = false;
		return (
			<div className={"sale-tile " + (focused ? "focused" : "")}>
				<div className="sale-tile-info">
					<h4>{name}</h4>
					<span class={"sale-number " + (focused ? "focused" : "")}>
						{price}
						<span class="sale-month">/mo</span>
					</span>
					<ul>
						{items.map(item => (
							<li>- {item}</li>
						))}
					</ul>
				</div>
				<Button
					text="GET STARTED"
				/>
			</div>
		);
	}
}

class NumberedTile extends Component {
	render() {
		let { number, text } = this.props;
		if (number == undefined) number = '0';
		if (text == undefined) text = 'Default Text';
		return (
			<div className="numbered-tile">
				<span className="numbered-tile-number">{number}</span>
				<span className="numbered-tile-text">{text}</span>
			</div>
		);
	}
}

class ChangingTitle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			current_title: this._getFirstTitle(),
		};
		this._getFirstTitle = this._getFirstTitle.bind(this);
		this._getNewTitle = this._getNewTitle.bind(this);
	}
	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState(() => ({
				current_title: this._getNewTitle()
			}));
		}, 4000);
	}
	_getFirstTitle () {
		return this.props.titles[0];
	}
	_getNewTitle () {
		let { titles } = this.props;
		let { current_title } = this.state;
		let current_title_idx = titles.indexOf(current_title);
		if (current_title_idx == -1) return this._getFirstTitle();
		if (current_title_idx == titles.length -1) return this._getFirstTitle();
		return titles[current_title_idx + 1];
	}
	render() {
		return (
			<h2 className="changing-title">{this.state.current_title}</h2>
		)	
	}
}

class Button extends Component {
	render() {
		let { className, text, link } = this.props;
		if (text == undefined) text = "Click Me!";
		if (link == undefined) link = "";
		if (className == undefined) className = "";
		return (
			<a href="http://google.com" className={("button " + className)}>{text}</a>
		);
	}
}

class SlideRow extends Component {
	_getRandSource = () => {
		let sources = [
			movie_deadpool,
			movie_quiet_place,
			movie_avengers,
			movie_blue_world_order,
			movie_cargo,
			movie_chappa,
			movie_tully
		]
		return sources[Math.floor(Math.random() * sources.length)];
	}
	render() {
		let { length, speed, reversed } = this.props;
		if (length == undefined) length = 10;
		if (speed == undefined) speed = 60;
		if (reversed == undefined) reversed = false;

		const style = {};
		if (!reversed) {
			style["animation"] = "moveSlides " + speed + "s linear infinite";
		} else {
			style["animation"] = "moveSlides " + speed + "s reverse linear infinite";
		}

		let slides = [];
		for (var i = 0; i < length; i++) {
			slides.push(
				<img className="movie-slide" src={this._getRandSource()}/>
			);
		}

		return (
			<div className={"slide-row " + (reversed ? "reversed" : "forward")}>
				{slides}
			</div>
		)
	}
}
