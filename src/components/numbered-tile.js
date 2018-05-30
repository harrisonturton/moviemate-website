import React, { Component } from "react";

export default class NumberedTile extends Component {
	static defaultProps = {
		number: "0",
		text: "Default"
	};
	render = () => (
		<div className="numbered-tile">
			<span className="numbered-tile-number">{this.props.number}</span>
			<span className="texted-tile-text">{this.props.text}</span>
		</div>
	)
}
