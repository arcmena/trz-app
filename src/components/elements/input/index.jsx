import React from 'react';

import { Container } from './styles';

export default ({ type, id, name, placeholder, readOnly, value }) => {
    return (
        <Container>
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                readOnly={readOnly}
                value={value}
            />
        </Container>
    );
};
