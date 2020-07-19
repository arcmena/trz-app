import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;
    }

    textarea:focus,
    input:focus,
    button:focus,
    select:focus,
    option:focus {
        outline: none;
    }
    
    #root{
        position: absolute;
        width: 100%;

    }
`;
