import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProviders";


const PrivetRout = ({children}) => {
    
    const {user,loading}=useContext(AuthContext);
    const location= useLocation();
    console.log(location.pathname)
    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>
    }

    if(user){
        return children;
    }
    return<Navigate state={location.pathname} replace to="/login"></Navigate>;
};

export default PrivetRout;