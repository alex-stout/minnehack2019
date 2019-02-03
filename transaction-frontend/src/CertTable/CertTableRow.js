import React, { Component } from 'react';

class CertTableRow extends Component {
    constructor(props) {
        super(props)
        this.state = {Name : "", Location : "", Rating : ""}
      }
	render() {
		return (
         <tr>
            <td>{this.state.Name}</td>
            <td>{this.state.Location}</td>
            <td>{this.state.Rating}</td>
        </tr>
		);
	}
}

export default CertTableRow;
