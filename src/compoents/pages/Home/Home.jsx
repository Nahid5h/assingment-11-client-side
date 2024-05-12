import { useLoaderData } from "react-router-dom";
import Location from "../../Location";

import Banner from "./Banner";
import FeaturedRooms from "./FeaturedRooms";
import Newsletter from "./Newsletter";


const Home = () => {
  const featureds =useLoaderData();
  console.log(featureds)
    return (
        <div>
          <Banner></Banner>
          <Location></Location>
          <Newsletter></Newsletter>
          <FeaturedRooms featureds={featureds}></FeaturedRooms>
         
        </div>
    );
};

export default Home;