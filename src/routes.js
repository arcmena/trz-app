import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginLayout from './layout/LoginLayout';

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LoginLayout} />
            </Switch>
        </BrowserRouter>
    );
};
