import React from "react";
import MillMap from "./MillMap";

export default class MillMapContainer extends React.Component {
  render() {
    return (
      <MillMap
        mills={this.props.doctors}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCr7DlsOKoygJqbpS3nSSakLjpn9ptTs8I&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `900px`, width: `1200px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}
