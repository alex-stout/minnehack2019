import React, { Component } from "react";
import axios from "axios";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Container } from "reactstrap";
import AppNavbar from "./AppNavbar";

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
        <AppNavbar />
        <h1 className="text-center">Palm Oil Supply Chain Transactions</h1>
        <p className="text-center">
          Complete log of transactions of palm oil throughout the world.
        </p>
        <div style={{ width: "90%", margin: "0 auto" }}>
          <ReactTable data={this.state.items} columns={columns} />
        </div>
      </div>
    );
  }
}

export default TransactionTable;
