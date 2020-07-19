import React from 'react';

import { SignUpForm } from '../../components';
import { Container, RightPainel } from './styles';

import Background from '../../assets/bmg.png';

export default () => {
    return (
        <Container>
            <section>
                <SignUpForm />
            </section>

            <RightPainel>
                <img src={Background} alt="background.png" />
                <h3>What are you able to manage on TRZ? </h3>
                <h4>Trade items with other survivors</h4>
                <h4>Share, and see the location of your group members</h4>
            </RightPainel>
        </Container>
    );
};
