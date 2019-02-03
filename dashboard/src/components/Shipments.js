import React, { Component } from "react";
import { Button, Form, Row, FormGroup, Input, Label } from "reactstrap";

class Shipments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmed: 0,
      shipmentID: ""
    };
  }

  onSubmit = event => {};

  handleInput = e => {
    const key = e.target.name;
    const value = e.target.value;
    this.setState({ [key]: value }, () => {});
  };

  searchShipments = shipmentID => {
    fetch(
      "http://localhost:3000/shipments?shipmentID=" + this.state.shipmentID,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({})
      }
    );
  };

  render() {
    return (
      <div>
        <Form>
          <Row>
            <Label>Shipment ID</Label>
            <FormGroup>
              <Input
                type="text"
                name="shipmentID"
                id="shipmentID"
                placeholder=""
                required
                value={this.state.shipmentID}
                onChange={event => this.handleInput(event)}
              />
              <Button outline block color="primary" type="submit">
                Search
              </Button>
            </FormGroup>
          </Row>
        </Form>
      </div>
    );
  }
}
export default Shipments;
