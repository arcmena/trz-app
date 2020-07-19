import React from 'react';

import { Container } from './styles';
import { ak47, firstAid, soup, water } from '../../assets';

export default () => {
    return (
        <Container>
            <div>
                <label>Weapon</label>
                <img src={ak47} alt="ak47.svg" />
                <input type="text" placeholder="0" />
            </div>
            <div>
                <label>Food</label>
                <img src={soup} alt="soup.svg" />
                <input type="text" placeholder="0" />
            </div>
            <div>
                <label>Water</label>
                <img src={water} alt="water.svg" />
                <input type="text" placeholder="0" />
            </div>
            <div>
                <label>Medicine</label>
                <img src={firstAid} alt="firstAid.svg" />
                <input type="text" placeholder="0" />
            </div>
        </Container>
    );
};
