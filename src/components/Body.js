import RestaurantCard, { withDiscountInfo } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState } from "react";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const { restaurantList, filteredRestaurant, setFilteredRestaurant } =
    useRestaurantList();

  const isOnline = useOnlineStatus();

  const RestaurantCardDiscounted = withDiscountInfo(RestaurantCard);

  if (isOnline === false) {
    return (
      <h2>Seems you are offline, please check your internet connection</h2>
    );
  }

  return restaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter p-5">
        <div className="search">
          <input
            type="text"
            className="mr-2 p-1 bg-slate-100 border-slate-600 rounded-md"
            placeholder="Search a restaurant..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-md py-1 px-2"
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
          <button></button>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-center">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {/* if restaurant has discount, add discount lable to it */}
            {restaurant.info.aggregatedDiscountInfoV3 ? (
              <RestaurantCardDiscounted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
