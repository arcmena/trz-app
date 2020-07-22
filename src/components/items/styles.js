import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

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

export const Square = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 130px;
    height: 120px;

    margin: 0;

    border-top: ${(props) =>
        props.borderTop ? `1px solid ${props.borderColor}` : 'none'};
    border-right: 1px solid ${(props) => props.borderColor};
    border-bottom: 1px solid ${(props) => props.borderColor};
    border-left: ${(props) =>
        props.vertical ? `1px solid ${props.borderColor}` : 'none'};

    &:first-child {
        border-left: 1px solid ${(props) => props.borderColor};
        border-top: ${(props) => `1px solid ${props.borderColor}`};
    }

    input {
        cursor: ${(props) => (props.readOnly ? 'default' : 'pointer')};
    }
`;
