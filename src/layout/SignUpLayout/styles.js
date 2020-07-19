import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: max(100vh - 70px);

    section {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const RightPainel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin-right: 140px;

    img {
        height: 60%;
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
