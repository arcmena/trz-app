import React, { useState } from 'react';

import { Container, SignUp } from './styles';
import { LoginForm } from '../../components';
import Background from '../../assets/background-zombies.png';

export default () => {
    const [values, setValues] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Container>
            <section>
                <LoginForm onChange={handleChange} onSubmit={handleSubmit} />
                <SignUp>
                    Isn’t a survivor yet? <span>Register now!</span>
                </SignUp>
            </section>
            <img src={Background} alt="background-zombies.png" />
        </Container>
    );
};
