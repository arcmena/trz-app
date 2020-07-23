import React, { useContext, useState, useEffect } from 'react';

import { Button, Map, Reports } from '../../components';
import { Container, MapDiv, ReportsDiv, Message, Wrapper } from './styles';

import { UserContext } from '../../config/contexts/UserContext';

import api from '../../service/api';

export default () => {
    const [initialLocation, setInitialLocation] = useState([0, 0]);
    const [updatedLocation, setUpdatedLocation] = useState([0, 0]);
    const [lastLocation, setLastLocation] = useState([0, 0]);

    const [message, setMessage] = useState(null);

    const [values, setValues] = useState({});

    const { userData } = useContext(UserContext);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setInitialLocation([latitude, longitude]);
        });

        if (userData.user.lastLocation !== '') {
            const lc = userData.user.lastlocation.split(' ');
            setLastLocation([lc[0], lc[1]]);
        } else {
            setMessage(
                `Your first time here? Make sure to set your location on the map!`
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleMapClick = (e) => {
        setUpdatedLocation([e.latlng.lat, e.latlng.lng]);
        setValues({ latlng: `${e.latlng.lat} ${e.latlng.lng}` });
    };

    const handleUpdate = () => {
        if (JSON.stringify(updatedLocation) === JSON.stringify([0, 0])) {
            alert('Select your position on the map first');
            return;
        }

        api.put(`/user/${userData.accessKey}`, values)
            .then(({ data }) => alert(data.message))
            .catch((error) => console.error(error));
    };

    return (
        <Container>
            {message ? (
                <Message>
                    <h3>{message}</h3>
                </Message>
            ) : (
                <div></div>
            )}
            <Wrapper>
                <ReportsDiv>
                    <Reports />
                </ReportsDiv>
                <MapDiv>
                    <h2>Last Location</h2>
                    <Map
                        lastLocation={lastLocation}
                        initialLocation={initialLocation}
                        handleMapClick={handleMapClick}
                        updatedLocation={updatedLocation}
                    />
                    <Button>
                        <span onClick={handleUpdate}>Update Location</span>
                    </Button>
                </MapDiv>
            </Wrapper>
        </Container>
    );
};
