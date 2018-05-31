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
						<h1>Unlimited Cinema Visits</h1>
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
							<section className="faq-container">
								<h3 className="faq-title">Frequently Asked Questions</h3>
								<h4 className="faq-question">What is MovieMate?</h4>
								<p>MovieMate is a Cinema-on-Demand service.</p>
								<p>What does that mean?</p>
								<p>It means you can watch as many movies as you like! For a small subscription, our users can visit the cinema whenever they want.</p>
								<h4 className="faq-question">I'm at the cinema. What now?</h4>
								<p>Reach for the MovieMate app, not your wallet, when buying a ticket!</p>
								<p>Make sure you're logged into the app. The cinema attendant will verify your account, and then give you a ticket.</p>
								<h4 className="faq-question">Membership</h4>
								<p>Pick your price & pick your plan! We offer two options: an individual plan, and a family plan. Both give you access to unlimited cinema viewings.</p>
								<p>The family plan is 30% cheaper than multiple memberships.</p>
								<h4 className="faq-question">How can I cancel?</h4>
								<p>Cancel at any time! Go to the app menu, and tap "Cancel". Alternatively, log into our website, and cancel from there.</p>
								<p>You can do this at any time.</p>
							</section>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
