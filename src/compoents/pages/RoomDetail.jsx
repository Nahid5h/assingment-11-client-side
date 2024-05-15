import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useContext, useState } from "react";
import { AuthContext } from "./providers/AuthProviders";
import Swal from "sweetalert2";

const RoomDetail = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const room = useLoaderData();
  console.log(room);
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate);

  const {
    RoomDescription,
    SpecialOffers,
    RoomImages,
    
    RoomSize,

    PricePerNight,
  } = room;
  const handleBook = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const name = form.get("name");
    const date = startDate;
    const price = PricePerNight;
    const describtion = RoomDescription;

    console.log(email, name, date, price, describtion);
    const bookData = { email, name, date, price, describtion };
    const Availability = false;

    fetch(`${import.meta.env.VITE_API_URL}/update/${room._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ Availability }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Update Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });

    fetch(`${import.meta.env.VITE_API_URL}/addBook`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "User Added Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

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
            
              {room.Availability? (
              <button className="btn rounded-full text-[#23BE0A] text-2xl">
         available
              </button>):(
              <button className="btn rounded-full text-[#23BE0A] text-2xl">
          unavailable
              </button>)}
              
             
          </div>

          {/* The button to open modal */}

          <label
            htmlFor="my_modal_6"
            className="btn
  w-full text-white rounded-full bg-[#23BE0A] text-2xl
 "
          >
            Book Now
            
          </label>

          {/* Put this part before </body> tag */}
          <input
            type="checkbox"
            id="my_modal_6"
            className="modal-toggle
          
          "
          />
          <div className="modal " role="dialog">
            <div className="modal-box bg-gray-400 h-[500px] flex flex-col ">
              <div>
                <form onSubmit={handleBook}>
                  <div className="mb-4">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      defaultValue={user?.email}
                      placeholder="email"
                      className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your name{" "}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      defaultValue={user?.displayName}
                      className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                      required
                    />
                  </div>
                  <p>
                    {" "}
                    Date:
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </p>

                  <h3 className="font-bold mt-4 text-lg">
                    Price: {PricePerNight}$
                  </h3>
                  <p className="py-4 text-2xl">{RoomDescription}</p>

                  <div className="modal-action">
                    <button className="btn  text-white rounded-full bg-[#23BE0A] text-2xl">
                      Confirm
                    </button>
                    <label
                      htmlFor="my_modal_6"
                      className="btn text-2xl rounded-full"
                    >
                      Close!
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
