import RestaurantCategoryItem from "./RestaurantCategoryItem";

const RestaurantCategory = ({
  name,
  areaName,
  index,
  category,
  setShowCategoryIndex,
  showCategoryIndex,
}) => {
  const { itemCards } = category.card?.card;
  const { title } = category.card?.card;

  const handleCategoryClick = () => {
    if (showCategoryIndex === null) {
      setShowCategoryIndex(index);
    } else if (showCategoryIndex === index) {
      setShowCategoryIndex(null);
    } else {
      setShowCategoryIndex(index);
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
        <p>{showCategoryIndex === index ? "⬇️" : "➡️"}</p>
      </div>
      {showCategoryIndex === index && (
        <ul>
          {itemCards.map((item) => (
            <RestaurantCategoryItem
              key={item.info?.id}
              item={item}
              name={name}
              areaName={areaName}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestaurantCategory;
