import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
        font-family: 'Ubuntu';
        font-weight: lighter;
        font-size: 19px;
        margin-bottom: 5px;
        float: left;
    }

    div {
        margin-bottom: 10px;
    }

    div:first-child {
        flex-direction: column;
    }

    @media (max-width: 430px) {
        input {
            width: 150px;
        }
    }
`;

export const Name = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 430px) {
        div {
            width: 320px;
            input {
                width: 310px;
            }
        }
    }
`;

export const Title = styled.h2`
    font-family: 'PT Sans';
    font-size: 35px;

    color: #383838;

    margin-bottom: 15px;

    span {
        color: #61c1d4;
    }
`;

export const DivRow = styled.div`
    display: flex;
    justify-content: space-between;

    width: 430px;

    div {
        width: 200px;
        margin-bottom: 10px;

        input {
            width: 190px;
        }
    }

    select {
        display: flex;
        align-items: center;

        width: 200px;
        height: 60px;
        border: 2px solid rgba(48, 48, 48, 0.35);
        border-radius: 15px;

        padding: 8px 10px;

        font-family: 'Ubuntu';
        font-size: 20px;
    }

    @media (max-width: 430px) {
        flex-direction: column;

        width: 320px;

        div {
            width: 320px;
            input {
                width: 310px;
            }
        }

        select {
            width: 320px;
        }
    }
`;

export const ItemsDiv = styled.div`
    display: flex;
    flex-direction: column;

    margin: 0 !important;

    span {
        font-family: 'Ubuntu';
        font-weight: lighter;
        font-size: 19px;
        margin-bottom: 5px;
    }

    @media (max-width: 500px) {
        width: 350px;
        overflow-x: scroll;
        flex-shrink: 0;
        flex-wrap: wrap;
    }
`;
