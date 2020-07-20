import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Container } from './styles';

import HomeView from '../../views/HomeView';
import TradeView from '../../views/TradeView';

export default () => {
    return (
        <Container>
            <Switch>
                <Route exact path="/" component={HomeView} />
                <Route path="/trade" component={TradeView} />
            </Switch>
        </Container>
    );
};
