import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class RatingForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<div className="form">
				<h2>Global Palm Oil Sustainability and Supply Chain Transparancy</h2>
				<div className="links">
					<Link to="/">Home</Link><br />
					<Link to="/certification">Mill Certification Scores</Link><br />
					<Link to="/rate">Add a Mill Rating</Link><br />
					<Link to="/transaction">Start a Transaction</Link><br />
				</div>
				<p>
					Description Here
				</p>

			</div>
		);
	}
}

export default RatingForm;
