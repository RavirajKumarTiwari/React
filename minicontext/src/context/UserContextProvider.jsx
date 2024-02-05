import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
    // Creating a state to give data to the provider
    const [user, setUser] = React.useState(null);
    return (
        // you have to pass the property Provider to access the vlaue
        // kon si value ki access de rahe h is liye props (value) pass kr rahe hai
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;