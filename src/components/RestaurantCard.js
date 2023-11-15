import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {
    name,
    cuisines,
    costForTwo,
    avgRatingString,
    cloudinaryImageId,
    sla,
  } = props.resData?.info;
  return (
    <div className="p-4 w-60 bg-slate-100 rounded-md hover:bg-slate-200 hover:shadow-xl">
      <img
        alt="card-log"
        className="rounded-md h-60 bg-cover mx-auto"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="h-14  overflow-hidden">
        <h3 className="font-semibold text-lg py-auto">{name}</h3>
      </div>
      <div>
        <h4 className="font-thin text-sm italic">
          {cuisines?.join(", ")?.substring(0, 30) + "..."}
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
    </div>
  );
};

export const withDiscountInfo = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-orange-600 text-sm text-white rounded-md m-2 p-1">
          {props.resData?.info?.aggregatedDiscountInfoV3?.header}{" "}
          {props.resData?.info?.aggregatedDiscountInfoV3?.subHeader}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
