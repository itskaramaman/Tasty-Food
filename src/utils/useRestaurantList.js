import { SWIGGY_RESTAURANT_LIST_URL } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_RESTAURANT_LIST_URL);
    const json = await data.json();
    setRestaurantList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return { restaurantList };
};

export default useRestaurantList;
