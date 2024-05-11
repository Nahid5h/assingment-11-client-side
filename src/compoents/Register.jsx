import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./pages/providers/AuthProviders";


const Register = () => {
    const {creatUser,updateUserProfile} = useContext(AuthContext);
    const location =useLocation();
    console.log('successfull',location)
    const navigate =useNavigate();
  
  
    const handleRegister=e=>{
      e.preventDefault();
      console.log(e.currentTarget);
      const form= new FormData(e.currentTarget);
      const name=form.get('name');
      const photo=form.get('photo');
      const email=form.get('email');
      const password=form.get('password');
      console.log(name,photo,email,password);
  
      creatUser(email,password)
      .then((result)=>{
        updateUserProfile(name,photo).then(()=>{
          
        })
        console.log(result.user)
        navigate(location?.state?location.state:'/')
      })
      .catch(error=>{
        console.error(error)
      })
  
  
     
    }
    return (
        <div className="bg-cover rounded-xl lg:h-[600px] bg-center " style={{backgroundImage: "url('https://i.ibb.co/J5GpZ0y/pexels-donaldtong94-189296.jpg')"}}>
        <div className="flex justify-center  h-[600px]  items-center">
          <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-md w-full max-w-sm">
            <h2 className="text-2xl font-bold mb-6 text-center">LuxStay Register</h2>
            <form onSubmit={handleRegister}>
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Name</label>
                <input  
                type="text"
                name="name"
                placeholder="name"
                className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" required />
              </div>
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Photo URL</label>
                <input  
                type="text"
                name="photo"
                placeholder="URL"
                className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" required />
              </div>
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Email</label>
                <input  
                type="email"
                name="email"
                placeholder="email"
                className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" required />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" name="password" className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" required />
              </div>
              <p className="text-gray-700 mb-2">  Do not have an account?<Link to={"/login"} className="btn btn-link font-bold text-blue-600">
          Login
        </Link >
          </p>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">Register</button>
              
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;