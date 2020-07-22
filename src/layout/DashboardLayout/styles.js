import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    /* align-items: center; */
    justify-content: center;

    height: max(95vh - 70px);

    @media (max-width: 1024px) {
        height: 100%;
    }
`;
