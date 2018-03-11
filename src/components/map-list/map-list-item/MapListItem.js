import React from 'react';

import './MapListItem.css';

const MapListItem = (props) => {
    const name = (props.map) ? props.map.name : '';
    return (
        <div className="map-list-item">
            <div className="map-list-item__name">
                {name}
            </div>
            <div>
                <button className="button button--blue" onClick={() => props.onLoad(props.map)}>
                    <i className="fas fa-map" title="Load Map"></i>
                </button>
                <button className="button button--red" onClick={() => props.onDelete(props.map)}>
                    <i className="fas fa-trash" title="Delete Map"></i>
                </button>
            </div>
        </div>
    );
};

export default MapListItem;