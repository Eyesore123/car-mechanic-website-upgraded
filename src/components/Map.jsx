import React from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const googleMapsApiKey = import.meta.env.VITE_PUBLIC_GOOGLE_MAPS_API_KEY;


export default function Map() {
  const mapRef = React.createRef();
  const [map, setMap] = React.useState(null);
  const [showMap, setShowMap] = React.useState(true);

  async function initMap() {

    const loader = new Loader({
      apiKey: googleMapsApiKey,
      version: 'weekly',
    });

    const google = await loader.load();
    try {
      const location = { lat: 62.056138, lng: 28.220649 };
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