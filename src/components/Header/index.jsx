import React, { useState } from 'react';

import {
    Container,
    Dropdown,
    Icon,
    DropdownContent,
    Menu,
    LogoDiv,
} from './styles';
import Logo from '../../assets/logo.png';

export default () => {
    const [logged, setLogged] = useState(true);

    return (
        <Container>
            {logged ? (
                <Menu>
                    {/* <Dropdown>
                        <Icon />
                        <DropdownContent>
                            <li>
                                <span>HOME</span>
                            </li>
                            <li>
                                <span>TRADE</span>
                            </li>
                            <li>
                                <span>REPORT INFECTED</span>
                            </li>
                        </DropdownContent>
                    </Dropdown>

                    <li>
                        <span>HOME</span>
                    </li>
                    <li>
                        <span>TRADE</span>
                    </li>
                    <li>
                        <span>REPORT INFECTED</span>
                    </li> */}
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
