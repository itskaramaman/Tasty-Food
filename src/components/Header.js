import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="fixed w-full bg-white z-50 flex justify-between shadow-lg">
      <div className="logo-container">
        <Link to="/">
          <img className="w-20" src={LOGO} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex gap-5 mr-5">
          <li>
            <Link to="/" className="text-2xl">
              🏠
            </Link>
          </li>
          <li>
            <Link to="/cart" className="text-2xl mr-5">
              🛒{" "}
              <span className="absolute text-sm w-5 text-center rounded-full bg-blue-400">
                {cartItems.length}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
