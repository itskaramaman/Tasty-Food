import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CartItems from "./CartItems";

const CartOrderDetails = ({
  restaurantAreaName,
  restaurantName,
  cartItems,
  cartTotal,
}) => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="w-4/12 bg-slate-100  p-5 shadow-xl">
      {cartItems.length === 0 ? (
        <p>Your 🛒 is empty</p>
      ) : (
        <div>
          <section className="text-sm flex justify-between mb-5 items-center">
            <h1 className="font-semibold">Your Cart</h1>
            <button
              onClick={handleClearCart}
              className="border rounded-md border-orange-500 p-1 text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              Clear Cart
            </button>
          </section>
          <h2 className="font-semibold">{restaurantName}</h2>
          <h3 className="text-xs text-gray-500 mb-2">{restaurantAreaName}</h3>
          {cartItems.map((item) => (
            <CartItems key={item.item.card.info.id} item={item} />
          ))}
          <textarea
            className="w-full text-sm"
            placeholder="“Any Suggestions? we will pass it on..."
          ></textarea>
          <div className="mt-3">
            <h2 className="font-semibold text-sm">Bill Details</h2>
            <BillItem
              text="Item Total"
              value={cartTotal.toFixed(2)}
              css="text-gray-500"
            />
            <BillItem text="Delivery Fee" value={53.32} css="text-gray-500" />
            <hr className="my-2" />
            <BillItem text="Platform Fee" value={2} css="text-gray-500" />
            <BillItem
              text="GST and Restaurant Charges"
              value={(cartTotal * 0.05).toFixed(2)}
              css="text-gray-500"
            />
            <hr className="my-2" />
            <BillItem
              text="To Pay:"
              value={(cartTotal + 53.32 + 2 + cartTotal * 0.05).toFixed(2)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const BillItem = ({ text, value, css }) => {
  return (
    <div className={`flex justify-between text-sm ${css}`}>
      <p>{text}</p>
      <p>₹{value}</p>
    </div>
  );
};

export default CartOrderDetails;
