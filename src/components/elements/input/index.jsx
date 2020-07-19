import React from 'react';

import { Container } from './styles';

export default ({ type, id, name }) => {
    return (
        <Container>
            <input type={type} id={id} name={name} />
        </Container>
    );
};
