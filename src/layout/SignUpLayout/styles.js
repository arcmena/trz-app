import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 1070px) {
        margin-top: 35px;
    }

    section {
        display: flex;
        align-items: center;
        justify-content: center;

        margin: 0px 45px;
    }

    @media (max-width: 1070px) {
        flex-direction: column;
    }
`;

export const RightPainel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
        height: 60%;

        @media (max-width: 575px) {
            width: 100%;
        }
    }

    h3 {
        font-family: 'PT Sans';
        font-size: 25px;
        font-weight: normal;
        color: #383838;
        margin-bottom: 25px;
    }

    h4 {
        font-family: 'PT Sans';
        font-size: 25px;
        font-weight: normal;
        color: #707070;
    }
`;
