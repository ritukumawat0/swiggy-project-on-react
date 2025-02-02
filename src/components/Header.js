import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineState from "../utils/useOnlineState";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Header = () => {
    const online = useOnlineState();
  const [btnName, setBtnName] = useState("Login"); 
  const cartItems = useSelector((store)=>store.cart.items);
  
  // context consume
  const { loggedInUser }  = useContext(UserContext)

  const handleClick = () => {
    btnName === "Login" ? setBtnName(loggedInUser) : setBtnName("Login");
  };

  return (
    <div className="header flex justify-between items-center shadow shadow-zinc-300 mb-8 p-4">
      <Link to="/">
        <img className="logo w-20" src={LOGO_URL} />
      </Link>
      <div className="nav-items-container">
        <ul className="nav-items flex">
            <li className="mr-8 text-[1.1rem]">
            {online?<p>Online 🟢</p>:<p>Offline 🔴</p>}
            </li>
          <li className="mr-8 text-[1.1rem]">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-8 text-[1.1rem]">
            <Link to="/about">About</Link>
          </li>
          <li className="mr-8 text-[1.1rem]">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="mr-8 text-[1.1rem]">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
        </ul>
      </div>
      <div className="user-link flex text-[1.1rem]">
        
        <Link to="#" onClick={handleClick} className="mr-4">
          {btnName}
        </Link>
        <Link to="#" className="mr-4">Register</Link>
      </div>
    </div>
  );
};

export default Header;
