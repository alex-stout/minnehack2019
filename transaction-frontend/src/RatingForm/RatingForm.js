import React, { Component } from "react";
import "./RatingForm.css";
import { Alert, Container } from "react";
import AppNavbar from "../AppNavbar";

class RatingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submit: false,
      farmName: "",
      farmGPSCoord: "",
      RSPOCertified: "",
      outReachPrograms: "",
      responsibilitySourcingPolicy: "",
      noDeforestStationPolicy: "",
      submitSuccess: false
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ submit: true });
  };

  render() {
    return (
      <div>
        <AppNavbar />
        <div className="form">
          <h2>Farm Rating Form</h2>
          <p>
            Please fill out all of the fields below relating to the farm
            sustainability scoring form. Afterwards, the updated score will
            appear in the table on the certification page.
          </p>
          {!this.state.submit ? (
            <form type="get" onSubmit={this.handleSubmit}>
              <table>
                <tr>
                  <td className="label">farm Name:</td>
                  <td>
                    <input type="text" name="name" placeholder="Example Inc." />
                  </td>
                </tr>
                <tr>
                  <td className="label">farm Latitude:</td>
                  <td>
                    <input type="text" name="latitude" placeholder="10.00" />
                  </td>
                </tr>
                <tr>
                  <td className="label">farm Longitude:</td>
                  <td>
                    <input type="text" name="longitude" placeholder="10.00" />
                  </td>
                </tr>
                <tr>
                  <td className="label">
                    Roundtable on Sustainable Palm Oil (RSPO) Certification?
                  </td>
                  <td>
                    <input type="radio" name="RSPO" value="yes" />{" "}
                    Yes&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" name="RSPO" value="no" /> No
                  </td>
                </tr>
                <tr>
                  <td className="label">
                    Involved in engagement/outreach programs?
                  </td>
                  <td>
                    <input type="radio" name="programs" value="yes" />{" "}
                    Yes&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" name="programs" value="no" /> No
                    <br />
                    Please Specify:
                    <br />
                    <input type="text" name="programs" />
                  </td>
                </tr>
                <tr>
                  <td className="label">Responsible Sourcing Policy?</td>
                  <td>
                    <input type="radio" name="sourcingPolicy" value="yes" />{" "}
                    Yes&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" name="sourcingPolicy" value="no" /> No
                    <br />
                    Include Policy Here:
                    <br />
                    <input type="text" name="sourcingPolicyText" />
                  </td>
                </tr>
                <tr>
                  <td className="label">No Deforestation Policy?</td>
                  <td>
                    <input
                      type="radio"
                      name="deforestationPolicy"
                      value="yes"
                    />{" "}
                    Yes&nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                      type="radio"
                      name="deforestationPolicy"
                      value="no"
                    />{" "}
                    No
                    <br />
                    Include Policy Here:
                    <br />
                    <input type="text" name="deforestationPolicyText" />
                  </td>
                </tr>
              </table>
              <button className="submit button" type="submit">
                Submit
              </button>
              <button className="button" type="reset">
                Reset
              </button>
            </form>
          ) : (
            <div>
              <Container>
                <Alert color="success">
                  This is a success alert — check it out!
                </Alert>
              </Container>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default RatingForm;
