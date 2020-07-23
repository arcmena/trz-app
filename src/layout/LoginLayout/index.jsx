import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, SignUp } from './styles';
import { LoginForm, Header } from '../../components';
import Background from '../../assets/background-zombies.png';

import { UserContext } from '../../config/contexts/UserContext';

export default () => {
    const { login, logoff } = useContext(UserContext);

    const [values, setValues] = useState({});

    useEffect(() => {
        logoff();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(values);

        await login(values);
    };

    return (
        <div>
            <Header />
            <Container>
                <section>
                    <LoginForm
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                    />
                    <SignUp>
                        Isn’t a survivor yet?
                        <Link to="/signup">
                            <span> Register now!</span>
                        </Link>
                    </SignUp>
                </section>
                <img src={Background} alt="background-zombies.png" />
            </Container>
        </div>
    );
};
