import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    label {
        font-family: 'Ubuntu';
        font-weight: lighter;
        font-size: 19px;
        margin-bottom: 5px;
    }

    div {
        margin-bottom: 20px;
    }
`;

export const DivRow = styled.div`
    display: flex;

    div {
        width: 160px;
        input {
            width: 120px;
        }
    }
`;
