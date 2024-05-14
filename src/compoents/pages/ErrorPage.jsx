import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
    <p className="text-lg md:text-xl text-gray-600 mb-6">Oops! The page you are looking for could not be found.</p>
    <img src="https://i.ibb.co/mNDVFJw/pexels-olly-3770000.jpg" className="mx-auto mb-6 h-[700px] max-w-full rounded-2xl" alt="" />
    {/* <img src="exciting_image.jpg" alt="Exciting Image" className="mx-auto mb-6 max-w-full"> */}
    {/* <a href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300 inline-block">Back to Home</a> */}
    <Link to='/'><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300 inline-block" >Go back</button></Link>

</div>
       
         
    
           
    );
};

export default ErrorPage;