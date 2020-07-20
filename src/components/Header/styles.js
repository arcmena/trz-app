import styled from 'styled-components';

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

export const Dropdown = styled.div`
    display: none;
`;

export const Icon = styled.div``;
export const DropdownContent = styled.div``;

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
`;

export const LogoDiv = styled.div``;
