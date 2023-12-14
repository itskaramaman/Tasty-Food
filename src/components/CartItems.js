import IncrementDecrement from "./styledComponents/IncrementDecrement";

const CartItems = ({ item }) => {
  return (
    <div>
      <div className="flex gap-2 items-center mb-2 text-sm">
        <p className="">
          {item.item.card?.info?.itemAttribute?.vegClassifier === "NONVEG"
            ? "🟥"
            : "🟩"}
        </p>
        <h5 className="w-32 line-clamp-1">{item.item?.card?.info?.name}</h5>
        <IncrementDecrement count={item.count} item={item.item} />
        <h5>₹{(item.item?.card?.info?.price / 100) * item.count}</h5>
      </div>
    </div>
  );
};

export default CartItems;
