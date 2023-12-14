import { Link } from "react-router-dom";
import { MENU_ITEM_IMAGE_CDN } from "../utils/constants";
import { useSelector } from "react-redux";
import { SWIGGY_RESTAURANT_LIST_URL } from "../utils/constants";

const MainBannerItem = ({ item }) => {
  const address = useSelector((store) => store.app.address);

  const url = `${SWIGGY_RESTAURANT_LIST_URL}&lat=${address?.geometry?.location?.lat}&lng=${address?.geometry?.location?.lng}&collection=${item.entityId}&type=rcv2&tags=layout_CCS_${item.action.text}`;

  return (
    <Link className="w-[208px]" to={item.action.link}>
      <img src={MENU_ITEM_IMAGE_CDN + item.imageId} alt="banner-item" />
    </Link>
  );
};

export default MainBannerItem;
