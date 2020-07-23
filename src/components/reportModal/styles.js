import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(196, 196, 196, 0.37);

    position: fixed;

    height: 100vh;
    width: 100vw;

    display: ${(props) => (props.isOpen ? '' : 'none')};

    /* display: none; */

    z-index: 5;
`;

export const Header = styled.div`
    display: flex;
`;

export const Title = styled.div`
    font-family: 'Nunito Sans';
    font-size: 15px;
    font-weight: normal;

    margin-bottom: 20px;
`;

export const Modal = styled.div`
    width: 400px;
    height: 300px;

    background: #ffffff;
    border-radius: 15px;

    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Close = styled.div`
    width: 100%;

    cursor: pointer;

    span {
        float: right;
        margin-right: 35px;
        background: #c4c4c4;
        border-radius: 50%;
        padding: 5px;

        width: 30px;
        text-align: center;

        font-family: 'Nunito Sans';
        font-size: 15px;
    }

    margin: 20px 0;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        font-family: 'Nunito Sans';
        font-size: 15px;
        font-weight: normal;
    }

    form {
        width: 250px;
        display: flex;
        align-items: center;

        div {
            margin-top: 25px;
            width: 200px;
            height: 50px;
        }

        input {
            width: 170px;
            font-size: 17px;
        }

        button {
            margin-left: 10px;
            margin-top: 20px;
        }
    }
`;
