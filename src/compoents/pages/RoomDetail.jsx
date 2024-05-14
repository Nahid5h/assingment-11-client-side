import { useLoaderData } from "react-router-dom";

const RoomDetail = () => {
  const room = useLoaderData();
  const {
    RoomDescription,
    SpecialOffers,
    RoomImages,
    Availability,
    RoomSize,

    PricePerNight,
  } = room;
  const confirm=()=>{

    console.log('fdasf',(confirm))
    


  }
  return (
    <div className="">
      <h1 className=" lg:text-4xl font-bold  text-center">
        this is view all the information
      </h1>
      <div className="mt-10 flex flex-col  gap-11 ">
        <div className="flex-1  flex items-center py-10 rounded-2xl justify-center  ">
          <img
            className=" h-[711px] w-full  rounded-2xl  "
            src={RoomImages}
            alt=""
          />
        </div>
        <div className="flex-1 ">
          <h1 className="text-5xl font-semibold"> {SpecialOffers}</h1>
          <p className="my-8 text-2xl"> {RoomDescription} </p>
          <hr />

          <hr />

          <div className="flex flex-col gap-6 my-8 text-2xl  ">
            <button className="btn rounded-full text-[#23BE0A] text-2xl">
              Size: {RoomSize}{" "}
            </button>
            <button className="btn rounded-full text-[#23BE0A] text-2xl">
              Cost:{PricePerNight}${" "}
            </button>
            <button className="btn rounded-full text-[#23BE0A] text-2xl">
              Available{Availability}{" "}
            </button>
          </div>

          {/* The button to open modal */}
          <label htmlFor="my_modal_6" className="btn
           w-full text-white rounded-full bg-[#23BE0A] text-2xl
          ">
            Book Now
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my_modal_6" className="modal-toggle
          
          " />
          <div className="modal" role="dialog">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Price: {PricePerNight}$</h3>
              <p className="py-4 text-2xl">{ RoomDescription}</p>
              <div className="modal-action">
              <button 
              onClick={confirm}
               className="btn  text-white rounded-full bg-[#23BE0A] text-2xl">
              Confirm 
              </button>
                <label htmlFor="my_modal_6" className="btn text-2xl rounded-full">
                  Close!
                </label>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
