import React, { Component } from "react";

export default class TextLoop extends Component {
	static defaultProps = {
		labels: [],
	};
	constructor(props) {
		super(props);
		this.state = {
			current_label_idx: 0,
			fadeIn: true
		};
		this._getNewLabelIdx = this._getNewLabelIdx.bind(this);
		this._handleEndAnim = this._handleEndAnim.bind(this);
	}
	componentDidMount() {
		const animated_elem = this.refs.animated;
		animated_elem.addEventListener("animationend", this._handleEndAnim);
	}
	_getNewLabelIdx() {
		let { labels } = this.props;
		let { current_label_idx } = this.state;
		let new_idx = current_label_idx + 1;
		this.setState({
			current_label_idx: new_idx == labels.length ? 0 : new_idx
		});
	}
	_handleEndAnim() {
		// Finished fading in
		if (this.state.fadeIn) {
			// Fadeout in 2 seconds
			this.setState(_ => ({
				fadeIn: false
			}))
		// Finishing fading out
		} else {
			// Change label & fade back in
			this.setState(_ => ({
				current_label_idx: this._getNewLabelIdx(),
				fadeIn: true
			}));
		}
	}
	render() {
		let { fadeIn, current_label_idx } = this.state;
		return (
			<h2 ref="animated" className={`changing-title ${fadeIn ? "fadeIn" : "fadeOut"}`}>
				{this.props.labels[current_label_idx]}
			</h2>
		);
	}
}
