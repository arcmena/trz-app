import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { Container } from './styles';
import HomeView from '../../views/HomeView';

export default () => {
    return (
        <Container>
            <Switch>
                <Route path="/" component={HomeView} />
            </Switch>
        </Container>
    );
};
