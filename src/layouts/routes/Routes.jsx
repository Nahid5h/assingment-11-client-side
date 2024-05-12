import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Home from "../../compoents/pages/Home/Home";
import Rooms from "../../compoents/pages/Rooms";
import MyBooking from "../../compoents/pages/MyBooking";
import AboutUs from "../../compoents/pages/AboutUs";
import ContactUs from "../../compoents/pages/ContactUs";
import Login from "../../compoents/Login";
import Register from "../../compoents/Register";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch(`${import.meta.env.VITE_API_URL}/featured`)
            },
            {
                path:'/rooms',
                element:<Rooms></Rooms>
            },
            {
                path:'/mybooking',
                element:<MyBooking></MyBooking>
            },
            {
                path:'/aboutus',
                element:<AboutUs></AboutUs>
            },
            {
                path:'/contactus',
                element:<ContactUs></ContactUs>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }

        ]

    }
])
export default router