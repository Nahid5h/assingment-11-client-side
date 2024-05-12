

const AboutUs = () => {
    return (
        <div className="">
        <h1 className="text-3xl font-bold text-center text-blue-600 my-8">About Us</h1>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-7">
        <div className="flex-1">
          <img className="rounded-2xl w-full"
            src="https://i.ibb.co/R41VWRQ/manuel-moreno-DGa0-LQ0y-DPc-unsplash.jpg"
            alt=""
          />
        </div>
        <div className="flex-1">
          <p className="text-2xl">
          LuxStay is a premier hotel offering unparalleled luxury and comfort for discerning travelers. With a focus on exquisite design, top-notch amenities, and impeccable service, LuxStay redefines the hospitality experience. From elegant accommodations to gourmet dining and exclusive amenities, every aspect of LuxStay reflects a commitment to excellence and sophistication.
          </p>
        </div>
      </div>
    </div>
    );
};

export default AboutUs;