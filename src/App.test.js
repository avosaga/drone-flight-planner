import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Map from './components/map/Map';
import MapList from './components/map-list/MapList';
import App from './App';

describe('App', () => {
    it('should render component', () => {
        const component = shallow(<App />);

        expect(component.state('storedMaps')).to.have.length(0);
        expect(component.state('path')).to.have.length(0);
        expect(component.state('name')).to.equal('');
        expect(component.find(Map)).to.have.length(1);
        expect(component.find(MapList)).to.have.length(1);
    });

    it('should add new map', () => {
        const component = shallow(<App />);

        component.instance().clickedOnNewHandler();

        expect(component.state('storedMaps')).to.have.length(1);
    });

    it('should add delete map', () => {
        const component = shallow(<App />);
        const instance = component.instance();
        instance.clickedOnNewHandler();
        const mapToBeDeleted = component.state('storedMaps')[0];

        expect(component.state('storedMaps')).to.have.length(1);

        instance.clickedOnDeleteHandler(mapToBeDeleted);

        expect(component.state('storedMaps')).to.have.length(0);
    });

    it('should change map name', () => {
        const mapName = 'MAP NAME';
        const component = shallow(<App />);
        expect(component.state('name')).to.equal('');

        component.instance().changedNameHandler({target: { value: mapName}});

        expect(component.state('name')).to.equal(mapName);
    });

    it('should add coordinates to path', () => {
        const lat = 1;
        const lng = 2;
        const component = shallow(<App />);

        expect(component.state('path')).to.have.length(0);

        component.instance().clickedOnMapHandler({latLng: {
            lat() { return lat },
            lng() { return lng },
        }});

        expect(component.state('path')).to.have.length(1);
        expect(component.state('path')[0].lat).to.equal(lat);
        expect(component.state('path')[0].lng).to.equal(lng);
    });

    it('should load map', () => {
        const name = 'MAP NAME';
        const path = [{}];
        const component = shallow(<App />);

        expect(component.state('path')).to.have.length(0);
        expect(component.state('name')).to.equal('');

        component.instance().clickedOnLoadHandler({
            name,
            path
        });

        expect(component.state('path')).to.have.length(path.length);
        expect(component.state('name')).to.equal(name);
    });
});


