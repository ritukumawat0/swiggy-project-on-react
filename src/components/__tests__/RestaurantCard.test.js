import {render , screen} from "@testing-library/react";
import UserContext from "../../utils/UserContext";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMockData.json"
import { WithLabelRestaurantCard } from "../RestaurantCard";

const RestaurantCardPromoted = WithLabelRestaurantCard(RestaurantCard)

test('should render RestaurantCard with props',()=>{
    render(
        <UserContext.Provider value={{loggedInUser:"Tech Queen"}}>
            <RestaurantCard restaurant={MOCK_DATA}/>
        </UserContext.Provider>
    )

    const name = screen.getByText("Pizza");

    expect(name).toBeInTheDocument();
});

test("should render with promoted label",()=>{
    render(
        <UserContext.Provider value={{loggedInUser:"Tech Queen"}}>
            <RestaurantCardPromoted restaurant={MOCK_DATA}/>
        </UserContext.Provider>
    )
    
    const label = screen.getByText("Promoted");

    expect(label).toBeInTheDocument();

})