import { MENU_ITEM_IMAGE_CDN } from "../utils/constants";
import IncrementDecrement from "./styledComponents/IncrementDecrement";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const RestaurantCategoryItem = ({ item, count = 0 }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleAddItem = (count) => {
    // dispatch an action
    dispatch(addItem({ item, count }));
  };

  const handleRemoveItem = (count) => {
    dispatch(removeItem({ item, count }));
  };

  // console.log(item);

  const getCountFromCart = () => {
    cartItems.map((cardItem) => {
      if (cardItem.item.card.info.id === item.card?.info?.id) {
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
          ${item.card?.info?.price / 1000}
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
            handleAddItem={handleAddItem}
            handleRemoveItem={handleRemoveItem}
            count={count}
          />
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategoryItem;
