import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../compoents/pages/providers/AuthProviders";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSingOut = () => {
    logOut().then().catch();
  };
  const nabLink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "hover:bg-blue-600 bg-blue-500 text-white  font-semibold "
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/rooms"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "hover:bg-blue-600 bg-blue-500 text-white  font-semibold "
              : ""
          }
        >
          Rooms
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/mybooking"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "hover:bg-blue-600 bg-blue-500 text-white  font-semibold "
              : ""
          }
        >
          My Booking
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutUs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "hover:bg-blue-600 bg-blue-500 text-white  font-semibold "
              : ""
          }
        >
          About Us
        </NavLink>
      </li>
   
    </>
  );
  return (
    <div className="navbar ">
      <div className="navbar-start   ">
        <div className="dropdown w-9 lg:w-16 lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {nabLink}
          </ul>
        </div >
        <div className="  flex  ">
        <a className="btn btn-ghost  lg:text-3xl   text-blue-500  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 lg:w-11 h-8"
          >
            <path d="M21 12v-2c0-4.418-3.582-8-8-8s-8 3.582-8 8v2"></path>
            <path d="M19.5 14c-.183 0-.367.039-.54.117l-3.74 1.87L9 10.632V6.5c0-2.206 1.794-4 4-4s4 1.794 4 4v4.632l-6.26 3.134-3.74-1.87c-.173-.078-.357-.117-.54-.117S4 14.417 4 14.775V18c0 .551.448 1 1 1h14c.552 0 1-.449 1-1v-3.225c0-.358-.183-.725-.5-.975l-3.742-1.87 3.74-1.87c.317-.15.5-.617.5-.975s-.183-.725-.5-.975l-3.742-1.87 3.74-1.87c.317-.15.5-.617.5-.975C20 4.448 19.552 4 19 4s-1 .448-1 1c0 .358.183.725.5.975l3.74 1.87-3.742 1.87c-.317.15-.5.617-.5.975 0 .358.183.725.5.975l3.74 1.87c.173.078.357.117.54.117.553 0 1-.449 1-1v-3.225c0-.358-.183-.725-.5-.975l-3.742-1.87 3.74-1.87c.317-.15.5-.617.5-.975 0-.552-.447-1-1-1z"></path>
          </svg>
          <p className="">LuxStay</p>
        </a>
        
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nabLink}</ul>
      </div>
      <div className="navbar-end gap-3">
      {user ? (
          <div className="flex items-center ">
            <div
              className="tooltip"
              data-tip={user?.displayName || "user name not found"}
            >
              <div className="avatar">
                <div className=" w-10 rounded-full">
                  <img
                    src={
                      user?.photoURL ||
                      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    }
                  />
                </div>
              </div>
            </div>
            <a
              onClick={handleSingOut}
              className="btn hover:bg-blue-600 bg-blue-500 text-white  rounded-full"
            >
              Logout
            </a>
          </div>
        ) : (
          <div className="flex">
            <Link to="/login">
              <a className="btn hover:bg-blue-600 bg-blue-500 text-white  rounded-full">
                Login
              </a>
            </Link>
            <Link to="/register">
              <a className="btn hover:bg-blue-600 bg-blue-500 text-white  rounded-full">
                Register
              </a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navber;
