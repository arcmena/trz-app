import React from 'react';
import { Map, Marker, TileLayer, Popup } from 'react-leaflet';

import { Container } from './styles';

export default ({
    initialLocation,
    handleMapClick,
    updatedLocation,
    lastLocation,
}) => {
    return (
        <Container>
            <Map center={initialLocation} zoom={13} onCLick={handleMapClick}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={lastLocation}>
                    <Popup>Your Last Location</Popup>
                </Marker>
                <Marker position={updatedLocation}>
                    <Popup>Your updated location</Popup>
                </Marker>
            </Map>
        </Container>
    );
};
