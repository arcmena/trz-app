import React from 'react';

import { Input, Button, Items } from '../../';
import { Form, Name, Title, DivRow, ItemsDiv } from './styles';

export default ({ onChange, onClick, onChangeItems }) => {
    return (
        <div>
            <Form onChange={onChange}>
                <Title>
                    Sign Up <span>Survivor!</span>
                </Title>

                <Name>
                    <label htmlFor="name">Name</label>
                    <Input type="text" id="name" name="name" required />
                </Name>

                <DivRow>
                    <div>
                        <label htmlFor="age">Birth Date</label>
                        <Input type="date" id="age" name="age" required />
                    </div>
                    <div>
                        <label htmlFor="gender">Gender</label>
                        <select id="gender" name="gender" required>
                            <option value="" defaultChecked>
                                Select...
                            </option>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                        </select>
                    </div>
                </DivRow>
            </Form>
            <ItemsDiv onChange={onChangeItems}>
                <span>Register belongings</span>
                <Items borderColor="rgba(48, 48, 48, 0.35)" borderTop />
            </ItemsDiv>

            <Button type="submit" oulined onClick={onClick}>
                <span>FINISH</span>
            </Button>
        </div>
    );
};
