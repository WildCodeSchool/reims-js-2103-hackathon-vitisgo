import React from 'react'

import {Marker, Popup} from 'react-leaflet';
import {geolocated} from 'react-geolocated'


function MyPosition(props) {
    return (
        !props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : props.coords ? (
            <Marker position={[props.coords.latitude, props.coords.longitude]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        ) : (
            <div>Getting the location data&hellip; </div>
        )
    );
}

export default geolocated({
    positionOptions: {
        enabledHighAccuracy:false,
    },
    userDecisionTimeout: 5000,
})(MyPosition);
