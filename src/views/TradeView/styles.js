import styled from 'styled-components';

export const Container = styled.div`
    /* margin-top: 85px; */
`;

export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    span {
        font-family: 'PT Sans';
        font-size: 35px;
        color: #383838;
        margin-top: 25px;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    p {
        font-family: 'Ubuntu';
        font-size: 16px;
        color: gray;
    }

    h3 {
        font-weight: normal;
        font-family: 'PT Sans';
        font-size: 26px;
        color: #303030;
        border-bottom: 1px solid #55adbe;
        margin-bottom: 15px;

        cursor: pointer;

        transition: font-size 0.2s;

        &:hover {
            font-size: 30px;
        }
    }
`;

export const TradeWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ItemsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 25px;

    div {
        label {
            font-family: 'Ubuntu';
            font-weight: lighter;
            font-size: 19px;
            margin-bottom: 5px;
        }
    }

    span {
        font-family: 'PT Sans';
        font-size: 30px;
        color: #383838;
        margin-bottom: 15px;
    }
`;

export const ActiveTrade = styled.div``;

export const TradeInfos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
        display: flex;

        div + div {
            margin-left: 10px;
        }
    }

    h3 {
        font-family: 'Nunito Sans';
        font-size: 19px;
        margin-bottom: 5px;
        font-weight: bold;

        margin: 25px 0px;
    }
`;

export const Price = styled.div`
    h4 {
        font-family: 'Nunito Sans';
        font-size: 15px;
        margin-top: 8px;
    }
`;

export const SelecItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        width: 55px;
        height: 25px;
        margin-top: 5px;

        text-align: center;
    }

    span {
        font-family: 'Ubuntu';
        font-size: 19px;
        margin-bottom: 5px;
    }
`;

export const Results = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 25px;

    input {
        width: 70px;
    }

    button {
        width: 135px;
    }
`;

export const Survivor = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 25px;

    div {
        width: 300px;
        input {
            width: 270px;
        }
    }

    label {
        font-family: 'PT Sans';
        font-size: 25px;
        color: #383838;
        margin-bottom: 15px;
    }
`;
