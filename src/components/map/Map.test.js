import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { Marker } from "react-google-maps";
import Map from './Map';
import GoogleMapPlanner from './google-map-planner/GoogleMapPlanner';

describe('Map', () => {
    it('should render component', () => {
        const component = shallow(<Map />);

        expect(component.find('h2').text()).to.equal('');
        expect(component.find(GoogleMapPlanner)).to.have.length(1);
    });

    it('should render map name', () => {
        const mapName = 'MAP NAME';
        const component = shallow(<Map name={mapName}/>);

        expect(component.find('h2').text()).to.equal(mapName);
    });

    it('should render only start marker if path length is not greater than 1', () => {
        const component = shallow(<Map path={[{lat: 50, lng: 90}]}/>);

        expect(component.find(Marker)).to.have.length(1);
    });

    it('should render end marker if path length is greater than 2', () => {
        const component = shallow(<Map path={[{lat: 50, lng: 90}, {lat: 51, lng: 91}]}/>);

        expect(component.find(Marker)).to.have.length(2);
    });
});