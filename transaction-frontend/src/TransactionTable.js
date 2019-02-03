import React, { Component } from "react";
import axios from "axios";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Container } from "reactstrap";

class TransactionTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    axios.get(`http://localhost:9000/transaction`).then(res => {
      console.log(res.data);
      const items = res.data.transactions.map(obj => obj);
      this.setState({ items });
    });
  }

  render() {
    const columns = [
      {
        Header: "Shipment ID",
        accessor: "shipmentID"
      },
      {
        Header: "Seller ID",
        accessor: "sellerID"
      },
      {
        Header: "Buyer ID",
        accessor: "buyerID"
      },
      {
        Header: "City",
        accessor: "city"
      },
      {
        Header: "State",
        accessor: "state"
      },
      {
        Header: "Country",
        accessor: "country"
      },
      {
        Header: "Peroxide Value",
        accessor: "peroxideVal"
      },
      {
        Header: "Free Fatty Acids",
        accessor: "fattyAcidVal"
      },
      {
        Header: "Moisture & Impurities",
        accessor: "impurities"
      },
      {
        Header: "D.O.B.I.",
        accessor: "bleachIndex"
      },
      {
        Header: "Transaction Time",
        accessor: "timestamp"
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

export default TransactionTable;
