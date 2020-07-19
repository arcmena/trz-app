import React from 'react';

import { Container } from './styles';

export default ({ size }) => {
    return (
        <Container>
            <input type="text" size={size} />
        </Container>
    );
};
