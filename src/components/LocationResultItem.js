import { useDispatch } from "react-redux";
import { LOCATION_LONG_LAT_URL } from "../utils/constants";
import { closeAddressSidebar, setAddress } from "../utils/appSlice";
import { useNavigate } from "react-router-dom";

const LocationResultItem = ({ result }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLocationClick = async () => {
    const response = await fetch(LOCATION_LONG_LAT_URL + result.place_id);
    const data = await response.json();
    const { formatted_address, place_id, geometry } = data.data[0];
    dispatch(setAddress({ formatted_address, place_id, geometry }));
    dispatch(closeAddressSidebar());
    navigate("/");
  };

  return (
    <div
      onClick={handleLocationClick}
      className="flex gap-1 items-start font-medium text-gray-700 border-b p-1 cursor-pointer hover:bg-slate-100"
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
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
      </div>
      <div>
        <p>{result.description.split(", ")[0]}</p>
        <p className="text-sm font-thin line-clamp-1">
          {result.description.split(", ").slice(1).join(", ")}
        </p>
      </div>
    </div>
  );
};

export default LocationResultItem;
