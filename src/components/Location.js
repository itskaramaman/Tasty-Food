import { useEffect, useState } from "react";
import locationBG from "../images/location-bg.jpg";

const Location = () => {
  const messages = ["Hungary?", "Friday Night🍻", "No mood to cook🍕"];
  const [title, setTitle] = useState("No mood to cook🍕");

  return (
    <div className="absolute w-full h-screen grid grid-flow-col grid-cols-3">
      <section className="flex justify-center items-center col-span-2">
        <div className="text-center w-full">
          <h1 className="text-3xl text-gray-700">{title}</h1>
          <h1 className="text-xl text-gray-700">
            Order from your favourite restaurant near you
          </h1>
          <input
            className="border p-1 w-8/12 focus:outline-none text-gray-700"
            type="text"
            placeholder="Search for area, street name, city..."
          />
        </div>
      </section>
      <img className="" alt="bg" src={locationBG} />
    </div>
  );
};

export default Location;
