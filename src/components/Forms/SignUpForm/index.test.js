import React from 'react';
import { shallow } from 'enzyme';
import SignUpForm from './';
import { Button } from '../../';

const essentialProps = {
    onChange: jest.fn(),
    onClick: jest.fn(),
    onChangeItems: jest.fn(),
};

describe('<SignUpForm/>', () => {
    it('should render as expected', () => {
        const wrapper = shallow(<SignUpForm {...essentialProps} />);
        expect(wrapper).toMatchSnapshot();
    });
    it('should render the form', () => {
        const wrapper = shallow(<SignUpForm {...essentialProps} />);
        essentialProps.onChange.mockReset();
        expect(wrapper.find('form').props()).toEqual({
            onChange: essentialProps.onChange,
        });

        expect(wrapper.find('h2').text()).toBe('Sign Up');
        expect(wrapper.find('span').text()).toBe('Survivor!');
        expect(wrapper.find('label').props()).toEqual({
            htmlFor: 'name',
        });
    });
});
