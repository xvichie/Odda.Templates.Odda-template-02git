import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = {
  lat: -3.745,
  lng: -38.523,
};

interface GoogleMapsComponentProps {
  onLocationChange: (lat: number, lng: number) => void;
}

function GoogleMapsComponent({ onLocationChange }: GoogleMapsComponentProps) {
  const [markerPosition, setMarkerPosition] = useState<{ lat: number; lng: number }>(defaultCenter);

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      setMarkerPosition({ lat, lng });
      onLocationChange(lat, lng);  // Pass the latitude and longitude back to the parent component
    }
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY_HERE">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={markerPosition}
        zoom={10}
        onClick={handleMapClick}
      >
        <Marker position={markerPosition} />
      </GoogleMap>
    </LoadScript>
  );
}

export default GoogleMapsComponent;
