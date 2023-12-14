import { MENU_ITEM_IMAGE_CDN } from "../utils/constants";
import IncrementDecrement from "./styledComponents/IncrementDecrement";
import { useSelector } from "react-redux";

const RestaurantCategoryItem = ({
  restuarantId,
  name,
  areaName,
  item,
  count = 0,
}) => {
  const cartItems = useSelector((store) => store.cart.items);

  const getCountFromCart = () => {
    cartItems.map((cardItem) => {
      if (cardItem.item.card.info.id === item?.card?.info?.id) {
        count = cardItem.count;
      }
    });
  };

  getCountFromCart();
  return (
    <div className="flex justify-between gap-5 my-5 py-5 border-b-2">
      <div className="w-2/3">
        <p className="text-sm">
          {item.card?.info?.itemAttribute?.vegClassifier === "NONVEG"
            ? "🟥"
            : "🟩"}
        </p>

        <h2 className="font-semibold my-1">{item.card?.info?.name}</h2>
        <p className="text-sm text-gray-700 my-1">
          ₹
          {item.card?.info?.defaultPrice
            ? item.card?.info?.defaultPrice / 100
            : item.card?.info?.price / 100}
        </p>
        <p className="text-sm text-gray-500 italic">
          {item.card?.info?.description}
        </p>
      </div>
      <div className="w-1/3 flex gap-2">
        <img
          className="h-32 w-44 mx-auto"
          src={MENU_ITEM_IMAGE_CDN + item.card?.info?.imageId}
        />
        <div className="flex items-center gap-1">
          <IncrementDecrement
            name={name}
            areaName={areaName}
            item={item}
            count={count}
            restuarantId={restuarantId}
          />
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategoryItem;
