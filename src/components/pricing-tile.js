import React, { Component } from "react";
import Button from "./button";
import "../App.css";

export default class PricingTile extends Component {
	static defaultProps = {
		price: "12.99",
		title: "Default",
		subtitle: "DEFAULT DEAL",
		items: [],
		focused: false
	};
	render = () => {
		let { price, items, focused, title, subtitle } = this.props;
		let is_focused_class = focused ? "focused" : "";
		return (
			<div className={`sale-tile ${is_focused_class}`}>
				<div className="sale-tile-info">
					<h4>{title}</h4>
					<span class={`sale-number ${is_focused_class}`}>
						{price}
						<span class="sale-month">/mo</span>
					</span>
					<span class={`sale-subtitle ${is_focused_class}`}>{subtitle}</span>
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
