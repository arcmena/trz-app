import React from 'react';

import { Items } from '../';
import { Container, Reports, Title, Row, AvgItems } from './styles';

export default () => {
    return (
        <Container>
            <Reports>
                <Title color="#ecbe1d">
                    <h2>Reports</h2>
                </Title>
                <Row>
                    <span>%% non infected survivors</span>
                </Row>
                <Row>
                    <span>%% infected survivors</span>
                </Row>
                <Row>
                    <span>## points lost due to infected</span>
                </Row>
            </Reports>

            <AvgItems>
                <Title color="#FD4D4D">
                    <h2>Average items amount by survivors</h2>
                </Title>
                <Items readOnly borderColor="black" />
            </AvgItems>
        </Container>
    );
};
