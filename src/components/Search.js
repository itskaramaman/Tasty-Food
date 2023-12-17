import { useState } from "react";
import { SEARCH_SUGGESTIONS_API_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const address = useSelector((store) => store.app.address);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `${SEARCH_SUGGESTIONS_API_URL}?lat=${address.geometry?.location?.lat}&lng=${address.geometry?.location?.lng}&str=${searchText}`
    );
    const data = await response.json();
    console.log(data);
  };
  return (
    <div className="w-full p-5 flex justify-center">
      <form onSubmit={(e) => handleFormSubmit(e)} className="shadow-xl p-2">
        <input
          type="text"
          className="mr-2 p-1 w-80 focus:outline-none bg-slate-100 border-slate-600 rounded-md"
          placeholder="Search a restaurant..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="bg-blue-400 hover:bg-blue-500 text-white rounded-md py-1 px-2">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
