import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    /* align-items: center; */
    justify-content: center;

    height: max(95vh - 70px);

    @media (max-width: 1024px) {
        height: 100%;
    }
`;

export const FixedButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;

    background: #61c1d4;
    border-radius: 50%;

    width: 60px;
    height: 60px;

    right: 15px;
    bottom: 15px;

    cursor: pointer;

    span {
        font-family: 'Nunito Sans';
        font-size: 25px;
        color: #ffffff;
        margin: 25px 0;
    }
`;
