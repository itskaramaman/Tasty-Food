import { useDispatch } from "react-redux";
import { closeAddressSidebar } from "../utils/appSlice";
import { useState } from "react";
import useLocationResults from "../utils/useLocationResults";
import LocationResultItem from "./LocationResultItem";

const AddressSidebar = () => {
  const [input, setInput] = useState("");
  const results = useLocationResults(input);
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
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {results && (
        <div className="border p-1 w-11/12 mx-3">
          {results.map((result) => (
            <LocationResultItem key={result.place_id} result={result} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AddressSidebar;
