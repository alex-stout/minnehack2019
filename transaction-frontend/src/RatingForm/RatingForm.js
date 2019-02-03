import React, { Component } from 'react';
import './RatingForm.css';

class RatingForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			millName: "",
			millGPSCoord: "",
			RSPOCertified: "",
			outReachPrograms: "",
			responsibilitySourcingPolicy: "",
			noDeforestStationPolicy: "",
			submitSuccess: false
		};
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.rateCompany(e);
	};

	rateCompany(e) {
		fetch("http://localhost:9000/certification", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				millName: e.target[0].value,
				millGPSCoord: e.target[1].value,
				RSPOCertified: e.target[2].value,
				outReachPrograms: e.target[3].value,
				responsibilitySourcingPolicy: e.target[4].value,
				noDeforestStationPolicy: e.target[5].value
			})
		})
			.then(res => res.json())
			.then(data => {
				if (data.millName) {
					this.setState({ submitSuccess: true });
				} else {
					this.setState({ submitSuccess: false });
				}
			});
	}
	render() {
		return (
			<div className="form">
				<h2>Sustainabilty Scoring Form</h2>
				<p>
					Please fill out all of the fields below relating to the
					mill sustainability scoring form. Afterwards, the updated score will
					appear in the table on the certification page.
				</p>
				<form onSubmit={this.handleSubmit}>
					<table>
						<tr>
							<td className="label">Mill Name:</td>
							<td><input type="text" name="name" placeholder="Example Inc."></input></td>
						</tr>
						<tr>
							<td className="label">Mill Latitude:</td>
							<td><input type="text" name="latitude" placeholder="10.00"></input></td>
						</tr>
						<tr>
							<td className="label">Mill Longitude:</td>
							<td><input type="text" name="longitude" placeholder="10.00"></input></td>
						</tr>
						<tr>
							<td className="label">Roundtable on Sustainable Palm Oil (RSPO) Certification?</td>
							<td>
								<input type="radio" name="RSPO" value="yes"></input> Yes&nbsp;&nbsp;&nbsp;&nbsp;
							<input type="radio" name="RSPO" value="no"></input> No
						</td>
						</tr>
						<tr>
							<td className="label">Involved in engagement/outreach programs?</td>
							<td>
								<input type="radio" name="programs" value="yes"></input> Yes&nbsp;&nbsp;&nbsp;&nbsp;
							<input type="radio" name="programs" value="no"></input> No
							<br />Please Specify:<br />
								<input type="text" name="programs"></input>
							</td>
						</tr>
						<tr>
							<td className="label">Responsible Sourcing Policy?</td>
							<td>
								<input type="radio" name="sourcingPolicy" value="yes"></input> Yes&nbsp;&nbsp;&nbsp;&nbsp;
							<input type="radio" name="sourcingPolicy" value="no"></input> No
							<br />Include Policy Here:<br />
								<input type="text" name="sourcingPolicyText"></input>
							</td>
						</tr>
						<tr>
							<td className="label">No Deforestation Policy?</td>
							<td>
								<input type="radio" name="deforestationPolicy" value="yes"></input> Yes&nbsp;&nbsp;&nbsp;&nbsp;
							<input type="radio" name="deforestationPolicy" value="no"></input> No
							<br />Include Policy Here:<br />
								<input type="text" name="deforestationPolicyText"></input>
							</td>
						</tr>
					</table>
					<button className="submit button" type="submit">Submit</button>
					<button className="button" type="reset">Reset</button>
				</form >
			</div>
		);
	}
}

export default RatingForm;
