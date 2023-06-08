import { Circle, GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React, { useCallback } from "react";

interface OptionsType {
  strokeColor: string;
  strokeOpacity: number;
  strokeWeight: number;
  fillColor: string;
  fillOpacity: number;
  clickable: boolean;
  draggable: boolean;
  editable: boolean;
  visible: boolean;
  radius: number;
  zIndex: number;
}

interface MapType {
  center: google.maps.LatLng;
  setMap: React.Dispatch<React.SetStateAction<null>>;
  options: OptionsType;
}

const RenderMap: React.FC<MapType> = ({ center, setMap, options }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GCP_MAPS_API_KEY as string,
  });

  const onLoad = useCallback(
    (map: any) => {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map);
    },
    [center, setMap]
  );

  const onUnmount = useCallback(
    (map: any) => {
      setMap(null);
    },
    [setMap]
  );

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{
        width: "800px",
        height: "400px",
      }}
      center={center}
      zoom={4}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Circle center={center} options={options} />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(RenderMap);
