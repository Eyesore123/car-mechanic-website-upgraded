import React from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const googleMapsApiKey = import.meta.env.VITE_PUBLIC_GOOGLE_MAPS_API_KEY;

export default function Map() {
  const mapRef = React.useRef();
  const [map, setMap] = React.useState(null);
  const [showMap, setShowMap] = React.useState(true);

  async function initMap() {
    const loader = new Loader({
      apiKey: googleMapsApiKey,
      version: 'weekly',
    });

    try {
      const google = await loader.load();
      const location = { lat: 62.056138, lng: 28.220649 };
      const mapInstance = new google.maps.Map(mapRef.current, {
        zoom: 11,
        center: location,
        mapId: "PNP-POWER",  // Ensure the mapId exists in Google Cloud
      });
      setMap(mapInstance);

      // Marker
      new google.maps.Marker({
        position: location,
        map: mapInstance,
        title: 'PNP-POWER',
      });

    } catch (error) {
      console.error('Error initializing map:', error);
      setShowMap(false);  // Hide map on error
    }
  }

  React.useEffect(() => {
    initMap();
  }, []);

  return (
    <div className="mapcontainer mt-6 md:-mt-4 ">
      {showMap && (
        <div ref={mapRef} style={{ height: '600px', width: '100%' }} />
      )}
    </div>
  );
}