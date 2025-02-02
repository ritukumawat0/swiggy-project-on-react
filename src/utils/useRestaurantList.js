import { useState, useEffect } from "react";
import { RES_API } from "../utils/constants.js";

const useRestaurantList = ()=>{
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
      }, []);

      const fetchData = async () => {
        try {
          const response = await fetch(RES_API);
          const data = await response.json();
    
          let resArr = [];
          for (let i = 0; i < data.data.cards.length; i++) {
            const card = data.data.cards[i];
            if (card?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
              resArr = card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
              break;
            }
          }
    
          const restaurants = resArr.map((restaurant) => {
            return {
              id: restaurant.info.id,
              name: restaurant.info.name,
              image: restaurant.info.cloudinaryImageId,
              locality: restaurant.info.locality,
              areaName: restaurant.info.areaName,
              cuisines: restaurant.info.cuisines,
              rating: restaurant.info.avgRating,
              price: restaurant.info.costForTwo,
            };
          });
          setListOfRestaurants(restaurants);
          setFilteredRestaurants(restaurants);
        } catch (e) {
          console.log(e);
        }
      };

      return {listOfRestaurants,setFilteredRestaurants,filteredRestaurants}
}
export default useRestaurantList;