import * as React from "react";
import { useState } from "react";
import { render } from "react-dom";
import Map, {
  Marker,
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
  ScaleControl,
  Popup,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import * as turf from "@turf/turf";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoia3IyODQyMjkiLCJhIjoiY2xmbjRkdG1uMDNwczN4bGRuamZhcGpiNiJ9.yaBdwD5KE87RN8enRQt72g"; // Set your mapbox token here

  export const Maps = () => {
  const [userLocation, setUserLocation] = useState(null);

  const onGeolocate = (position) => {
    setUserLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  };

  const markers = [
    { longitude: -63.57892, latitude: 44.6434516 },
    { longitude: -63.5766997, latitude: 44.6494304 },
    { longitude: -63.604171, latitude: 44.6594156 },
    { longitude: -63.62237119567033, latitude: 44.6480109290126 },
    { longitude: -63.6564924, latitude: 44.6613614 },
    { longitude: -63.57239, latitude: 44.64533 },
    { longitude: -63.574431, latitude: 44.637594 },
    { longitude: -63.5837315, latitude: 44.6378638 },
    { longitude: -63.591039, latitude: 44.637421 },
    { longitude: -63.586743, latitude: 44.641108 },
    { longitude: -63.60189, latitude: 44.644301 },
    { longitude: -63.600959, latitude: 44.659217 },
    { longitude: -63.619607, latitude: 44.64761 },
    { longitude: -63.6209577, latitude: 44.6626439 },
    { longitude: -63.602621, latitude: 44.662628 },
    { longitude: -63.6249627, latitude: 44.6398452 },
    { longitude: -63.631785, latitude: 44.659581 },
    { longitude: -63.6165942, latitude: 44.6130235 },
  ];

  return (
    <Map
      initialViewState={{
        latitude: 44.6434516,
        longitude: -63.57892,
        zoom: 14,
      }}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      {markers.map((marker) => (
        <Marker
          key={`${marker.longitude}-${marker.latitude}`}
          longitude={marker.longitude}
          latitude={marker.latitude}
          color="red"
        >
          <Popup
            offsetTop={-15}
            closeButton={false}
            closeOnClick={false}
            anchor="bottom"
            longitude={marker.longitude}
            latitude={marker.latitude}
          >
            {userLocation &&
              `${turf.distance(
                turf.point([userLocation.longitude, userLocation.latitude]),
                turf.point([marker.longitude, marker.latitude]),
                { units: "kilometers" }
                ).toFixed(2)} km`}
                </Popup>
                </Marker>
                ))}
                <NavigationControl />
                <GeolocateControl
                     trackUserLocation={true}
                     showUserHeading={true}
                     onGeolocate={onGeolocate}
                   />
                <FullscreenControl />
                <ScaleControl />
                </Map>
                );
                }
                
        
render(<Maps />, document.body.appendChild(document.createElement("div")));