import React from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';

import { Container } from './styles';

export default ({ initialLocation, handleMapClick, updatedLocation }) => {
    return (
        <Container>
            <Map center={initialLocation} zoom={13} onCLick={handleMapClick}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={updatedLocation} />
            </Map>
        </Container>
    );
};
