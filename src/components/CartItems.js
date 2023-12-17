import IncrementDecrement from "./styledComponents/IncrementDecrement";

const CartItems = ({ item }) => {
  return (
    <div>
      <div className="flex gap-2 items-center justify-between mb-2 text-sm">
        <p>
          {item.item.card?.info?.itemAttribute?.vegClassifier === "NONVEG"
            ? "🟥"
            : "🟩"}
        </p>
        <h5 className="w-32 line-clamp-1">{item.item?.card?.info?.name}</h5>
        <IncrementDecrement count={item.count} item={item.item} />
        <h5 className="text-gray-500">
          ₹
          {item.item?.card?.info?.defaultPrice
            ? (item.item?.card?.info?.defaultPrice / 100) * item.count
            : (item.item?.card?.info?.price / 100) * item.count}
        </h5>
      </div>
    </div>
  );
};

export default CartItems;
