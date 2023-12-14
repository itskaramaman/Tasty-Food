import { SWIGGY_RESTAURANT_LIST_URL } from "./constants";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [bannerItems, setBannerItems] = useState([]);
  const address = useSelector((store) => store.app.address);

  useEffect(() => {
    fetchData();
  }, [address?.place_id]);

  const fetchData = async () => {
    const data = await fetch(
      `${SWIGGY_RESTAURANT_LIST_URL}&lat=${address?.geometry?.location?.lat}&lng=${address?.geometry?.location?.lng}`
    );
    const json = await data.json();
    setBannerItems(json?.data?.cards[1]?.card?.card?.imageGridCards?.info);
    setRestaurantList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return { restaurantList, bannerItems };
};

export default useRestaurantList;
