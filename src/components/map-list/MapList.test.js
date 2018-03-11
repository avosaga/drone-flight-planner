import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import MapList from './MapList';
import MapListItem from './map-list-item/MapListItem';

describe('MapList', () => {
    it('should render component without maps', () => {
        const component = shallow(<MapList />);

        expect(component.find(MapListItem)).to.have.length(0);
    });

    it('should render component with maps', () => {
        const numberOfMaps = 3;
        const maps = createMaps(numberOfMaps);

        const component = shallow(<MapList maps={maps}/>);

        expect(component.find(MapListItem)).to.have.length(numberOfMaps);
    });

    it('should click clickedOnNew', () => {
        const props = { clickedOnNew() {} };
        const spy = sinon.spy(props, 'clickedOnNew');

        const component = shallow(<MapList clickedOnNew={props.clickedOnNew}/>);
        component.find('button').simulate('click');

        expect(spy.called).to.be.true;
    });

    it('should trigger callback while changing name', () => {
        const props = { changedName() {} };
        const spy = sinon.spy(props, 'changedName');

        const component = shallow(<MapList changedName={props.changedName}/>);
        component.find('input.map-list__input').simulate('change');

        expect(spy.called).to.be.true;
    });

    function createMaps(n) {
        const maps = [];
        for(let i = 0; i < n; i++) {
            maps.push({
                id: i,
                name: `Map Name ${i + 1}`,
                path: []
            });
        }
        return maps;
    }
});