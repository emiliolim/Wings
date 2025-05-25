import React, {useEffect, useState, useRef, useCallback} from 'react';
import {XIcon, MarkerIcon, PackageIcon} from './icons';
import bathroomImage from "../images/uci_bathroom.jpg";

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

// Map values
const aldrich_park = {lat: 33.64601898038214, lng: -117.842742745889385 }
const initial_zoom = 16
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
  const [locations, setLocations] = useState(product_locations);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [defaultMapCenter, setDefaultMapCenter] = useState(aldrich_park);
  const [mapCenter, setMapCenter] = useState(null);
  const [defaultZoom, setDefaultZoom] = useState(initial_zoom);
  const [mapZoom, setMapZoom] = useState(null);

  const updateStockedStatus = useCallback((key, newStatus) => {
    setLocations(prevLocations => 
      prevLocations.map(location => 
        location.key === key ? {...location, Stocked: newStatus} : location
      )
    );
    // Update the selectedLocation as well
    setSelectedLocation(prevSelected => 
      prevSelected && prevSelected.key === key 
        ? {...prevSelected, Stocked: newStatus} 
        : prevSelected
    );
  }, []);


  const handleMarkerClick = (location) => {
    console.log(`Clicked on ${location.name}`);
    setSelectedLocation(location);
    setDefaultMapCenter(null)
    setMapCenter(location.position);
    setDefaultZoom(null)
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
          defaultCenter={defaultMapCenter}
          center={mapCenter}
          defaultZoom = {defaultZoom}
          zoom={mapZoom}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
          restriction= {uciRestriction}
          
          mapId={MAP_ID}
        >
            {locations.map((location, index) => (
              <AdvancedMarker
                key={index} 
                position={location.position}
                title={location.name}
                onClick={() => handleMarkerClick(location)}
              >
                <div title={location.name}>
                  <Pin
                    background={location.Stocked ? '#6B095B' : '#808080'} 
                    borderColor={'#8c0d77'}
                    glyphColor={'#FFFFFF'}
                  />
                </div>
              
              </AdvancedMarker>
            ))}
        </Map>
        {selectedLocation && (
          <div>
            <InfoCard
              location={selectedLocation} 
              onClose={handleCloseInfoCard}
              updateStockedStatus={updateStockedStatus}
            />
          </div>
        )}
        
      </div>
    </APIProvider>
  );
};

export const InfoCard = ({location, onClose, updateStockedStatus}) => {
  const handleReportOutOfStock = () => {
    updateStockedStatus(location.key, !location.Stocked);
  };
  
  return (
    <div className="infoCard">
      {/*Location Name and Close Button top right*/}
      <div className="infoCard-name">
        <h3 className="infoCard-header">
          {location.name}
        </h3>
        <button className="infoCard-close-button"onClick={onClose}>
          <XIcon/>
        </button>
      </div>
      {/*Location Image */}
      <div className="infoCard-image">
        <img src={bathroomImage} alt="UCI Bathroom" />
      </div>
      <div className="infoCard-line">
      </div>

      {/*Information Box*/}
      <div className="infoCard-details">
        {/*Location*/}
        <div className="infoCard-details-line">
          <MarkerIcon/>
          <h4>
            {location.name} (RM {location.room}, Floor {location.floor}) 
          </h4>
        </div>
        {/*Stocked*/}
        <div className="infoCard-details-line">
          <PackageIcon/>
          <h4>
            {location.Stocked ? "In Stock" : "Out of Stock"}
          </h4>
        </div>
        {/*Notes*/}
        <div className="infoCard-details-line">
          <h4>
          Items: Pads/Tampons
          </h4>
        </div>
        <div className="infoCard-details-line">
          <p>
            This location has {location.rrType} restrooms.
          </p>
        </div>
        <div className="infoCard-details-line">
          <p>
            This location has {location.PT} dispensers.
          </p>
        </div>
        
        {/*Items*/}
      </div>
      {/*Report Out of Stock*/}
      <div className="infoCard-button-container">
        <button className="infoCard-report-button"
        onClick={handleReportOutOfStock}
        >
          {location.Stocked ? "Report Out of Stock" : "Report In Stock"}
        </button>
      </div>
    </div>
  )
}