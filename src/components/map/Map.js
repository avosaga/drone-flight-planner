import React from 'react';
import { Polyline, Marker } from "react-google-maps"
import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer';

import GoogleMapPlanner from './google-map-planner/GoogleMapPlanner';

const Map = props => {
    let startMarker = null,
        endMarker = null;

    if(props.path && props.path.length > 0) {
        startMarker = <Marker key={0} position={props.path[0]} label="1" />

        if(props.path.length > 1) {
            endMarker = <Marker key={1} position={props.path[props.path.length - 1]} label={String(props.path.length)}/>
        }
    }

    return (
        <div>
            <h2>{props.name}</h2>
            <GoogleMapPlanner
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{height: '100%'}}/>}
                containerElement={<div style={{height: `${window.innerHeight}px`}}/>}
                mapElement={<div style={{height: '100%'}}/>}
                clickedOnMap={props.clickedOnMap}>
                <MarkerClusterer>
                    {[startMarker, endMarker]}
                </MarkerClusterer>
                <Polyline path={props.path}
                          options={{
                              geodesic: true,
                              strokeColor: '#FF0000',
                              strokeOpacity: 1.0,
                              strokeWeight: 2
                          }}/>
            </GoogleMapPlanner>
        </div>
    );
};

export default Map;