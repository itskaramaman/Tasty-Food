import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openAddressSidebar } from "../utils/appSlice";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const address = useSelector((store) => store.app.address);
  const dispatch = useDispatch();

  return (
    <div className="fixed w-full bg-white z-50 flex justify-between shadow-lg">
      <div className="logo-container flex items-center gap-10">
        <Link to="/">
          <img className="w-20" src={LOGO} />
        </Link>
        {address && (
          <p
            className="flex items-center cursor-pointer"
            onClick={() => dispatch(openAddressSidebar())}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-map-pin"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="text-sm text-gray-600">
              {address?.formatted_address}
            </span>
          </p>
        )}
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
              <span className="absolute text-sm w-5 text-center rounded-full bg-blue-400 text-white font-medium">
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
