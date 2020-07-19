import React from 'react';

import { Container } from './styles';
import { ak47, firstAid, soup, water } from '../../assets';

export default () => {
    return (
        <Container>
            <div>
                <label>Weapon</label>
                <img src={ak47} alt="ak47.svg" />
                <input
                    type="text"
                    placeholder="0"
                    id="weapons"
                    name="weapons"
                />
            </div>
            <div>
                <label>Food</label>
                <img src={soup} alt="soup.svg" />
                <input type="text" placeholder="0" id="food" name="food" />
            </div>
            <div>
                <label>Water</label>
                <img src={water} alt="water.svg" />
                <input type="text" placeholder="0" id="water" name="water" />
            </div>
            <div>
                <label>Medicine</label>
                <img src={firstAid} alt="firstAid.svg" />
                <input
                    type="text"
                    placeholder="0"
                    id="firstAid"
                    name="firstAid"
                />
            </div>
        </Container>
    );
};
