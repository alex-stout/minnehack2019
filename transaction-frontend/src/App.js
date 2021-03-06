import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import TransactionForm from "./TransactionForm/TransactionForm";
import TransactionConfirm from "./TransactionConfirm/TransactionConfirm";
import CertTable from "./CertTable/CertTable";
import RatingForm from "./RatingForm/RatingForm";
import TransactionTable from "./TransactionTable";
import Home from "./Home/Home";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/certification" exact component={CertTable} />
        <Route path="/rate" exact component={RatingForm} />
        <Route path="/transaction" exact component={TransactionForm} />
        <Route path="/transactionConfirm" component={TransactionConfirm} />
        <Route path="/transactionOverview" component={TransactionTable} />
      </Switch>
    );
  }
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}

export default App;
