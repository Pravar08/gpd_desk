import React, { useEffect, useState } from "react";

const MultipleMarkersMap = () => {
  const [map, setMap] = useState(null);

  const markersData = [
    { name: "Noida", coordinates: [28.544, 77.5454] },
    { name: "Faridabad", coordinates: [28.27189158, 77.2158203125] },
    { name: "Delhi", coordinates: [28.549511, 77.267825] },
    { name: "Gurgaon", coordinates: [28.4595, 77.0266] },
    { name: "Ghaziabad", coordinates: [28.6692, 77.4538] },
    { name: "Meerut", coordinates: [28.9845, 77.7064] },
    { name: "Sonipat", coordinates: [28.9288, 77.0919] },
    { name: "Rohtak", coordinates: [28.8955, 76.6066] },
    { name: "Panipat", coordinates: [29.3909, 76.9635] },
    { name: "Agra", coordinates: [27.1767, 78.0081] },
    { name: "Aligarh", coordinates: [27.8974, 78.088] },
    { name: "Kanpur", coordinates: [26.4499, 80.3319] },
    { name: "Lucknow", coordinates: [26.8467, 80.9462] },
    { name: "Varanasi", coordinates: [25.3176, 82.9739] },
    { name: "Jaipur", coordinates: [26.9124, 75.7873] },
  ];

  useEffect(() => {
    if (window.mappls && window.mappls.Map) {
      console.log("✅ Mappls SDK Loaded");
      initMap();
    } else {
      console.error("❌ Mappls SDK not loaded. Ensure it's included in index.html.");
    }
  }, []);

  const initMap = () => {
    const mapInstance = new window.mappls.Map("map", {
      center: [28.61, 77.23],
      zoom: 10,
      zoomControl: true,
      location: true,
    });
    
    setMap(mapInstance);

    mapInstance.addListener("load", function () {
      addMarkers(mapInstance);
    });
  };

  const addMarkers = (mapInstance) => {
    const geoData = {
      type: "FeatureCollection",
      features: markersData.map((marker) => ({
        type: "Feature",
        properties: { htmlPopup: marker.name },
        geometry: { type: "Point", coordinates: marker.coordinates },
      })),
    };

    new window.mappls.Marker({
      map: mapInstance,
      position: geoData,
      icon_url: "https://apis.mapmyindia.com/map_v3/1.png",
      fitbounds: true,
      clusters: true,
      clustersIcon: "https://mappls.com/images/2.png",
      fitboundOptions: { padding: 120, duration: 1000 },
      popupOptions: { offset: { bottom: [0, -20] } },
    });
  };

  return <div id="map" style={{ width: "100%", height: "500px" }}></div>;
};

export default MultipleMarkersMap;
