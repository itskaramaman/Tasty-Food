import { useDispatch, useSelector } from "react-redux";
import RestaurantCategoryItem from "./RestaurantCategoryItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    // dispatch the action
    dispatch(clearCart());
  };
  console.log(cartItems);
  return (
    <div className="w-10/12 my-10 p-5 mx-auto">
      <div className="flex justify-between mb-2">
        <h1 className="text-2xl font-semibold">Your Cart</h1>
        <button
          onClick={() => handleClearCart()}
          className="bg-orange-500 hover:bg-orange-600 text-white rounded-md py-1 px-2"
        >
          Clear Cart
        </button>
      </div>
      <div className="bg-slate-100 p-2">
        {cartItems.length === 0 ? (
          <p>Your 🛒 is empty</p>
        ) : (
          cartItems.map((item) => (
            <RestaurantCategoryItem
              key={item.item.card.info.id}
              item={item.item}
              count={item.count}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
