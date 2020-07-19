import React from 'react';

import { IdDiv, KeyIcon } from './styles';
import { Button } from '../../';

export default ({ onChange, onSubmit }) => {
    return (
        <form onChange={onChange} onSubmit={onSubmit}>
            <IdDiv>
                <input type="text" name="id" placeholder="Identification" />
                <KeyIcon />
            </IdDiv>

            <Button type="submit">
                <span>LOGIN</span>
            </Button>
        </form>
    );
};
