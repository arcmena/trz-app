import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Container, FixedButton } from './styles';
import { Header, Modal } from '../../components';

import HomeView from '../../views/HomeView';
import TradeView from '../../views/TradeView';

export default () => {
    const [isOpen, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
        console.log(isOpen);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Modal isOpen={isOpen} close={handleClose} />
            <Header />
            <Container>
                <Switch>
                    <Route exact path="/" component={HomeView} />
                    <Route path="/trade" component={TradeView} />
                </Switch>
            </Container>
            <FixedButton onClick={openModal}>
                <span>!</span>
            </FixedButton>
        </div>
    );
};
