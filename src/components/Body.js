import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { SWIGGY_RESTAURANT_LIST_URL } from "../utils/constants";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_RESTAURANT_LIST_URL);
    const json = await data.json();
    // Optional Chaining
    setRestaurantList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const getTopRestaurantList = () => {
    setRestaurantList(
      restaurantList.filter((restaurant) => restaurant.info.avgRating > 4)
    );
  };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurants = restaurantList.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={() => getTopRestaurantList()}>
          Top Rated restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
