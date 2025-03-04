import React from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import apiKey from '../../Other_files/key.js';

export default function Map() {
  const mapRef = React.createRef();
  const [map, setMap] = React.useState(null);
  const [showMap, setShowMap] = React.useState(true);

  async function initMap() {

    const loader = new Loader({
      apiKey: apiKey,
      version: 'weekly',
    });

    const google = await loader.load();
    try {
      const location = { lat: 62.05625, lng: 28.22006 };
      const mapInstance = new google.maps.Map(mapRef.current, {
        zoom: 11,
        center: location,
        mapId: "PNP-POWER",
      });
      setMap(mapInstance);

      // Marker

      const marker = new google.maps.Marker({
        position: location,
        map: mapInstance,
        title: 'PNP-POWER',
      });
      
    } catch (error) {
      console.error('Error initializing map:', error);
      setShowMap(false);
    }
  }

  React.useEffect(() => {
    initMap();
  }, []);

  return (
    <div className="mapcontainer">
      {showMap && (
        <div ref={mapRef} style={{ height: '600px', width: '100%' }} />
      )}
    </div>
  );
}