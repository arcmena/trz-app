import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginLayout from './layout/LoginLayout';
import SignUpLayout from './layout/SignUpLayout';
import DashboardLayout from './layout/DashboardLayout';

import { UserContext } from './config/contexts/UserContext';

export default () => {
    const { logged } = useContext(UserContext);

    return (
        <BrowserRouter>
            {!logged ? (
                <Switch>
                    <Route exact path="/" component={LoginLayout} />
                    <Route exact path="/signup" component={SignUpLayout} />
                </Switch>
            ) : (
                <Switch>
                    <Route path="/" component={DashboardLayout} />
                </Switch>
            )}
        </BrowserRouter>
    );
};
