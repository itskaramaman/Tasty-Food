import { useDispatch } from "react-redux";
import { closeAddressSidebar } from "../utils/appSlice";

const AddressSidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="h-screen fixed w-[25%] bg-white z-50 top-20 overflow-y-auto overflow-x-hidden">
      <button className="p-3" onClick={() => dispatch(closeAddressSidebar())}>
        ✖️
      </button>
      <br />
      <input
        className="border p-1 w-11/12 mx-3 focus:outline-none text-gray-700 focus:shadow-lg"
        type="text"
        placeholder="Search for area, street name, city..."
      />
    </div>
  );
};

export default AddressSidebar;
