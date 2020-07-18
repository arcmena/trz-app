import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    width: 100%;
    height: 70px;
    padding: 0 30px;

    background: #f8f8f8;

    font-family: 'Encode Sans';

    img {
        height: 65px;
    }

    div {
        display: flex;
        align-items: center;

        & + div {
            margin-left: auto;
        }
    }

    box-shadow: 0 50px 150px rgba(0, 0, 0, 0.23);
`;

export const LogoDiv = styled.div`
    span {
        font-size: 20px;
        margin-right: 15px;
    }
`;
