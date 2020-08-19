import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications', () => {
    const wrapper = shallow(<Notifications />);

    test('Notifications renders without crashing', () => {
        expect(wrapper.exists()).toEqual(true);
    })
    test('Notifications renders three list items', () => {
        const lis = wrapper.find('li');

        expect(lis.length).toEqual(3);
    })
    test('Notifications renders the correct text', () => {
        const the = wrapper.find('p');

        expect(the.text()).toEqual('Here is the list of notifications');
    });
});
