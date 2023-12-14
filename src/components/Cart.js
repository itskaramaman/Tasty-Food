import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CartItems from "./CartItems";

const Cart = () => {
  const {
    restaurantName,
    restaurantAreaName,
    items: cartItems,
  } = useSelector((store) => store.cart);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    // dispatch the action
    dispatch(clearCart());
  };

  console.log(cartItems);

  let cartTotal = 0;
  cartItems.map((item) => {
    cartTotal = cartTotal + (item.count * item.item.card.info.price) / 1000;
  });

  console.log(cartItems);

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
      <section className="flex gap-5">
        <div className="w-8/12">
          <div className=" bg-slate-100 shadow-xl p-5 mb-10">
            <h1 className="text-lg font-semibold">Account</h1>
            <p className="text-gray-500">
              To place your order now, log in to your existing account or sign
              up.
            </p>
            <section className="flex gap-4 mt-10">
              <div className="border border-green-700 text-center text-green-700 py-1 px-4 cursor-pointer">
                <p className="text-sm">Have an Account</p>
                <p>LOG IN</p>
              </div>
              <div className="border bg-green-700 text-white text-center py-1 px-4 cursor-pointer">
                <p className="text-sm">New to Tasty Food</p>
                <p>SIGN UP</p>
              </div>
            </section>
          </div>
          <div className="bg-slate-100 text-gray-600 font-semibold p-5 mb-10">
            Delivery Address
          </div>
          <div className="bg-slate-100 text-gray-600 font-semibold p-5">
            Payment
          </div>
        </div>
        <div className="w-4/12">
          {cartItems.length === 0 ? (
            <p className="bg-slate-100 shadow-xl p-5">Your 🛒 is empty</p>
          ) : (
            <div className="border bg-slate-100  p-5 shadow-xl">
              <h2 className="font-semibold">{restaurantName}</h2>
              <h3 className="text-xs text-gray-500">{restaurantAreaName}</h3>
              {cartItems.map((item) => (
                <CartItems item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cart;
