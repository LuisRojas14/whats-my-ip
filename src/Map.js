import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import App from "./App";

const Map = () => {
  const [location, setLocation] = useState({ lat: 51.5167, lng: 7.45 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <MapContainer center={location} zoom={13}  className="map" style={{ height: "350px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={location}>
        <Popup>Current Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
