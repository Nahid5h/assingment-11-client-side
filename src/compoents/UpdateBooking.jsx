import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const UpdateBooking = () => {
    const { id }= useParams();
    const [startDate, setStartDate] = useState(new Date());
    const [information,setInformation]=useState({})

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/viewDetail/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setInformation(data)
            console.log(data)
        })
            },[id])
            const handleUpdate=event =>{
                event.preventDefault();
                const form = event.target;
                const name = form.name.value;
                const email=form.email.value;
                const date = form.date.value
                
              
        
                const updateSpot={name,email,date
                   
                }
                console.log(updateSpot);
            //   send data to the server 
            fetch(`${import.meta.env.VITE_API_URL}/update/${id}`,{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
               body:JSON.stringify(updateSpot)
            })
            .then(res =>res.json())
            .then(data=>{
                console.log(data)
                if(data.modifiedCount>0){
                  Swal.fire({
                    title: 'Success',
                    text: 'Update Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
        
                }
            })
            }
    return (
        <div className="p-5 shadow-xl my-12 rounded-xl bg-base-200">
        <h1 className="text-center text-xl md:text-3xl font-bold text-[#f39c12]">
          Add Your Spots here..
        </h1>
        <form onSubmit={handleUpdate} >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                defaultValue={information.name}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                defaultValue={information.email}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Date</span>
              </label>
          
            
                <DatePicker
                 className="input input-bordered"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                name="date"
                defaultValue={information.date}
                required
                />
            
               
               
             
            </div>
   
          </div>

          <button className="btn w-full mt-3 bg-[#6812f3] text-white hover:text-orange-500">
            Update Booking
          </button>
        </form>
      </div>
    );
};

export default UpdateBooking;