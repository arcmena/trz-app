import React from 'react';

import Routes from './routes';

import { Header } from './components';
import GlobalStyles from './styles/GlobalStyles';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes />
            <GlobalStyles />
        </div>
    );
}

export default App;
