import React, { Component } from 'react';
import './CertTable.css';

class CertTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
          items:[{"Name" : "Rachel's Plantation", "Location" : "USA", "Rating" : "Gold"},
          {"Name" : "Taylor's Plantation", "Location" : "Mexico", "Rating" : "Silver"},
          {"Name" : "Taylor's Plantation", "Location" : "Mexico", "Rating" : "Silver"},
          {"Name" : "Taylor's Plantation", "Location" : "Mexico", "Rating" : "Silver"},
          {"Name" : "Taylor's Plantation", "Location" : "Mexico", "Rating" : "Silver"},{"Name" : "Rachel's Plantation", "Location" : "USA", "Rating" : "Gold"},
          {"Name" : "Taylor's Plantation", "Location" : "Mexico", "Rating" : "Silver"},
          {"Name" : "Taylor's Plantation", "Location" : "Mexico", "Rating" : "Silver"},
          {"Name" : "Taylor's Plantation", "Location" : "Mexico", "Rating" : "Silver"},
          {"Name" : "Taylor's Plantation", "Location" : "Mexico", "Rating" : "Silver"},{"Name" : "Rachel's Plantation", "Location" : "USA", "Rating" : "Gold"},
          {"Name" : "Taylor's Plantation", "Location" : "Mexico", "Rating" : "Silver"},
          {"Name" : "Taylor's Plantation", "Location" : "Mexico", "Rating" : "Silver"},
          {"Name" : "Taylor's Plantation", "Location" : "Mexico", "Rating" : "Silver"},
          {"Name" : "Taylor's Plantation", "Location" : "Mexico", "Rating" : "Silver"},{"Name" : "Rachel's Plantation", "Location" : "USA", "Rating" : "Gold"},
          {"Name" : "Taylor's Plantation", "Location" : "Mexico", "Rating" : "Silver"},
          {"Name" : "Taylor's Plantation", "Location" : "Mexico", "Rating" : "Silver"},
          {"Name" : "Taylor's Plantation", "Location" : "Mexico", "Rating" : "Silver"},
          {"Name" : "Taylor's Plantation", "Location" : "Mexico", "Rating" : "Silver"},{"Name" : "Rachel's Plantation", "Location" : "USA", "Rating" : "Gold"},
          {"Name" : "Taylor's Plantation", "Location" : "Mexico", "Rating" : "Silver"},
          {"Name" : "Taylor's Plantation", "Location" : "Mexico", "Rating" : "Silver"},
          {"Name" : "Taylor's Plantation", "Location" : "Mexico", "Rating" : "Silver"},
          {"Name" : "Taylor's Plantation", "Location" : "Mexico", "Rating" : "Silver"},{"Name" : "Rachel's Plantation", "Location" : "USA", "Rating" : "Gold"},
          {"Name" : "Taylor's Plantation", "Location" : "Mexico", "Rating" : "Silver"},
          {"Name" : "Taylor's Plantation", "Location" : "Mexico", "Rating" : "Silver"},
          {"Name" : "Taylor's Plantation", "Location" : "Mexico", "Rating" : "Silver"},
          {"Name" : "Taylor's Plantation", "Location" : "Mexico", "Rating" : "Silver"},{"Name" : "Rachel's Plantation", "Location" : "USA", "Rating" : "Gold"},
          {"Name" : "Taylor's Plantation", "Location" : "Mexico", "Rating" : "Silver"},
          {"Name" : "Taylor's Plantation", "Location" : "Mexico", "Rating" : "Silver"},
          {"Name" : "Taylor's Plantation", "Location" : "Mexico", "Rating" : "Silver"},
          {"Name" : "Taylor's Plantation", "Location" : "Mexico", "Rating" : "Silver"}]
        }
      }
	render() {
		return (
            <div>
                <h2 class="text-center">Plantation Certifications</h2>
                <p class="text-center">Below are the plantations that have been reviewed by our committee.</p>
                <table id="CertTable" class="table-striped">
                    <thead>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Rating</th>
                    </thead>
                    <tbody>
                        {this.state.items.map(item => 
                            <tr>
                                <td>{item.Name}</td>
                                <td>{item.Location}</td>
                                <td>{item.Rating}</td>
                            </tr>
                            
                        )}
                    </tbody>
                </table>
            </div>

		);
	}
}

export default CertTable;
