import styled from 'styled-components';

import { ExitToApp } from '../../styles/Icons';

export const Container = styled.div`
    display: flex;
    align-items: center;
    z-index: 10;
    position: relative;

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

    span {
        font-size: 20px;
        margin-right: 15px;
    }

    box-shadow: 0 50px 120px rgba(0, 0, 0, 0.23);
`;

export const Icon = styled(ExitToApp)`
    width: 30px;
    height: 30px;
`;

export const Menu = styled.div`
    margin-left: 25px;

    li {
        list-style: none;
        float: right;

        cursor: pointer;
    }

    li + li {
        margin-left: 35px;
    }

    @media (max-width: 600px) {
        display: none;
    }

    a {
        text-decoration: none;
        color: black;
    }
`;

export const LogoDiv = styled.div``;
