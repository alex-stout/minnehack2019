import React, { Component } from 'react';
import './TransactionConfirm.css';

class TransactionConfirm extends Component {
	constructor(props) {
		super(props);

		var parameters = window.location.href.split('?');

		this.state = {
			shipment: (parameters[1].split("="))[1],
			giver: (parameters[2].split("="))[1],
			receiver: (parameters[3].split("="))[1],
			country: (parameters[4].split("="))[1],
			state: (parameters[5].split("="))[1],
			city: (parameters[6].split("="))[1],
			peroxide: (parameters[7].split("="))[1],
			ffa: (parameters[8].split("="))[1],
			impurities: (parameters[9].split("="))[1],
			dobi: (parameters[10].split("="))[1]
		};
	}

	postTransaction = () => {
		fetch("http://localhost:9000/certification", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				shipmentId: this.state.shipment,
				timestamp: new Date(),
				giverID: this.state.giver,
				reciverID: this.state.receiver,
				locationID: this.state.location,

				// country: this.state.country,
				// state: this.state.state,
				// city: this.state.city,
				// peroxide: this.state.peroxide,
				// ffa: this.state.ffa,
				// impurities: this.state.impurities,
				// dobi: this.state.dobi
			})
		})
			.then(res => res.json())
			.then(data => {
				if (!data.success) {
					this.setState({
						formValid: false,
						message: "This email has already been taken."
					});
				} else {
					this.setState({ submitSuccess: true });
				}
			});
	}

	render() {
		return (
			<div className="form">
				<h2>Transaction Confirmation</h2>
				<p>
					Please verify the information displayed below.
					If everything is correct, select submit and your
					transaction will be recorded.
				</p>
				<table>
					<tr>
						<td className="label">Shipment ID:</td>
						<td>{this.state.shipment}</td>
					</tr>
					<tr>
						<td className="label">Giver ID:</td>
						<td>{this.state.giver}</td>
					</tr>
					<tr>
						<td className="label">Receiver ID:</td>
						<td>{this.state.receiver}</td>
					</tr>
					<tr>
						<td className="label">Country:</td>
						<td>{this.state.country}</td>
					</tr>
					<tr>
						<td className="label">State:</td>
						<td>{this.state.state}</td>
					</tr>
					<tr>
						<td className="label">City:</td>
						<td>{this.state.city}</td>
					</tr>
					<tr>
						<td className="label">Peroxide Value:</td>
						<td>{this.state.peroxide}</td>
					</tr>
					<tr>
						<td className="label">Free Fatty Acid Value:</td>
						<td>{this.state.ffa}</td>
					</tr>
					<tr>
						<td className="label">Moisture and Impurities Value:</td>
						<td>{this.state.impurities}</td>
					</tr>
					<tr>
						<td className="label">Deterioration of Bleachability Index Value:</td>
						<td>{this.state.dobi}</td>
					</tr>
				</table>
				<button onClick={this.postTransaction}>Confirm</button>
			</div >

		);
	}
}

export default TransactionConfirm;
