
import Location from "../../Location";

import Banner from "./Banner";
import FeaturedRooms from "./FeaturedRooms";
import Newsletter from "./Newsletter";


const Home = () => {
 
    return (
        <div>
          <Banner></Banner>
          <Location></Location>
          <Newsletter></Newsletter>
          <FeaturedRooms ></FeaturedRooms>
         
        </div>
    );
};

export default Home;