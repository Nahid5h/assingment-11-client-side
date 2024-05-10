import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="bg-cover rounded-xl lg:h-[600px] bg-center " style={{backgroundImage: "url('https://i.ibb.co/Yf6wrBr/pexels-pixabay-258154.jpg')"}}>
      <div className="flex justify-center  h-[600px]  items-center">
        <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">LuxStay Login</h2>
          <form>
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
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">Login</button>
            <button className=" bg-blue-500  text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none mt-5">Google</button>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Login;