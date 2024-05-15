import { useContext, useEffect, useState, } from "react";
import { AuthContext } from "./providers/AuthProviders";

import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import axios from "axios";



const MyBooking = () => {
    const {user}=useContext(AuthContext);
    const [control ,setControl]=useState(false)
    // console.log(user.email);
    const [myBooking, setBooking] = useState([]);
    // console.log(
    //     myBooking
    // );
   
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/myBooking?email=${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            setBooking(data);
            // console.log(data);
          });
      }, [user]);
      const handleDelete=(id)=>{
        console.log(id)
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Booking Cancel it!"
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`${import.meta.env.VITE_API_URL}/delete/${id}`,{
              method:"DELETE",
            })
            .then(res=>res.json())
            .then(data=>{
              console.log(data);
              if(data.deletedCount > 0){
                Swal.fire({
                  title: "Deleted!",
                  text: "Your information has been deleted.",
                  icon: "success"
                });
                setControl(!control);
              }
            });
         
            // console.log("delete consfirmed")
          }
        });
      }
   
  
    return (
        <div className="overflow-x-auto ">
    <table className="table ">
      {/* head */}
      <thead>
        <tr className="text-2xl text-blue-600">
          <th>Name</th>
          <th>Email</th>
          <th>Date</th>
          <th>Price</th>
          <th>Update</th>
          <th>Booking Cancel</th>
        </tr>
      </thead>
      {
        myBooking.map(p=>(

          <tbody key={p._id}>

          <tr className="text-xl">
          
            <td>{p.name}</td>
            <td>{p.email}</td>
           
            <td>{p.date}</td>
            <td>{p.price}$</td>
            <td>
           <Link to={`/updateInformation/${p._id}`}>
           <button 
            
            className="btn bg-blue-600 rounded-full mt-3  text-white text-2xl">
                Update
            </button>
           </Link>
            </td>
            <td>
            <button 
            onClick={()=>handleDelete(p._id)}
            className="btn bg-blue-600 rounded-full mt-3  text-white text-2xl">
                Cancel
            </button>
            </td>
          </tr>
  
        </tbody> 
        ))
      }

    </table>
  </div>
    );
};

export default MyBooking;