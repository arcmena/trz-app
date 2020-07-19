import styled from 'styled-components';

export default styled.button`
    background: ${(props) => (props.outlined ? 'transparent' : '#61c1d4')};
    border: ${(props) => (props.outlined ? '2px solid #61c1d4' : 'none')};
    border-radius: 15px;
    width: 320px;
    height: 60px;
    color: ${(props) => (props.outlined ? '#61c1d4' : '#ffffff')};

    span {
        font-family: 'Ubuntu';
        font-size: 30px;
    }

    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background: #55adbe;
        color: ${(props) => (props.outlined ? '#ffffff' : 'none')};
    }

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
