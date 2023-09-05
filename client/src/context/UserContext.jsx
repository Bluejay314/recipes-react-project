import React, { useState, useContext } from "react";

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({email: "cat@gmail.com"});

    const handleUpdateUser = (user) => {
        setCurrentUser(user);
    };

    return (
        <UserContext.Provider value={{ currentUser, handleUpdateUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    return useContext(UserContext);
};
