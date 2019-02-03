import React, { Component } from 'react';
import './RatingForm.css';

class RatingForm extends Component {
	render() {
		return (
			<form action="" method="get">
				<table>
					<tr>
						<td>Mill Name:</td>
						<td><input type="text" name="name"></input></td>
					</tr><br />
					<tr>
						<td>Mill GPS Coordinates:</td>
						<td><input type="text" name="coordinates"></input></td>
					</tr><br />
					<tr>
						<td>Roundtable on Sustainable Palm Oil (RSPO) Certification?</td>
						<td>
							<input type="radio" name="RSPO" value="yes"></input>Yes&nbsp;&nbsp;&nbsp;&nbsp;
							<input type="radio" name="RSPO" value="no"></input>No
						</td>
					</tr><br />
					<tr>
						<td>Involved in engagement/outreach programs?</td>
						<td>
							<input type="radio" name="programs" value="yes"></input>Yes&nbsp;&nbsp;&nbsp;&nbsp;
							<input type="radio" name="programs" value="no"></input>No
							<br />Please Specify:<br />
							<input type="text" name="programs"></input>
						</td>
					</tr><br />
					<tr>
						<td>Responsible Sourcing Policy?</td>
						<td>
							<input type="radio" name="sourcingPolicy" value="yes"></input>Yes&nbsp;&nbsp;&nbsp;&nbsp;
							<input type="radio" name="sourcingPolicy" value="no"></input>No
							<br />Include Policy Here:<br />
							<input type="text" name="sourcingPolicyText"></input>
						</td>
					</tr><br />
					<tr>
						<td>No Deforestation Policy?</td>
						<td>
							<input type="radio" name="deforestationPolicy" value="yes"></input>Yes&nbsp;&nbsp;&nbsp;&nbsp;
							<input type="radio" name="deforestationPolicy" value="no"></input>No
							<br />Include Policy Here:<br />
							<input type="text" name="deforestationPolicyText"></input>
						</td>
					</tr><br />
					<tr>
						<td>Average Employee Wage (USD):</td>
						<td><input type="text" name="averageWage"></input></td>
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
