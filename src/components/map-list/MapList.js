import React from 'react';

import MapListItem from './map-list-item/MapListItem';

import './MapList.css';

const MapList = props => {
    let mapListItems = <div>No Data Stored</div>;

    if(props.maps && props.maps.length > 0) {
        mapListItems = props.maps.map(map => <MapListItem key={map.id}
                                                          map={map}
                                                          onLoad={props.clickedOnLoad}
                                                          onDelete={props.clickedOnDelete}/>);
    }

    return (
        <div className="map-list">
            <div className="map-list__title">
                <h1>Flight Plans List</h1>
                <input type="text" className="map-list__input" onChange={props.changedName} value={props.name}/>
                <button className="button" onClick={props.clickedOnNew}>
                    <i className="fas fa-plus" title="New Map"></i>
                </button>
            </div>
            {mapListItems}
        </div>
    );
};

export default MapList;