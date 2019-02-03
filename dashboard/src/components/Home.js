import React, { Component } from "react";
import AppNavBar from "./AppNavBar";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmed: 0
    };
  }

  render() {
    return (
      <div className="App">
        <AppNavBar />
      </div>
    );
  }
}
export default Home;
