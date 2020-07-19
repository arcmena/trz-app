import styled from 'styled-components';

import { VpnKey } from '../../../styles/Icons';

export const Form = styled.form``;

export const IdDiv = styled.div`
    display: flex;
    align-items: center;

    width: 320px;
    height: 60px;
    border: 2px solid rgba(48, 48, 48, 0.35);
    border-radius: 15px;

    padding: 8px 10px;
    margin-bottom: 30px;

    input {
        border: none;
        font-family: 'Ubuntu';
        font-size: 20px;
        color: #383838;
    }
`;

export const KeyIcon = styled(VpnKey)`
    width: 30px;
    height: 30px;
    color: rgba(48, 48, 48, 0.54);
`;

export const JoinButton = styled.button`
    border: none;
    border-radius: 15px;
    background: #61c1d4;
    width: 320px;
    height: 60px;

    span {
        font-family: 'Ubuntu';
        font-size: 30px;
        color: #ffffff;
    }

    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background: #55adbe;
    }

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
