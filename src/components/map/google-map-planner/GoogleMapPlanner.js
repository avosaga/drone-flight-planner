import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"

const GoogleMapPlanner = withScriptjs(withGoogleMap(props => {
    return (
        <GoogleMap
            defaultZoom={15}
            defaultCenter={{ lat: 52.5095668, lng: 13.4048139 }} //Pix4d Berlin office
            onClick={props.clickedOnMap}>
            {props.children}
        </GoogleMap>
    );
}));

export default GoogleMapPlanner;