import React from 'react';

import Routes from './routes';

import { Header } from './components';
import GlobalStyles from './styles/GlobalStyles';

import UserProvider from './config/contexts/UserContext';

function App() {
    return (
        <UserProvider>
            <Header />
            <Routes />
            <GlobalStyles />
        </UserProvider>
    );
}

export default App;
