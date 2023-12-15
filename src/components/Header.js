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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-home"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-info"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
            </Link>
          </li>
          <li>
            <Link to="/cart" className="text-2xl mr-5 flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-shopping-cart"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>{" "}
              <span className="text-xs w-4 text-center rounded-full bg-blue-400 text-white font-medium">
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
