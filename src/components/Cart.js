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

  let cartTotal = 0;
  cartItems.map((item) => {
    cartTotal = cartTotal + (item.count * item.item.card.info.price) / 1000;
  });

  return (
    <div className="w-10/12 absolute top-20 left-0 right-0 mx-auto p-5">
      <div className="flex justify-between mb-2">
        <h1 className="text-2xl font-semibold">Your Cart</h1>
        <button
          onClick={() => handleClearCart()}
          className="bg-orange-500 hover:bg-orange-600 text-white rounded-md py-1 px-2"
        >
          Clear Cart
        </button>
      </div>
      <div className="bg-slate-100 p-2 shadow-xl">
        {cartItems.length === 0 ? (
          <p>Your 🛒 is empty</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <RestaurantCategoryItem
                key={item.item.card.info.id}
                item={item.item}
                count={item.count}
              />
            ))}
            <div className="pb-2 flex justify-end">
              <p>
                Your cart total is{" "}
                <span className="font-semibold">₹{cartTotal}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
