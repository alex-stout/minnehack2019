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
	//   handleSubmit = event => {
	// 	event.preventDefault();
	// 	this.rateCompany();
	//   };

	// rateCompany() {
	// 	fetch("localhost:9000/mills", {
	// 	  method: "POST",
	// 	  headers: {
	// 		"Content-Type": "application/json"
	// 	  },
	// 	  body: JSON.stringify({
	// 		millName: this.state.millName,
	// 		millGPSCoord: this.state.millGPSCoord,
	// 		RSPOCertified: this.state.RSPOCertified,
	// 		outReachPrograms: this.state.outReachPrograms,
	// 		responsibilitySourcingPolicy: this.state.responsibilitySourcingPolicy,
	// 	  	noDeforestStationPolicy: this.state.noDeforestStationPolicy,
	// 	  })
	// 	})
	// 	  .then(res => res.json())
	// 	  .then(data => {
	// 		if (data.millName) {
	// 			this.setState({ submitSuccess: true });
	// 		}else{
	// 			this.setState({ submitSuccess: false });
	// 		}
	// 	  });
	//   }
	render() {
		return (
			<form onSubmit={this.handleSubmit}>

				<table>
					<tr>
						<td>Mill Name:</td>
						<td><input type="text" name="name" placeholder="Example Inc."></input></td>
					</tr><br />
					<tr>
						<td>Mill Latitude:</td>
						<td><input type="text" name="latitude" placeholder="10.00"></input></td>
					</tr><br />
					<tr>
						<td>Mill Longitude:</td>
						<td><input type="text" name="longitude" placeholder="10.00"></input></td>
					</tr><br />
					<tr>
						<td>Roundtable on Sustainable Palm Oil (RSPO) Certification?</td>
						<td>
							<input type="radio" name="RSPO" value="yes"></input> Yes&nbsp;&nbsp;&nbsp;&nbsp;
							<input type="radio" name="RSPO" value="no"></input> No
						</td>
					</tr><br />
					<tr>
						<td>Involved in engagement/outreach programs?</td>
						<td>
							<input type="radio" name="programs" value="yes"></input> Yes&nbsp;&nbsp;&nbsp;&nbsp;
							<input type="radio" name="programs" value="no"></input> No
							<br />Please Specify:<br />
							<input type="text" name="programs"></input>
						</td>
					</tr><br />
					<tr>
						<td>Responsible Sourcing Policy?</td>
						<td>
							<input type="radio" name="sourcingPolicy" value="yes"></input> Yes&nbsp;&nbsp;&nbsp;&nbsp;
							<input type="radio" name="sourcingPolicy" value="no"></input> No
							<br />Include Policy Here:<br />
							<input type="text" name="sourcingPolicyText"></input>
						</td>
					</tr><br />
					<tr>
						<td>No Deforestation Policy?</td>
						<td>
							<input type="radio" name="deforestationPolicy" value="yes"></input> Yes&nbsp;&nbsp;&nbsp;&nbsp;
							<input type="radio" name="deforestationPolicy" value="no"></input> No
							<br />Include Policy Here:<br />
							<input type="text" name="deforestationPolicyText"></input>
						</td>
					</tr><br />
					<tr>
						<td>Average Employee Wage (USD):</td>
						<td><input type="text" name="averageWage" placeholder="8.00"></input></td>
					</tr><br />
					<tr>
						<td></td>
						<td>
							<button type="submit">Submit</button>
							<button type="reset">Reset</button>
						</td>
					</tr><br />
				</table>
			</form >
		);
	}
}

export default RatingForm;
