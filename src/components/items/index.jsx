import React from 'react';

import { Container, Square } from './styles';
import { ak47, firstAid, soup, water } from '../../assets';

export default ({ readOnly, borderColor, borderTop }) => {
    return (
        <Container>
            <Square borderColor={borderColor} borderTop={borderTop}>
                <label>Weapon</label>
                <img src={ak47} alt="ak47.svg" />
                <input
                    type="text"
                    placeholder="0"
                    id="weapons"
                    name="weapons"
                    readOnly={readOnly}
                />
            </Square>
            <Square borderColor={borderColor} borderTop={borderTop}>
                <label>Food</label>
                <img src={soup} alt="soup.svg" />
                <input
                    type="text"
                    placeholder="0"
                    id="food"
                    name="food"
                    readOnly={readOnly}
                />
            </Square>
            <Square borderColor={borderColor} borderTop={borderTop}>
                <label>Water</label>
                <img src={water} alt="water.svg" />
                <input
                    type="text"
                    placeholder="0"
                    id="water"
                    name="water"
                    readOnly={readOnly}
                />
            </Square>
            <Square borderColor={borderColor} borderTop={borderTop}>
                <label>Medicine</label>
                <img src={firstAid} alt="firstAid.svg" />
                <input
                    type="text"
                    placeholder="0"
                    id="firstAid"
                    name="firstAid"
                    readOnly={readOnly}
                />
            </Square>
        </Container>
    );
};
