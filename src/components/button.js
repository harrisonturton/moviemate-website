import React, { Component } from "react";
import "../App.css";

export default class Button extends Component {
	static defaultProps = {
		text: "Click Me!",
		link: "https://www.google.com.au",
	};
	render = () => (
		<a href={this.props.link} className="button">{this.props.text}</a>
	);
}
