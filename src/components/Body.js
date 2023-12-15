import RestaurantCard, { withDiscountInfo } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";
import Location from "./Location";
import { useSelector } from "react-redux";
import MainBanner from "./MainBanner";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const { restaurantList, bannerItems } = useRestaurantList();
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const address = useSelector((store) => store.app.address);

  useEffect(() => {
    setFilteredRestaurant(restaurantList);
  }, [restaurantList]);

  const isOnline = useOnlineStatus();

  const RestaurantCardDiscounted = withDiscountInfo(RestaurantCard);

  if (isOnline === false) {
    return (
      <h2>Seems you are offline, please check your internet connection</h2>
    );
  }

  if (address === null) return <Location />;

  return !filteredRestaurant || filteredRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="absolute top-20 mb-5 z-10 w-full">
      <div className="w-full p-5 flex justify-center">
        <div className="shadow-xl p-2">
          <input
            type="text"
            className="mr-2 p-1 w-80 focus:outline-none bg-slate-100 border-slate-600 rounded-md"
            placeholder="Search a restaurant..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-blue-400 hover:bg-blue-500 text-white rounded-md py-1 px-2"
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
      </div>
      {/* <MainBanner bannerItems={bannerItems} /> */}
      <div className="w-10/12 mx-auto flex flex-wrap gap-12 justify-center">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
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
