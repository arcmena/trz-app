import React, { useState, useEffect } from 'react';

import { Button, Map, Reports } from '../../components';
import { Container, MapDiv, ReportsDiv } from './styles';

export default () => {
    const [initialLocation, setInitialLocation] = useState([0, 0]);
    const [updatedLocation, setUpdatedLocation] = useState([0, 0]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setInitialLocation([latitude, longitude]);
        });
    }, []);

    const handleMapClick = (e) => {
        setUpdatedLocation([e.latlng.lat, e.latlng.lng]);
    };

    const handleUpdate = () => {
        if (JSON.stringify(updatedLocation) === JSON.stringify([0, 0])) {
            alert('Select your position on the map first');
            return;
        }
        console.log(updatedLocation);
    };

    return (
        <Container>
            <ReportsDiv>
                <Reports />
            </ReportsDiv>
            <MapDiv>
                <h2>Last Location</h2>
                <Map
                    initialLocation={initialLocation}
                    handleMapClick={handleMapClick}
                    updatedLocation={updatedLocation}
                />
                <Button>
                    <span onClick={handleUpdate}>Update Location</span>
                </Button>
            </MapDiv>
        </Container>
    );
};
