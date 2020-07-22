import React, { useState } from 'react';

import { SignUpForm } from '../../components';
import { Container, RightPainel } from './styles';

import Background from '../../assets/bmg.png';

export default () => {
    const [values, setValues] = useState({});
    const [items, setItems] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleItems = (e) => {
        const { name, value } = e.target;
        // const item = {
        //     [name]
        // }
        setItems({ ...items, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ values, items });
    };

    return (
        <Container>
            <section>
                <SignUpForm
                    onChange={handleChange}
                    onClick={handleSubmit}
                    onChangeItems={handleItems}
                />
            </section>

            <RightPainel>
                <img src={Background} alt="background.png" />
                <h3>What are you able to manage on TRZ? </h3>
                <h4>Trade items with other survivors</h4>
                <h4>Share, and see the location of your group members</h4>
            </RightPainel>
        </Container>
    );
};
