import React, { Component } from 'react';
import QRPopup from './QRPopup';
import './TransactionForm.css';

class TransactionForm extends Component {
	constructor(props) {
		super(props);

		this.state = { isOpen: false };
	}

	openPopup = () => {
		this.setState({
			isOpen: true
		});
	}

	closePopup = () => {
		this.setState({
			isOpen: false
		});
	}

	render() {
		return (
			<div>
				<form >
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
							<td>Country:</td>
							<td><input type="text" name="country"></input></td>
						</tr><br />
						<tr>
							<td>State:</td>
							<td><input type="text" name="state"></input></td>
						</tr><br />
						<tr>
							<td>City:</td>
							<td><input type="text" name="city"></input></td>
						</tr><br />
						<tr>
							<td>Peroxide Value:</td>
							<td><input type="text" name="peroxide"></input></td>
						</tr><br />
						<tr>
							<td>Free Fatty Acid Value:</td>
							<td><input type="text" name="ffa"></input></td>
						</tr><br />
						<tr>
							<td>Moisture and Impurities Value:</td>
							<td><input type="text" name="impurities"></input></td>
						</tr><br />
						<tr>
							<td>Deterioration of Bleachability Index (DOBI) Value:</td>
							<td><input type="text" name="dobi"></input></td>
						</tr><br />
						<tr>
							<td></td>
							<td>
								<button onClick={this.openPopup}>Submit</button>
								<button type="reset">Reset</button>
							</td>
						</tr><br />
					</table>
				</form >
				<QRPopup show={this.state.isOpen}
					onClose={this.closePopup}>
					Hi
				</QRPopup>
			</div >

		);
	}
}

export default TransactionForm;
