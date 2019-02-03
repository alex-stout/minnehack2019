import React, { Component } from "react";
import QRCode from "qrcode.react";
import "./TransactionForm.css";
import AppNavbar from "../AppNavbar";

class TransactionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: false,
      form: true,
      url: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target[0].value);
    var urlStr =
      window.location.href +
      "Confirm" +
      "?shipment" +
      "=" +
      e.target[0].value +
      "?giver=" +
      e.target[1].value +
      "?receiver=" +
      e.target[2].value +
      "?country=" +
      e.target[3].value +
      "?state=" +
      e.target[4].value +
      "?city=" +
      e.target[5].value +
      "?peroxide=" +
      e.target[6].value +
      "?ffa=" +
      e.target[7].value +
      "?impurities=" +
      e.target[8].value +
      "?dobi=" +
      e.target[9].value +
      "?review=true";
    this.setState({
      code: true,
      form: false,
      url: urlStr
    });
    console.log(urlStr);
  };

  render() {
    return (
      <div>
        <AppNavbar />
        <div className="form">
          <h2>Transaction Form</h2>
          <p>
            To initiate a transaction, please fill out the following form. When
            complete, click submit to create the QR code required to verify the
            form entries.
          </p>
          {this.state.form ? (
            <form type="get" onSubmit={this.handleSubmit}>
              <table>
                <tbody>
                  <tr>
                    <td className="label">Shipment ID:</td>
                    <td>
                      <input type="text" name="shipment" />
                    </td>
                  </tr>
                  <tr>
                    <td className="label">Giver ID:</td>
                    <td>
                      <input type="text" name="giver" />
                    </td>
                  </tr>
                  <tr>
                    <td className="label">Receiver ID:</td>
                    <td>
                      <input type="text" name="receiver" />
                    </td>
                  </tr>
                  <tr>
                    <td className="label">Country:</td>
                    <td>
                      <input type="text" name="country" />
                    </td>
                  </tr>
                  <tr>
                    <td className="label">State:</td>
                    <td>
                      <input type="text" name="state" />
                    </td>
                  </tr>
                  <tr>
                    <td className="label">City:</td>
                    <td>
                      <input type="text" name="city" />
                    </td>
                  </tr>
                  <tr>
                    <td className="label">Peroxide Value:</td>
                    <td>
                      <input type="text" name="peroxide" />
                    </td>
                  </tr>
                  <tr>
                    <td className="label">Free Fatty Acid Value:</td>
                    <td>
                      <input type="text" name="ffa" />
                    </td>
                  </tr>
                  <tr>
                    <td className="label">Moisture and Impurities Value:</td>
                    <td>
                      <input type="text" name="impurities" />
                    </td>
                  </tr>
                  <tr>
                    <td className="label">
                      Deterioration of Bleachability Index Value:
                    </td>
                    <td>
                      <input type="text" name="dobi" />
                    </td>
                  </tr>
                </tbody>
              </table>
              <button className="submit" type="submit">
                Submit
              </button>
              <button type="reset">Reset</button>
            </form>
          ) : null}
          {this.state.code ? (
            <div>
              <QRCode value={this.state.url} />
              <br />
              <a href={this.state.url}>Having troubles scanning? Click here.</a>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default TransactionForm;
