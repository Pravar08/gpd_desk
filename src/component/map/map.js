import { useEffect, useState } from "react";

const MapComponent = () => {
    const [mapLoaded, setMapLoaded] = useState(false);

    useEffect(() => {
        const checkMapLoaded = () => {
            if (window.mappls && window.mappls.Map) {
                setMapLoaded(true);
            } else {
                setTimeout(checkMapLoaded, 500);
            }
        };
        checkMapLoaded();
    }, []);

    useEffect(() => {
        if (!mapLoaded) return;

        // Initialize the Map with given options
        const map = new window.mappls.Map("map", {
            zoom: 5,
            center: { lat: 28.544, lng: 77.5454 }, // Default Center
            backgroundColor: "#999",
            // disableDoubleClickZoom: false,
            // zoomControl: false,
            zoomControlOptions: {
                position: window.mappls.ControlPosition.TOP_CENTER,
            },
            // draggable: false,
            // scrollwheel: false,
            minZoom: 5,
            maxZoom: 18,
            // clickableIcons: false,
            clickableIcons_callback: callMethodName,
            heading: 100,
            // tilt: 45,
            indoor: true,
            indoor_callback: showIndoor,
            indoor_position: "bottom-left",
        });

        // Function to handle icon click callback
        function callMethodName(event) {
            console.log("Icon clicked:", event);
        }

        // Function to handle indoor callback
        function showIndoor(event) {
            console.log("Indoor view triggered:", event);
        }

        // Add a Marker
        new window.mappls.Marker({
            map: map,
            position: { lat: 28.544, lng: 77.5454 },
        });

    }, [mapLoaded]);

    return <div id="map" style={{ width: "100%", height: "500px" }}></div>;
};

export default MapComponent;
