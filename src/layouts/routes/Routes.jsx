import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Home from "../../compoents/pages/Home/Home";
import Rooms from "../../compoents/pages/Rooms";
import MyBooking from "../../compoents/pages/MyBooking";
import AboutUs from "../../compoents/pages/AboutUs";

import Login from "../../compoents/Login";
import Register from "../../compoents/Register";
import RoomDetail from "../../compoents/pages/RoomDetail";
import ErrorPage from "../../compoents/pages/ErrorPage";
import UpdateBooking from "../../compoents/UpdateBooking";
import PrivetRout from "../../compoents/pages/providers/PrivetRout";




const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                
            },
            {
                path:'/rooms',
                element:<Rooms></Rooms>
            },
            {
                path:'/roomdetail/:id',
                element:<PrivetRout>
                    <RoomDetail></RoomDetail>
                </PrivetRout>,
                loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/room/${params.id}`)
                
            },
            {
                path:'/mybooking',
                element:<PrivetRout>
                     <MyBooking></MyBooking>
                </PrivetRout>
                    
              
            },
            {
                path:'/aboutus',
                element:<AboutUs></AboutUs>
            },
           
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/updateInformation/:id',
                element:<UpdateBooking></UpdateBooking>
            }

        ]

    }
])
export default router