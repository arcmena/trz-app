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

        // check if items already have the id
        const check = items.map((item) => item.id === Number(name));

        //if it has, bring a index to do a condition
        const alreadyHasValue = check.findIndex((index) => index === true);

        if (alreadyHasValue >= 0) {
            const insertNewValue = items.filter(
                (item) => item.id !== Number(name)
            );

            //find all the items that has different ids and set the new list with the new value
            setItems([
                ...insertNewValue,
                { id: Number(name), qtd: Number(value) },
            ]);
        } else {
            //if it isn't in the list just set normally
            setItems([...items, { id: Number(name), qtd: Number(value) }]);
        }
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
                    <h4>Share your location and report zombies</h4>
                </RightPainel>
            </Container>
        </div>
    );
};
