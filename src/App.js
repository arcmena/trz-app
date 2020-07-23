import React from 'react';

import Routes from './routes';

import GlobalStyles from './styles/GlobalStyles';

import UserProvider from './config/contexts/UserContext';

function App() {
    return (
        <UserProvider>
            <Routes />
            <GlobalStyles />
        </UserProvider>
    );
}

export default App;
