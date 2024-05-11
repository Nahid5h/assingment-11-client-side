const Newsletter = () => {
  return (
    <div
      className="bg-cover rounded-xl lg:h-[500px] mt-7 bg-center "
      style={{
        backgroundImage:
          "url('https://i.ibb.co/rbSDDJG/marten-bjork-n-IKQDCyr-G0-unsplash.jpg')",
      }}
    >
      <div className="flex justify-center  h-[600px]  items-center">
        <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Sign up for our newsletter
          </h2>
          <p className="text-black">
            Stay up to date with the roadmap progress, announcements and
            exclusive discounts feel free to sign up with your email.
          </p>
          <form>
            <div className="mb-4 mt-4 flex">
           
              <input
              
                type="email"
                name="email"
                placeholder="email"
                className="mt-1 p-3 w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                required
              />

              <button
                type="submit"
                className=" bg-blue-500 text-white py- px-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
              >
                Subcribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
