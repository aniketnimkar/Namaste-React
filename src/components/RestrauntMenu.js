import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./contants";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=229&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data);
  }
  console.log(restaurant.name);
  return (
    <div>
      <h1>Restaurant id:{resId}</h1>
      <h2>{restaurant.name}</h2>
      <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
    </div>
  );
};

export default RestaurantMenu;
