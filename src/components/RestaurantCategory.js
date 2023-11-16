import RestaurantCategoryItem from "./RestaurantCategoryItem";

const RestaurantCategory = ({
  category,
  setShowCategoryItems,
  showCategoryItems,
}) => {
  const { itemCards } = category.card?.card;
  const { title } = category.card?.card;

  const handleCategoryClick = () => {
    if (showCategoryItems === title) {
      setShowCategoryItems(null);
    } else if (showCategoryItems === null) {
      setShowCategoryItems(title);
    }
  };

  return (
    <div className="bg-slate-50 my-5 p-5 rounded-md shadow-xl">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => handleCategoryClick()}
      >
        <h1 className="font-semibold text-lg">
          {title + " (" + itemCards.length + ")"}
        </h1>
        <p>{showCategoryItems === title ? "⬇️" : "➡️"}</p>
      </div>
      {showCategoryItems === title && (
        <ul>
          {itemCards.map((item) => (
            <RestaurantCategoryItem key={item.info?.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestaurantCategory;
