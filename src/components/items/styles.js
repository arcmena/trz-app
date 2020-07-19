import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 130px;
        height: 120px;

        margin: 0;

        border: 1px solid rgba(48, 48, 48, 0.35);

        & + div {
            margin-left: 1px;
        }
    }

    img {
        width: 55px;
        max-height: 55px;
    }

    input {
        width: 40px;
        height: 25px;
        margin-top: 5px;

        text-align: center;
    }
`;
