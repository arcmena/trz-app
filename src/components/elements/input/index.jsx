import React from 'react';

import { Container } from './styles';

export default ({ type, size }) => {
    return (
        <Container>
            <input type={type} />
        </Container>
    );
};
