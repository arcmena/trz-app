import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;

    background: #ffffff;

    height: max(100vh - 70px);

    img {
        height: 100%;
        right: 0;

        @media (max-width: 900px) {
            display: none;
        }
    }

    section {
        display: flex;
        flex-direction: column;

        width: 55%;
        justify-content: center;
        align-items: center;

        form {
            margin-bottom: 80px;
        }

        @media (max-width: 900px) {
            width: 100%;
        }

        a {
            text-decoration: none;
        }
    }
`;

export const SignUp = styled.span`
    font-family: 'Nunito Sans';
    font-size: 20px;

    span {
        color: #61c1d4;
    }
`;
