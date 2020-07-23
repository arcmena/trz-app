import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Container, FixedButton } from './styles';
import { Header, Modal } from '../../components';

import HomeView from '../../views/HomeView';
import TradeView from '../../views/TradeView';

import api from '../../service/api';

export default () => {
    const [isOpen, setOpen] = useState(false);
    const [report, setReport] = useState(null);

    const openModal = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleReportSubmit = (e) => {
        e.preventDefault();
        api.put(`/report/${report}`)
            .then(({ data }) => alert(data.message))
            .catch((error) => console.error(error));
    };

    const handleReportChange = (e) => {
        setReport(e.target.value);
    };

    return (
        <div>
            <Modal
                isOpen={isOpen}
                close={handleClose}
                onSubmit={handleReportSubmit}
                onChange={handleReportChange}
            />
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
