import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {
    name,
    cuisines,
    costForTwo,
    avgRatingString,
    cloudinaryImageId,
    locality,
    sla,
  } = props.resData?.info;
  return (
    <div className="w-[203px] rounded-md hover:shadow-2xl">
      <img
        alt="card-log"
        className="rounded-2xl w-[203px] h-[135px] object-cover mx-auto"
        src={CDN_URL + cloudinaryImageId}
      />
      <section className="p-2">
        <h3 className="font-semibold text-lg line-clamp-1">{name}</h3>
        <div>
          <h4 className="flex items-center gap-1 text-sm text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-navigation"
            >
              <polygon points="3 11 22 2 13 21 11 13 3 11" />
            </svg>
            {locality}
          </h4>
          <h4 className="font-thin line-clamp-1 text-sm text-gray-500">
            {cuisines?.join(", ")}
          </h4>
        </div>
        <small>
          <span className="font-bold">Cost for Two: </span>
          <span className="text-green-600">{costForTwo}</span>
        </small>
        <div className="flex justify-between">
          <small>⭐{avgRatingString} stars</small>
          <br />
          <small className="text-blue-400">{sla?.deliveryTime} min</small>
        </div>
      </section>
    </div>
  );
};

export const withDiscountInfo = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-blue-400 text-sm text-white rounded-md m-2 p-1">
          {props.resData?.info?.aggregatedDiscountInfoV3?.header}{" "}
          {props.resData?.info?.aggregatedDiscountInfoV3?.subHeader}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
