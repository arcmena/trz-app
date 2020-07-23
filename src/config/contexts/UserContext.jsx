import React, { useState, createContext } from 'react';

import api from '../../service/api';

export const UserContext = createContext();

export default ({ children }) => {
    const [logged, setLogged] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [userData, setUserData] = useState(null);

    const login = (values) => {
        api.post('/login', values)
            .then(({ data }) => setData(data))
            .catch((error) => console.error(error));
    };

    const logoff = () => {
        localStorage.removeItem('token');
        setLogged(false);
        setUserData(null);
    };

    const setData = ({ token, user, inv }) => {
        localStorage.token = token;
        setUserData({ user, inv });
        setLogged(true);
    };

    // const refreshData = () => {
    //     api.get('/refreshToken')
    //         .then(({ data }) => setData(data))
    //         .catch((error) => console.error(error));
    // };

    const providerValue = {
        logged,
        login,
        logoff,
        userData,
        // refreshData,
    };

    return (
        <UserContext.Provider value={providerValue}>
            {children}
        </UserContext.Provider>
    );
};
