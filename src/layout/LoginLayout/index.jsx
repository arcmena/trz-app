import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, SignUp } from './styles';
import { LoginForm } from '../../components';
import Background from '../../assets/background-zombies.png';

import { UserContext } from '../../config/contexts/UserContext';

export default () => {
    const { login } = useContext(UserContext);
    const [values, setValues] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        login();
    };

    return (
        <Container>
            <section>
                <LoginForm onChange={handleChange} onSubmit={handleSubmit} />
                <SignUp>
                    Isn’t a survivor yet?
                    <Link to="/signup">
                        <span> Register now!</span>
                    </Link>
                </SignUp>
            </section>
            <img src={Background} alt="background-zombies.png" />
        </Container>
    );
};
