import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "../location-marker";
import LocationInfoBox from "../location-info-box";
import "./styles.css";

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [showLocationInfo, setShowLocationInfo] = useState(false);

  const closeLocationWindow = () => {
    setShowLocationInfo(false);
  };

  const wildfireMarkers = eventData.map((event) => {
    if (event.categories[0].id === 8) {
      const lat = event.geometries[0].coordinates[1];
      const lng = event.geometries[0].coordinates[0];
      return (
        <LocationMarker
          key={event.id}
          lat={lat}
          lng={lng}
          onClick={() => {
            setLocationInfo({ id: event.id, title: event.title });
            setShowLocationInfo(true);
          }}
        />
      );
    }
    return null;
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDS1tnAd9Y6MyOyjXeyuwwIn_Erqv-1HXA" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {wildfireMarkers}
      </GoogleMapReact>
      {showLocationInfo && (
        <LocationInfoBox
          info={locationInfo}
          onCloseWindow={closeLocationWindow}
        />
      )}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
