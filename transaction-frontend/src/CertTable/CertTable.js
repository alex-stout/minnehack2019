import React, { Component } from 'react';
import './CertTable.css';
import axios from 'axios';
import { useReactTable } from "react-table";

class CertTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
    }
    componentDidMount() {
        axios.get(`http://localhost:9000/mill`)
            .then(res => {
                const items = res.data.users.map(obj => obj);
                this.setState({ items });
                console.log(JSON.stringify(items));
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Company Certifications</h2>
                <p className="text-center">Below are the companies that have been reviewed by our committee.</p>
                <table id="CertTable" className="table-striped">
                    <thead>
                        <tr>
                            <th>Parent Company</th>
                            <th>Mill Name</th>
                            <th>State or Province</th>
                            <th>Country</th>
                            <th>Latitude</th>
                            <th>Longitude</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.items.map(item =>
                            <tr>
                                <td>{item.parentCompanyName}</td>
                                <td>{item.millName}</td>
                                <td>{item.stateOrProvince}</td>
                                <td>{item.country}</td>
                                <td>{item.latitude}</td>
                                <td>{item.longitude}</td>
                                <td>Gold</td>
                            </tr>

                        )}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default CertTable;
