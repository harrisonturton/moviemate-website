import React, { Component } from "react";
import "./App.css";
import BackgroundGrid from "./components/background-grid";
import Button from "./components/button";
import PricingTile from "./components/pricing-tile";
import NumberedTile from "./components/numbered-tile";
import TextLoop from "./components/text-loop";

export default class App extends Component {
	render() {
		return (
			<div className="app">
				<BackgroundGrid/>
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
						<TextLoop
							labels={[
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
								<PricingTile
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
								<PricingTile
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
