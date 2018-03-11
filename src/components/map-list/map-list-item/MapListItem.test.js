import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import MapListItem from './MapListItem';

describe('MapListItem', () => {
    it('should render component', () => {
        const component = shallow(<MapListItem />);

        expect(component.find('div').length).to.equal(3);
        expect(component.find('button').length).to.equal(2);
    });

    it('should render map name as an empty string if map is undefined', () => {
        const component = shallow(<MapListItem />);

        expect(component.find('div.map-list-item__name').text()).to.equal('');
    });

    it('should render map name if map is provided', () => {
        const map = {name: 'MAP NAME'};

        const component = shallow(<MapListItem map={map}/>);

        expect(component.find('div.map-list-item__name').text()).to.equal(map.name);
    });

    it('should click onDelete', () => {
        const propsSpy = { onDelete() {} };
        const onDeleteSpy = sinon.spy(propsSpy, 'onDelete');

        const component = shallow(<MapListItem onDelete={propsSpy.onDelete}/>);
        component.find('button.button--red').simulate('click');

        expect(onDeleteSpy.called).to.be.true;
    });

    it('should click onLoad', () => {
        const propsSpy = { onLoad() {} };
        const onDeleteSpy = sinon.spy(propsSpy, 'onLoad');

        const component = shallow(<MapListItem onLoad={propsSpy.onLoad}/>);
        component.find('button.button--blue').simulate('click');

        expect(onDeleteSpy.called).to.be.true;
    });
});