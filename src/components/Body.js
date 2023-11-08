import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

import { useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);

  const getTopRestaurantList = () => {
    setRestaurantList(
      restaurantList.filter((restaurant) => restaurant.info.avgRating > 4)
    );
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => getTopRestaurantList()}>
          Top Rated restaurant
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
