import React from "react";
import { Marker } from "react-google-maps";
import StethoscopeIcon from "../stethoscopeIcon.png";

export default class MillMarker extends React.Component {
  render() {
    return <Marker position={this.props.location} />;
  }
}
