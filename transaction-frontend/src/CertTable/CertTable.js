import React, { Component } from "react";
import "./CertTable.css";
import axios from "axios";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Container } from "reactstrap";

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
      console.log(JSON.stringify(items[0], null, 2));
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
        accessor: "parentCompanyName"
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
        accessor: "rating",
        Cell: row => (
          <span>
            <span
              style={{
                color:
                  row.value === "A"
                    ? "#00FF00"
                    : row.value === "B"
                    ? "#7FFF00"
                    : row.value === "C"
                    ? "#FFFF00"
                    : row.value === "D"
                    ? "#FFFF00"
                    : row.value === "F"
                    ? "#FF0000"
                    : "#57d500",
                transition: "all .3s ease"
              }}
            >
              &#x25cf;
            </span>{" "}
            {row.value}
          </span>
        )
      }
    ];

    return (
      <div>
        <h1 className="text-center">Palm Oil Mills</h1>
        <p className="text-center">
          Below are the companies that have been reviewed by our committee.
        </p>
        <div style={{ width: "90%", margin: "0 auto" }}>
          <ReactTable data={this.state.items} columns={columns} />
        </div>
      </div>
    );
  }
}

export default CertTable;
