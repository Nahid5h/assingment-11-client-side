
import GoogleMapReact from 'google-map-react';
import { gooleAPIkry } from '../GooleAPIKey';
import { FaMapMarkerAlt } from "react-icons/fa";
const AnyReactComponent = ({text}) => <div style={{color:'red'}}><FaMapMarkerAlt></FaMapMarkerAlt></div>;
const Location = () => {
    const defaultProps = {
        center: {
          lat: 21.422964,
          lng: 91.978813
        },
        zoom: 10
      };
    return (
        <>
            <div style={{ height: '500px', width: ''  }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: gooleAPIkry }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
        </>
    );
};

export default Location;