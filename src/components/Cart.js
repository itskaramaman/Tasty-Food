import { useSelector } from "react-redux";
import CartUserDetails from "./CartUserDetails";
import CartOrderDetails from "./CartOrderDetails";

const Cart = () => {
  const {
    restaurantName,
    restaurantAreaName,
    items: cartItems,
  } = useSelector((store) => store.cart);

  let cartTotal = 0;
  cartItems.map((item) => {
    cartTotal =
      cartTotal +
      (item.count * item.item.card.info.defaultPrice
        ? item.item.card.info.defaultPrice
        : item.item.card.info.price) /
        100;
  });

  return (
    <div className="w-10/12 absolute top-20 left-0 right-0 mx-auto p-5 z-10">
      <section className="flex gap-5">
        <CartUserDetails />
        <CartOrderDetails
          restaurantAreaName={restaurantAreaName}
          restaurantName={restaurantName}
          cartItems={cartItems}
          cartTotal={cartTotal}
        />
      </section>
    </div>
  );
};

export default Cart;
