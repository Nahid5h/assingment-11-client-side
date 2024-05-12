import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Rooms = () => {
    const [featured, setFeatued] = useState([]);
    useEffect(() => {
      const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/featured`);
        setFeatued(data);
      };
      getData();
    }, []);
  
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-11 gap-6 mt-8">
        {featured.filter(a=>a.Availability).map((f) => (
          <div key={f._id}>
            <div className=" mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to={`/roomdetail/${f._id}`}>
            <img className="h-60 w-full" src={f.RoomImages} alt="" />
            </Link>
              <div className="p-5 flex justify-between">
                <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
                 Price :{f.PricePerNight}$
                </p>
                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                TotalReview : {f.TotalReviews}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default Rooms;