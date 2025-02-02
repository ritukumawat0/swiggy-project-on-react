import { createContext } from "react";

// context create
const UserContext=createContext({
    loggedInUser:"Default User"
});

export default UserContext;