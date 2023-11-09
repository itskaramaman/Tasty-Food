import { LOGO } from "../utils/constants";
import { useEffect, useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  useEffect(() => {
    console.log("useEffect Called");
  }, [btnName]);

  console.log("Header rendered");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="btn-login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
