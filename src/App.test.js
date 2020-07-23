import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App/>', () => {
    it('shoud render the app', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Routes'));
        expect(wrapper.find('GlobalStyles'));
    });
});
