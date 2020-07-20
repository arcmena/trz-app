import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const Reports = styled.div`
    width: 480px;

    margin-bottom: 60px;

    @media (max-width: 600px) {
        width: 350px;
    }
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${(props) => props.color};
    height: 70px;

    border-radius: 10px 10px 0 0;
    border: 1px solid black;

    h2 {
        font-family: 'PT Sans';
        font-size: 27px;
        color: #383838;
        font-weight: normal;
    }
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 45px;

    border-left: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid black;

    span {
        font-family: 'Ubuntu';
        font-size: 20px;
        color: #383838;
    }
`;

export const AvgItems = styled.div`
    width: 480px;

    @media (max-width: 600px) {
        width: 350px;
        flex-shrink: 0;
        flex-wrap: wrap;
    }
`;
