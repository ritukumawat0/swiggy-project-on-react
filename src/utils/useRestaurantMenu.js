import { MENU_API } from "../utils/constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [menuInfo, setMenuInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try{
      const response = await fetch(MENU_API + resId);
    const data = await response.json();
    const restaurantCard = data.data.cards[2].card.card.info;
    const restaurant = {
      id: restaurantCard.id,
      name: restaurantCard.name,
      city: restaurantCard.city,
      areaName: restaurantCard.areaName,
      costForTwo: restaurantCard.costForTwo,
      cuisines: restaurantCard.cuisines,
      rating: restaurantCard.avgRating,
      totalRatings: restaurantCard.totalRatingsString,
    };
    const resCategoryDetails =
      data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards
        .slice(2)
        .map((restaurantMenu) => {
          const resTitle = restaurantMenu.card.card.title;
          let items = [];
          if (restaurantMenu.card.card.itemCards) {
            items = restaurantMenu.card.card.itemCards.map((item) => {
              return {
                id: item.card.info.id,
                name: item.card.info.name,
                category: item.card.info.category,
                description: item.card.info.description,
                image: item.card.info.imageId,
                price: item.card.info.price / 100,
                defaultPrice:item.card.info.defaultPrice / 100,
                rating: item.card.info.ratings.aggregatedRating.rating,
              };
            });
          }
          return { resTitle, items };
        })
        .filter((category) => category.resTitle && category.items.length > 0);
    setMenuInfo({ restaurant, resCategoryDetails });
    }
    catch(e){
      console.log(e)
    }
  };

  return menuInfo;
};

export default useRestaurantMenu;
