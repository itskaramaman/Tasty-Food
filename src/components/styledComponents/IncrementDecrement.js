import { useState } from "react";
import {
  addItem,
  addResturantDetails,
  removeItem,
} from "../../utils/redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const IncrementDecrement = ({
  restuarantId,
  name,
  areaName,
  item,
  setShowChangeRestaurantModal,
  count: countGiven,
}) => {
  const [count, setCount] = useState(countGiven);
  const dispatch = useDispatch();
  const { restuarantId: storeRestuarantId, items: cartItems } = useSelector(
    (store) => store.cart
  );

  const handleIncrement = () => {
    if (cartItems.length === 0) {
      dispatch(
        addResturantDetails({
          restaurantName: name,
          restaurantAreaName: areaName,
          restuarantId: restuarantId,
        })
      );
    }

    dispatch(addItem({ item, count: count + 1 }));
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (count <= 0) return;
    dispatch(removeItem({ item, count: count - 1 }));
    setCount((prev) => prev - 1);
  };
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => handleDecrement()}
        className="bg-blue-400 hover:bg-blue-500 text-white w-5 rounded-l"
      >
        <span className="my-auto">-</span>
      </button>
      <span className="bg-gray-200 w-5 text-center">{count}</span>
      <button
        onClick={() => handleIncrement()}
        className="bg-blue-400 hover:bg-blue-500 text-white w-5 rounded-r"
      >
        +
      </button>
    </div>
  );
};

export default IncrementDecrement;
