import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginLayout from './layout/LoginLayout';
import SignUpLayout from './layout/SignUpLayout';

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LoginLayout} />
                <Route exact path="/signup" component={SignUpLayout} />
            </Switch>
        </BrowserRouter>
    );
};
