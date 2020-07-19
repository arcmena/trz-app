import React from 'react';

import { Input, Button } from '../../';
import { Form, DivRow } from './styles';

export default ({ onChange, onSubmit }) => {
    return (
        <Form onChange={onChange} onSubmit={onSubmit}>
            <label htmlFor="name">Name</label>
            <Input id="name" name="name" />

            <DivRow>
                <div>
                    <label htmlFor="age">Birth Date</label>
                    <Input id="age" name="age" />
                </div>
                <div>
                    <label htmlFor="gender">Gender</label>
                    <Input id="gender" name="gender" />
                </div>
            </DivRow>

            <Button oulined>
                <span>FINISH</span>
            </Button>
        </Form>
    );
};
