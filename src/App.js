import React, { Component } from 'react';

import './App.css';
import MapList from './components/map-list/MapList';
import Map from './components/map/Map';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            storedMaps: [],
            name: '',
            path: []
        };
    }

    clickedOnNewHandler = () => {
        const newMap = this._createNewMap();

        const storedMaps = [...this.state.storedMaps];
        storedMaps.unshift(newMap);

        this.setState({
            storedMaps,
            name: '',
            path: []
        })
    }

    changedNameHandler = event => this.setState({ name: event.target.value });

    clickedOnMapHandler = event => {
        const path = [...this.state.path];
        path.push({
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
        });
        this.setState({ path });
    }

    clickedOnLoadHandler = map => {
        this.setState({
            name: map.name,
            path: [...map.path]
        });
    }

    clickedOnDeleteHandler = map => {
        const storedMaps = this.state.storedMaps.filter(storedMap => storedMap.id !== map.id);
        let name = '',
            path = [];

        if(storedMaps.length > 0) {
            const map = storedMaps[0];
            name = map.name;
            path = map.path;
        }

        this.setState({
            storedMaps,
            name,
            path
        });
    }

    render() {
        return (
            <div className="app">
                <div className="app__list">
                    <MapList maps={this.state.storedMaps}
                             name={this.state.name}
                             changedName={this.changedNameHandler}
                             clickedOnNew={this.clickedOnNewHandler}
                             clickedOnLoad={this.clickedOnLoadHandler}
                             clickedOnDelete={this.clickedOnDeleteHandler} />
                </div>
                <div className="app__content">
                    <Map name={this.state.name}
                         path={this.state.path}
                         clickedOnMap={this.clickedOnMapHandler} />
                </div>
            </div>
        );
    }

    _createNewMap = (name = this.state.name, path = this.state.path) => {
        return {
            name,
            path,
            id: new Date().getTime()
        }
    }
}

export default App;
