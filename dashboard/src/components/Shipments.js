import React, { Component } from "react";
import { Button, Form, Row, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";

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
    axios
      .get(
        `http://localhost:9000/shipments?shipmentID=` + this.state.shipmentID
      )
      .then(res => {
        const items = res.data.users.map(obj => obj);
        this.setState({ items });
        console.log(JSON.stringify(items));
      });
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
