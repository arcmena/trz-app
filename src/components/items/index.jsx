import React from 'react';

import { Container, Square } from './styles';
import { ak47, firstAid, soup, water } from '../../assets';

export default ({
    readOnly,
    borderColor,
    borderTop,
    vertical,
    onClick,
    id,
}) => {
    return (
        <Container>
            <Square
                id={`${id} Weapon 1`}
                onClick={onClick}
                borderColor={borderColor}
                borderTop={borderTop}
                vertical={vertical}
                readOnly={readOnly}
            >
                <label id={`${id} Weapon 1`}>Weapon</label>
                <img id={`${id} Weapon 1`} src={ak47} alt="ak47.svg" />
                <input
                    type="text"
                    id={`${id} Weapon 1`}
                    name="1"
                    placeholder="0"
                    readOnly={readOnly}
                />
            </Square>
            <Square
                id={`${id} Food 2`}
                onClick={onClick}
                borderColor={borderColor}
                borderTop={borderTop}
                vertical={vertical}
                readOnly
            >
                <label id={`${id} Food 2`}>Food</label>
                <img id={`${id} Food 2`} src={soup} alt="soup.svg" />
                <input
                    id={`${id} Food 2`}
                    name="2"
                    type="text"
                    placeholder="0"
                    readOnly={readOnly}
                />
            </Square>
            <Square
                id={`${id} Water 3`}
                onClick={onClick}
                borderColor={borderColor}
                borderTop={borderTop}
                vertical={vertical}
                readOnly
            >
                <label id={`${id} Water 3`}>Water</label>
                <img id={`${id} Water 3`} src={water} alt="water.svg" />
                <input
                    id={`${id} Water 3`}
                    name="3"
                    type="text"
                    placeholder="0"
                    readOnly={readOnly}
                />
            </Square>
            <Square
                id={`${id} Medic-Supplies 4`}
                onClick={onClick}
                borderColor={borderColor}
                borderTop={borderTop}
                vertical={vertical}
                readOnly
            >
                <label id={`${id} Medic-Supplies 4`}>Medic Supp.</label>
                <img
                    id={`${id} Medic-Supplies 4`}
                    src={firstAid}
                    alt="firstAid.svg"
                />
                <input
                    id={`${id} Medic-Supplies 4`}
                    name="4"
                    type="text"
                    placeholder="0"
                    readOnly={readOnly}
                />
            </Square>
        </Container>
    );
};
