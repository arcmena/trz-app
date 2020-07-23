import styled from 'styled-components';

export const Container = styled.div`
    width: 600px;

    border: 1px solid #383838;
    border-radius: 5px;

    .leaflet-container {
        width: 100%;
        height: 430px;
        border-radius: 5px;
        z-index: 0;
    }

    @media (max-width: 600px) {
        width: 350px;
    }
`;
