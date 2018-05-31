import React, { Component } from "react";
import "./App.css";
import BackgroundGrid from "./components/background-grid";
import Button from "./components/button";
import Logo from "./components/logo";
import PricingTile from "./components/pricing-tile";
import NumberedTile from "./components/numbered-tile";
import TextLoop from "./components/text-loop";

export default class App extends Component {
	render = () => (
		<div className="app">
			<BackgroundGrid/>	
			<nav>
				<Logo/>
				<div class="nav-right-container">
					<a href="" class="nav-elem">PARTNERS</a>
					<a href="" class="nav-elem">LOGIN</a>
					<a href="" class="nav-register">SIGN UP</a>
				</div>
			</nav>
		</div>
	);
}
