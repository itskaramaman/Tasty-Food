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
    <div className="res-card">
      <img
        alt="card-log"
        className="res-img"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <small>Cost for Two: {costForTwo}</small>
      <br />
      <small>{avgRatingString} stars</small>
      <br />
      <small>{sla?.deliveryTime} min</small>
    </div>
  );
};

export default RestaurantCard;
