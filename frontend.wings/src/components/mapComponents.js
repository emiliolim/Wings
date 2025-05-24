import React, {useEffect, useState, useRef, useCallback} from 'react';
import {
  APIProvider,
  Map,
  useMap,
  AdvancedMarker,
  MapCameraChangedEvent,
  Pin
} from '@vis.gl/react-google-maps';
import {MarkerClusterer} from '@googlemaps/markerclusterer';
import '../styles/MapComponents.css'

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

const aldrich_park = {lat: 33.64601898038214, lng: -117.842742745889385 }
export const MapComponent = () => {
  return (
    <APIProvider apiKey={API_KEY}>
      <div className="map-container">
        <Map
          style={{width: '50vw', height: '50vh'}}
          defaultCenter={aldrich_park}
          defaultZoom={15}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        />
      </div>
    </APIProvider>
  );
};