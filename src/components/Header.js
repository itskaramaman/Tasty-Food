import { LOGO } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const isOnline = useOnlineStatus();
  const data = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-gradient-to-b from-orange-100 to-orange-400 shadow-lg">
      <div className="logo-container">
        <img className="w-36" src={LOGO} />
      </div>
      <div className="flex items-center">
        <ul className="flex gap-5 mr-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart">🛒 ({cartItems.length} items)</Link>
          </li>
          <li>Online Status:{isOnline ? "🟢" : "🔴"}</li>
          <button
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="font-semibold">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
