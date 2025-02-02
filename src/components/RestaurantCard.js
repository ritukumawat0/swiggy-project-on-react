import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({restaurant})=>{
    const{loggedInUser} = useContext(UserContext);
    // console.log(restaurant)
    const {image,name,price,rating,cuisines,locality,areaName}=restaurant;
    return (
        <div data-testid="resCard">
            <img src={CDN_URL+image} className="object-cover w-full h-64"/>
            <div className="Rescard-body p-3 leading-7">
            <h3 className="font-bold">{name}</h3>
             <p><span className="font-semibold">Price</span> : {price}</p>
             <p><span className="font-semibold">Rating</span> : {rating}</p>
             <p><span className="font-semibold">Locality</span> : {locality}</p>
             <p><span className="font-semibold">AreaName</span> : {areaName}</p>
             <p><span className="font-semibold">Cuisines</span> : {cuisines.join(", ")}</p>
             <p>User : {loggedInUser}</p>
            </div>
        </div>
    )
}

export const WithLabelRestaurantCard=(RestaurantCard)=>{
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-black text-white px-4 py-2 text-md">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;