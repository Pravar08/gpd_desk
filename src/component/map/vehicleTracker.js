import React, { useEffect, useState } from "react";

const VehicleTracker = () => {
  const [map, setMap] = useState(null);
  const [polyline, setPolyline] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [vehicleMarker, setVehicleMarker] = useState(null);
  const [kmlLayer, setKmlLayer] = useState(null);

  // Route for animated movement
  const routeCoordinates = [
    { lat: 28.55108, lng: 77.26913 },
    { lat: 28.55106, lng: 77.26906 },
    { lat: 28.55105, lng: 77.26897 },
    { lat: 28.55101, lng: 77.26872 },
    { lat: 28.55099, lng: 77.26849 },
    { lat: 28.55097, lng: 77.26831 },
    { lat: 28.55093, lng: 77.26794 },
    { lat: 28.55089, lng: 77.2676 },
    { lat: 28.55123, lng: 77.26756 },
    { lat: 28.55145, lng: 77.26758 },
    { lat: 28.55168, lng: 77.26758 },
    { lat: 28.55175, lng: 77.26759 },
    { lat: 28.55177, lng: 77.26755 },
    { lat: 28.55179, lng: 77.26753 } // Last position
  ];

  const lastPosition = routeCoordinates[routeCoordinates.length - 1];

  useEffect(() => {
    if (window.mappls && window.mappls.Map) {
      console.log("✅ Mappls SDK Loaded");
      initializeMap();
    } else {
      console.error("❌ Mappls SDK not loaded. Ensure it's included in index.html.");
    }
  }, []);

  const initializeMap = () => {
    const mapInstance = new window.mappls.Map("map", {
      center: lastPosition, // Show last position as default
      zoom: 15,
      draggable: true
    });

    setMap(mapInstance);
    console.log("✅ Map initialized successfully");

    // Show vehicle at last position before movement starts
    const markerInstance = new window.mappls.Marker({
      map: mapInstance,
      position: lastPosition,
      icon: "http://www.mapmyindia.com/api/advanced-maps/doc/sample/map_sdk/car.png",
    });

    setVehicleMarker(markerInstance); // Store marker instance
  };

  const startAnimation = () => {
    // if (!map || isAnimating) return;
    setIsAnimating(true);

    // Remove previous polyline from the map
    if (polyline) {
      polyline.setMap(null);
      setPolyline(null);
    }

    // Remove previous vehicle marker if it exists
    if (vehicleMarker && vehicleMarker.remove) {
      vehicleMarker.remove();
      setVehicleMarker(null);
    }

    // Draw polyline with moving vehicle animation
    const polylineInstance = new window.mappls.Polyline({
      map: map,
      paths: routeCoordinates,
      strokeColor: "blue",
      strokeOpacity: 1.0,
      strokeWeight: 5,
      fitbounds: true,
      animate: {
        speed: 20,
        icon_width: 20,
        icon_height: 50,
        icon_url: "http://www.mapmyindia.com/api/advanced-maps/doc/sample/map_sdk/car.png",
        repeat: false, // Car stops at the final location
      },
    });

    setPolyline(polylineInstance);
    console.log("🚘 Vehicle animation started");

    // Set a timeout to place the final marker at last position after animation completes
    // setTimeout(() => {
    //   setIsAnimating(false);

    //   // Remove previous marker if still present
    //   if (vehicleMarker && vehicleMarker.remove) {
    //     vehicleMarker.remove();
    //     setVehicleMarker(null);
    //   }

    //   // Add final marker at the last position
    //   const finalMarker = new window.mappls.Marker({
    //     map: map,
    //     position: lastPosition,
    //     icon: "http://www.mapmyindia.com/api/advanced-maps/doc/sample/map_sdk/car.png",
    //   });

    //   setVehicleMarker(finalMarker);
    //   console.log("🏁 Vehicle stopped at last position");
    // }, routeCoordinates.length * 500000); // Adjust based on animation speed
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <div id="map" style={{ width: "100%", height: "500px" }}></div>
      <button
        onClick={startAnimation}
        style={{
          position: "absolute",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "10px 20px",
          backgroundColor: "blue",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Start
      </button>
    </div>
  );
};

export default VehicleTracker;
