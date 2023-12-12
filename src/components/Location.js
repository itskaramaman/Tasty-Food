import { useEffect, useState } from "react";
import locationBG from "../images/location-bg.jpg";
import { LOCATION_SEARCH_URL } from "../utils/constants";
import LocationResultItem from "./LocationResultItem";
import useLocationResults from "../utils/useLocationResults";

const Location = () => {
  const messages = ["Hungry?", "Friday Night🍻", "No mood to cook🍕"];
  const [title, setTitle] = useState("Hungary?");
  const [input, setInput] = useState("");
  const results = useLocationResults(input);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTitle(messages[index]);
      index = (index + 1) % messages.length;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // const fetchLocations = async () => {
  //   const response = await fetch(LOCATION_SEARCH_URL + input);
  //   const data = await response.json();
  //   setResults(data?.data);
  // };

  // useEffect(() => {
  //   const timeOut = setTimeout(() => fetchLocations(), 300);
  //   return () => clearTimeout(timeOut);
  // }, [input]);

  return (
    <div className="absolute w-full h-screen grid grid-flow-col grid-cols-3">
      <section className="flex justify-center mt-28 col-span-2">
        <div className="text-center w-full">
          <h1 className="text-3xl text-gray-700 py-1">{title}</h1>
          <h1 className="text-xl text-gray-700 py-1">
            Order from your favourite restaurant near you
          </h1>
          <input
            className="border p-1 w-8/12 focus:outline-none text-gray-700 focus:shadow-lg"
            type="text"
            placeholder="Search for area, street name, city..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {results && (
            <div className="w-8/12 p-1 text-start border mx-auto shadow-lg">
              {results.map((result) => (
                <LocationResultItem key={result.place_id} result={result} />
              ))}
            </div>
          )}
        </div>
      </section>
      <img alt="bg" src={locationBG} />
    </div>
  );
};

export default Location;
