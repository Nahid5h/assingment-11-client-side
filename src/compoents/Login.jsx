import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./pages/providers/AuthProviders";
import Swal from "sweetalert2";

const Login = () => {
    const {singIN,  googleLogIn }=useContext(AuthContext);
  
 const location =useLocation();
 console.log('location ion the login page',location);
 const navigate = useNavigate();

  const handleLogin=e=>{
    e.preventDefault();
    console.log(e.currentTarget)
    const  form = new FormData(e.currentTarget);
    const email =form.get('email');
    const password=form.get('password');
    console.log(email,password);
    singIN(email,password)
    .then(result =>{

      console.log(result.user);
      if(result.user){
        Swal.fire({
          title: 'Success',
          text: 'login Successfully',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        navigate(location?.state ? location.state:'/')
      }
 
    }
  )
    .catch(error =>{
    console.error(error)

    })

  }
    return (
        <div className="bg-cover rounded-xl lg:h-[600px] bg-center mt-6 " style={{backgroundImage: "url('https://i.ibb.co/jVYrWW8/pexels-gustavorodrigues-1755288.jpg')"}}>
      <div className="flex justify-center  h-[600px]  items-center">
        <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">LuxStay Login</h2>
          <form onSubmit={handleLogin}>
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
            <p className="text-gray-700">  Do not have an account?
        <Link to={"/register"} className="btn btn-link font-bold text-blue-600">
          Register
        </Link ></p>
            <button type="submit" className="w-full mb-5 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">Login</button>
          <div>
          
            {/* // onClick={handlegoole} */}
            <button   onClick={()=>  googleLogIn()
              .then(result =>{

                console.log(result.user);
                if(result.user){
                  Swal.fire({
                    title: 'Success',
                    text: 'login Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
                  navigate(location?.state ? location.state:'/')
                }
           
              }
            )
              .catch(error =>{
              console.error(error)
          
              })
            }  type="button" className="flex  items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
            <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                </path>
            </svg>

            <span className="hidden mx-2 sm:inline">Sign in with Google</span>
        </button>
          
          </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Login;