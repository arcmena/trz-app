import React from 'react';

import { Form, IdDiv, KeyIcon } from './styles';
import { Button } from '../../';

export default ({ onChange, onSubmit }) => {
    return (
        <Form onChange={onChange} onSubmit={onSubmit}>
            <IdDiv className="effect">
                <input type="text" name="id" placeholder="Identification" />
                <KeyIcon />
            </IdDiv>

            <Button type="submit">
                <span>LOGIN</span>
            </Button>
        </Form>
    );
};
