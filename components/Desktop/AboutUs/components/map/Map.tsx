"use client";

import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import "./map.css";

interface LocationPinProps {
  text: string;
  lat: number;
  lng: number;
}

const LocationPin: React.FC<LocationPinProps> = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

interface MapProps {
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  zoomLevel: number;
}

const Map: React.FC<MapProps> = ({ location, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2">Kommen Sie vorbei!</h2>
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
        }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
);

export default Map;
