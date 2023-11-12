import { SWIGGY_RESTAURANT_MENU_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  // fetch data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_RESTAURANT_MENU_URL + resId);
    const json = await data.json();
    setResInfo(json?.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
