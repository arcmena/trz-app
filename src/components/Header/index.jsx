import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Container, Menu, LogoDiv, Icon } from './styles';

import Logo from '../../assets/logo.png';

import { UserContext } from '../../config/contexts/UserContext';

export default () => {
    const { logged, logoff } = useContext(UserContext);

    const handleLogoff = () => {
        logoff();
    };

    return (
        <Container>
            {logged ? (
                <Menu>
                    <li>
                        <Link to="/">
                            <span>HOME</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/trade">
                            <span>TRADE</span>
                        </Link>
                    </li>
                    <li>
                        <div onClick={handleLogoff}>
                            <Icon />
                            <span>Exit</span>
                        </div>
                    </li>
                </Menu>
            ) : (
                <div></div>
            )}
            <LogoDiv>
                <span>THE RESIDENT ZOMBIE</span>
                <img src={Logo} alt="logo.png" />
            </LogoDiv>
        </Container>
    );
};
