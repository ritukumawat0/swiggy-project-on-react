import Shimmer from "../components/Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showItems, setShowItems] = useState(false);
  const [showIndex,setShowIndex] = useState(null);
  const { resId } = useParams();
  const menuInfo = useRestaurantMenu(resId);

  return menuInfo === null ? (
    <Shimmer />
  ) : (
    <div className="RestaurantMenu">
      <div className="res-menu w-6/12 mx-auto border border-gray-300 shadow-md p-4 rounded-3xl leading-7">
        <span className="font-semibold">
          {menuInfo.restaurant.rating} ({menuInfo.restaurant.totalRatings})
        </span>{" "}
        &nbsp; &nbsp;
        <span>
          <span className="font-semibold">Cuisines</span> :{" "}
          {menuInfo.restaurant.cuisines}
        </span>
        <p>
          <span className="font-semibold">Name</span> :{" "}
          {menuInfo.restaurant.name}
        </p>
        <p>
          <span className="font-semibold">Area</span> :{" "}
          {menuInfo.restaurant.areaName}
        </p>
      </div>
      {menuInfo.resCategoryDetails.map((category,index) => {
        return (
          <RestaurantCategory
            category={category}
            setShowItems={setShowItems}
            showItems={showIndex===index && showItems}
            key={index}
            index={index}
            setShowIndex={setShowIndex}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
