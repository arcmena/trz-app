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
                id={`${id} Weapon`}
                onClick={onClick}
                borderColor={borderColor}
                borderTop={borderTop}
                vertical={vertical}
                readOnly={readOnly}
            >
                <label id={`${id} Weapon`}>Weapon</label>
                <img id={`${id} Weapon`} src={ak47} alt="ak47.svg" />
                <input
                    type="text"
                    id={`${id} Weapon`}
                    name="Weapon"
                    placeholder="0"
                    readOnly={readOnly}
                />
            </Square>
            <Square
                id={`${id} Food`}
                onClick={onClick}
                borderColor={borderColor}
                borderTop={borderTop}
                vertical={vertical}
                readOnly
            >
                <label id={`${id} Food`}>Food</label>
                <img id={`${id} Food`} src={soup} alt="soup.svg" />
                <input
                    id={`${id} Food`}
                    name="Food"
                    type="text"
                    placeholder="0"
                    readOnly={readOnly}
                />
            </Square>
            <Square
                id={`${id} Water`}
                onClick={onClick}
                borderColor={borderColor}
                borderTop={borderTop}
                vertical={vertical}
                readOnly
            >
                <label id={`${id} Water`}>Water</label>
                <img id={`${id} Water`} src={water} alt="water.svg" />
                <input
                    id={`${id} Water`}
                    name="Water"
                    type="text"
                    placeholder="0"
                    readOnly={readOnly}
                />
            </Square>
            <Square
                id={`${id} Medic-Supplies`}
                onClick={onClick}
                borderColor={borderColor}
                borderTop={borderTop}
                vertical={vertical}
                readOnly
            >
                <label id={`${id} Medic-Supplies`}>Medic Supp.</label>
                <img
                    id={`${id} Medic-Supplies`}
                    src={firstAid}
                    alt="firstAid.svg"
                />
                <input
                    id={`${id} Medic-Supplies`}
                    name="Medic-Supplies"
                    type="text"
                    placeholder="0"
                    readOnly={readOnly}
                />
            </Square>
        </Container>
    );
};
