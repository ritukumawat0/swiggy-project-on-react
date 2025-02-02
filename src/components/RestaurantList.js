import RestaurantCard from "./RestaurantCard.js";
import { useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList.js";
import { WithLabelRestaurantCard } from "./RestaurantCard.js";

const RestaurantCardPromoted = WithLabelRestaurantCard(RestaurantCard)

const RestaurantList = () => {
  const { listOfRestaurants, filteredRestaurants, setFilteredRestaurants } =
    useRestaurantList();
  const [searchText, setSearchText] = useState("");

  const handleClick = () => {
    let filteredResList = listOfRestaurants.filter((restaurant) => {
      return restaurant.rating > 4.3;
    });
    setFilteredRestaurants(filteredResList);
  };

  const handleSearch = () => {
    const restaurants = listOfRestaurants.filter((restaurant) => {
      return restaurant.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredRestaurants(restaurants);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mx-4">
      <div className="filter-container flex justify-around my-12">
        <div className="search-box">
          <input
            type="text"
            data-testid="searchInput"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="food name"
            className="search-input mr-4 border text-xl border-neutral-500 px-4 py-2 placeholder:text-xl focus:outline-none"
          />
          <button
            className="btn border border-neutral-500 px-4 py-2 text-lg"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <button
          className="btn rated-btn border border-neutral-500 px-4 py-2 text-lg"
          onClick={handleClick}
        >
          Top Rated Restaurnats
        </button>
      </div>
      <div className="RestaurantList  flex flex-wrap gap-3">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              className="Restaurantcard border border-gray-400 w-[19%] mb-4"
              key={restaurant.id}
              to={`/restaurants/${restaurant.id}`}
            >
              {restaurant.areaName === "Raja Park" ? (
                <RestaurantCardPromoted restaurant={restaurant} />
              ) : (
                <RestaurantCard restaurant={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantList;
