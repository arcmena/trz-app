import React from 'react';

import { Input, Button, Items } from '../../';
import { Form, Name, Title, DivRow, ItemsDiv } from './styles';

export default ({ onChange, onSubmit }) => {
    return (
        <Form onChange={onChange} onSubmit={onSubmit}>
            <Title>
                Sign Up <span>Survivor!</span>
            </Title>

            <Name>
                <label htmlFor="name">Name</label>
                <Input type="text" id="name" name="name" />
            </Name>

            <DivRow>
                <div>
                    <label htmlFor="age">Birth Date</label>
                    <Input type="date" id="age" name="age" />
                </div>
                <div>
                    <label htmlFor="gender">Gender</label>
                    <select id="gender" name="gender">
                        <option value="" defaultChecked>
                            Select...
                        </option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                    </select>
                </div>
            </DivRow>

            <ItemsDiv>
                <span>Register belongings</span>
                <Items />
            </ItemsDiv>

            <Button oulined>
                <span>FINISH</span>
            </Button>
        </Form>
    );
};
