import React from 'react'

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function GoogleMapsComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBdEBWtBG4z3kViLbM231R5UT1U57Cv4AM"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
}

export default GoogleMapsComponent;
