import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

const MillMap = withScriptjs(
  withGoogleMap(props => {
    return (
      <GoogleMap
        defaultZoom={14}
        center={{ lat: 44.978551, lng: -93.255368 }}
      />
    );
  })
);

export default MillMap;
