
import { Helmet } from "react-helmet";
import Location from "../../Location";

import Banner from "./Banner";
import FeaturedRooms from "./FeaturedRooms";
import Newsletter from "./Newsletter";


const Home = () => {
 
    return (
        <div>
             <Helmet>
                
                <title>Home</title>
                
            </Helmet>
          <Banner></Banner>
          <Location></Location>
          <Newsletter></Newsletter>
          <FeaturedRooms ></FeaturedRooms>
         
        </div>
    );
};

export default Home;