import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    width: ${(props) => (props.size ? props.size : '320px')};
    height: 60px;
    border: 2px solid rgba(48, 48, 48, 0.35);
    border-radius: 15px;

    padding: 8px 10px;

    input {
        border: none;
        font-family: 'Ubuntu';
        font-size: 20px;
        color: #383838;
    }
`;
