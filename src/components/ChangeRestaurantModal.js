import { useDispatch } from "react-redux";
import { clearCart } from "../utils/redux/cartSlice";

const ChangeRestaurantModal = ({ setShowChangeRestaurantModal }) => {
  const dispatch = useDispatch();
  const handleAddClick = () => {
    dispatch(clearCart());
    dispatch(add);
  };
  return (
    <div className="border bg-blue-50 border-blue-300 w-80 h-44 z-40 absolute left-64 top-32 rounded-md shadow-2xl p-3 text-sm text-center">
      <div>
        <h1 className="font-semibold mb-5">
          You have items in Cart from other restaurant.
        </h1>
        <p className="mb-5 text-gray-500">
          Adding this item will remove other items from cart!
        </p>
        <div className="flex justify-between">
          <button
            onClick={() => setShowChangeRestaurantModal(false)}
            className="border border-green-700 text-green-700 rounded-md p-1 hover:bg-green-700 hover:text-white"
          >
            Cancel
          </button>
          <button className="border border-red-700 text-red-700 rounded-md p-1 hover:bg-red-700 hover:text-white">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeRestaurantModal;
