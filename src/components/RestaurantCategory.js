import RestaurantCategoryItem from "./RestaurantCategoryItem";

const RestaurantCategory = ({ category }) => {
  const { itemCards } = category.card?.card;
  console.log(itemCards);
  return (
    <div className="bg-slate-100 my-5 p-5">
      <h1 className="font-semibold">
        {category.card?.card?.title + " (" + itemCards.length + ")"}
      </h1>
      <ul>
        {itemCards.map((item) => (
          <RestaurantCategoryItem key={item.info?.id} />
        ))}
      </ul>
    </div>
  );
};

export default RestaurantCategory;
