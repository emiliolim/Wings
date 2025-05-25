import React, {useEffect, useState, useRef, useCallback} from 'react';
import {
  APIProvider,
  Map,
  Marker,
  useMap,
  AdvancedMarker,
  MapCameraChangedEvent,
  Pin
} from '@vis.gl/react-google-maps';
import {MarkerClusterer} from '@googlemaps/markerclusterer';
import '../styles/MapComponents.css'
import {product_locations} from '../components/locationData'

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
const MAP_ID = process.env.REACT_APP_MAP_ID

const aldrich_park = {lat: 33.64601898038214, lng: -117.842742745889385 }
const uciRestriction = {
    latLngBounds: {
      north: 33.658871, // Northernmost latitude of UCI
      south: 33.632553, // Southernmost latitude of UCI
      east: -117.815354, // Easternmost longitude of UCI
      west: -117.861963, // Westernmost longitude of UCI
    },
    strictBounds: true,
  };

export const MapComponent = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [mapCenter, setMapCenter] = useState(aldrich_park);
  const [mapZoom, setMapZoom] = useState(16);

  const handleMarkerClick = (location) => {
    console.log(`Clicked on ${location.name}`);
    setSelectedLocation(location);
    setMapCenter(location.position);
    setMapZoom(18);
  };

  const handleCloseInfoCard = () => {
      setSelectedLocation(null);
      setMapCenter(null);
      setMapZoom(null);
  };

  return (
    <APIProvider apiKey={API_KEY}>
      <div className="mapContainer">
        <Map
          className="map"
          center={mapCenter}
          zoom={mapZoom}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
          restriction= {uciRestriction}
          mapId={MAP_ID}
        >
            {product_locations.map((location, index) => (
              <Marker
                key={index} 
                position={location.position}
                title={location.key}
                onClick={() => handleMarkerClick(location)}
              />
            ))}
        </Map>
        {selectedLocation && (
          <div>
            <InfoCard
              location={selectedLocation} 
              onClose={handleCloseInfoCard}
            />
          </div>
        )}
        
      </div>
    </APIProvider>
  );
};

export const InfoCard = ({location, onClose}) => {
  return (
    <div className="infoCard">
      {/*Location Name and Close Button top right*/}
      <div>

      </div>
      {/*Location Image*/}
      <div>
      </div>
      {/*Information Box*/}
      <div>
        {/*Location*/}
        {/*Stocked*/}
        {/*Notes*/}
        {/*Items*/}
      </div>
      {/*Report Out of Stock*/}
      
      <div>
        <button className="explore-button"onClick={onClose}>
          Close
        </button>
      </div>
      <h1>
        {location.name}
      </h1>
      <button className="explore-button"onClick={onClose}>
          Report Out of Stock
        </button>

    </div>
  )
}