import React, { useEffect } from 'react';
import L from 'leaflet';
import { LocationOn, Flag } from '@mui/icons-material';  // MUI icons for Start and End points
import { renderToStaticMarkup } from 'react-dom/server'; // Used to convert React component to HTML
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  // Dummy data for locations (change lat/lng accordingly)
  const locations = [
    { lat: 25.3176, lng: 82.9739 }, // Varanasi, India (Start point)
    { lat: 25.3276, lng: 82.9759 }, // Another point
    { lat: 25.3376, lng: 82.9779 }, // Another point
  ];

  useEffect(() => {
    // Create the map if not already initialized
    const mapContainer = document.getElementById('map');
    if (!mapContainer._leaflet_id) { // Check if map is already initialized
      const map = L.map('map').setView([locations[0].lat, locations[0].lng], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(map);

      // Custom MUI icons for Start and End points
      const startIcon = new L.Icon({
        iconUrl: `data:image/svg+xml,${encodeURIComponent(renderToStaticMarkup(<LocationOn style={{ fontSize: 40, color: 'green' }} />))}`,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
      });

      const endIcon = new L.Icon({
        iconUrl: `data:image/svg+xml,${encodeURIComponent(renderToStaticMarkup(<Flag style={{ fontSize: 40, color: 'red' }} />))}`,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
      });

      // Marking Start and End points with custom icons
      L.marker([locations[0].lat, locations[0].lng], { icon: startIcon }).addTo(map).bindPopup('Start: Varanasi');
      L.marker([locations[locations.length - 1].lat, locations[locations.length - 1].lng], { icon: endIcon }).addTo(map).bindPopup('End');

      // Loop through the locations and add them to the map
      for (let i = 1; i < locations.length - 1; i++) {
        L.marker([locations[i].lat, locations[i].lng]).addTo(map).bindPopup(`Point ${i + 1}`);
      }

      // Add route (polyline)
      const route = locations.map(loc => [loc.lat, loc.lng]);
      L.polyline(route, { color: 'blue', weight: 4 }).addTo(map);

      // Cleanup function to remove the map when the component is unmounted
      return () => {
        map.remove();
      };
    }
  }, [locations]);

  return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
};

export default MapComponent;
