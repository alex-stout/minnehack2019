import React, { Component } from 'react';
import './TransactionForm.css';

class TransactionForm extends Component {
	render() {
		return (
			<form action="" method="get">
				<table>
					<tr>
						<td>Shipment ID:</td>
						<td><input type="text" name="shipment"></input></td>
					</tr><br />
					<tr>
						<td>Giver ID:</td>
						<td><input type="text" name="giver"></input></td>
					</tr><br />
					<tr>
						<td>Receiver ID:</td>
						<td><input type="text" name="receiver"></input></td>
					</tr><br />
					<tr>
						<td>Location:</td>
						<td><input type="text" name="location"></input></td>
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

export default TransactionForm;
