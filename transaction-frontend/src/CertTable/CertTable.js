import React, { Component } from "react";
import "./CertTable.css";
import axios from "axios";
import ReactTable from "react-table";
import "react-table/react-table.css";

class CertTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    axios.get(`http://localhost:9000/mill`).then(res => {
      const items = res.data.users.map(obj => obj);
      this.setState({ items });
      console.log(JSON.stringify(items));
    });
  }

  render() {
    const columns = [
      {
        Header: "Mill Name",
        accessor: "millName"
      },
      {
        Header: "Parent Company",
        accessor: "parentCompany"
      },
      {
        Header: "State/Province",
        accessor: "stateOrProvince"
      },
      {
        Header: "Country",
        accessor: "country"
      },
      {
        Header: "Latitude",
        accessor: "latitude"
      },
      {
        Header: "Longitude",
        accessor: "longitude"
      },
      {
        Header: "Rating",
        accessor: "rating"
      }
    ];

    return (
      <div>
        <h2 className="text-center">Company Certifications</h2>
        <p className="text-center">
          Below are the companies that have been reviewed by our committee.
        </p>
        <ReactTable data={this.state.items} columns={columns} />
      </div>
    );
  }
}

export default CertTable;
