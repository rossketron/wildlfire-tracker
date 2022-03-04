import { Icon } from "@iconify/react";
import "./styles.css";

import React from "react";

const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon="mdi:fire-alert" className="location-icon" />
    </div>
  );
};

export default LocationMarker;
