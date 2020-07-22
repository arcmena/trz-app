import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;

export const ReportsDiv = styled.div`
    padding: 20px 30px 0 0;

    @media (max-width: 1024px) {
        padding: 35px 0;
    }

    label {
        font-family: 'Ubuntu';
        font-weight: lighter;
        font-size: 19px;
        margin-bottom: 5px;
    }
`;

export const MapDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px 0 0 30px;

    h2 {
        font-family: 'PT Sans';
        font-size: 30px;
        color: #383838;
        font-weight: normal;
        margin-bottom: 15px;
    }

    button {
        margin-top: 15px;
    }

    @media (max-width: 1024px) {
        padding: 0;
    }
`;
