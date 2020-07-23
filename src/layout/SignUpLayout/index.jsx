import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { SignUpForm, Header } from '../../components';
import { Container, RightPainel } from './styles';

import Background from '../../assets/bmg.png';

import api from '../../service/api';

export default () => {
    const [values, setValues] = useState({});
    const [items, setItems] = useState([]);

    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleItems = (e) => {
        const { name, value } = e.target;
        setItems([...items, { [Number(name)]: Number(value) }]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, age, gender } = values;

        const data = {
            name,
            age,
            gender,
            items,
        };

        api.post('/createUser', data)
            .then(({ data }) => {
                alert(data.message);
                history.push('/');
            })
            .catch((error) => console.error(error));
    };

    return (
        <div>
            <Header />
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
        </div>
    );
};
