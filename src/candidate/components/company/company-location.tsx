import React from "react";
import WrapInfo from "./wrap-info";
import GoogleMapReact from "google-map-react";

interface AnyReactComponentProps {
  lat: number;
  lng: number;
  text: string;
}

const AnyReactComponent: React.FC<AnyReactComponentProps> = ({ text }) => (
  <div>{text}</div>
);

const CompanyLocation: React.FC = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <WrapInfo title="Location">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "YOUR_GOOGLE_MAPS_API_KEY" }} 
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={10.99835602}
          lng={77.01502627}
          text="Company Marker"
        />
      </GoogleMapReact>
    </WrapInfo>
  );
};

export default CompanyLocation;
