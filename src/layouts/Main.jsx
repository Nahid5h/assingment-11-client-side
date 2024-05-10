import { Outlet } from "react-router-dom";
import Navber from "./routes/Navber";
import Footer from "./routes/Footer";


const Main = () => {
    return (
        <div className="container mx-auto mt-4">
       
           <Navber></Navber>
         
            <Outlet></Outlet>
            <Footer></Footer>
        
      </div>

    );
};

export default Main;