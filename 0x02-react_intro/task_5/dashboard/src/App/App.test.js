import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
    const wrapper = shallow(<App />);

    test('App renders without crashing', () => {
        expect(wrapper.exists()).toEqual(true);
    })
    test('App renders header div', () => {
        const header = wrapper.find('div.App-header');

        expect(header.exists()).toEqual(true);
    })
    test('App renders body div', () => {
        const body = wrapper.find('div.App-body');

        expect(body.exists()).toEqual(true);
    })
    test('App renders footer div', () => {
        const footer = wrapper.find('div.App-footer');

        expect(footer.exists()).toEqual(true);
    })
})