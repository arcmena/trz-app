import React from 'react';

import { Container, LogoDiv } from './styles';
import Logo from '../../assets/logo.png';

export default () => {
    return (
        <Container>
            <div></div>
            <LogoDiv>
                <span>THE RESIDENT ZOMBIE</span>
                <img src={Logo} alt="logo.png" />
            </LogoDiv>
        </Container>
    );
};
