import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export default ({ children }) => {
    const [logged, setLogged] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [userData, setUserData] = useState(null);

    const login = () => {
        setData();
    };

    const setData = () => {
        setLogged(true);
    };

    const refreshData = () => {
        setData();
    };

    const providerValue = {
        logged,
        login,
        refreshData,
    };

    return (
        <UserContext.Provider value={providerValue}>
            {children}
        </UserContext.Provider>
    );
};
