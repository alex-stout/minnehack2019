import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import TransactionForm from "./TransactionForm/TransactionForm";
import TransactionConfirm from "./TransactionConfirm/TransactionConfirm";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/transaction" exact component={TransactionForm} />
        <Route path="/transactionConfirm" component={TransactionConfirm} />
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