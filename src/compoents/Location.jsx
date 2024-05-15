
import GoogleMapReact from 'google-map-react';
import { gooleAPIkry } from '../GooleAPIKey';
import { FaMapMarkerAlt } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({ delay: 500, // values from 0 to 3000, with step 50ms
duration: 400, // values from 0 to 3000, with step 50ms
easing: 'ease',});
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

            <div
            data-aos="fade-right"
             style={{ height: '500px', width: ''  }}>
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