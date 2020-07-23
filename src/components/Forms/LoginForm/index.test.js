import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './';
import { Button } from '../../';

const essentialProps = {
    onChange: jest.fn(),
    onSubmit: jest.fn(),
};

describe('<LoginForm/>', () => {
    it('should render as expected', () => {
        const wrapper = shallow(<LoginForm {...essentialProps} />);
        expect(wrapper).toMatchSnapshot();
    });
    it('should render the form', () => {
        const wrapper = shallow(<LoginForm {...essentialProps} />);
        expect(wrapper.find('input').props()).toEqual({
            type: 'text',
            name: 'accessKey',
            placeholder: 'Identification',
        });
        expect(wrapper.find('KeyIcon'));
        expect(wrapper.find(Button).childAt(0).text()).toBe('LOGIN');
    });
    it('should call onChange when the value of the input changes', () => {
        const wrapper = shallow(<LoginForm {...essentialProps} />);
        essentialProps.onChange.mockReset();
        wrapper.find('input').simulate('change');
        expect(essentialProps.onChange);
    });
    it('should call onClick when the buttonis pressed', () => {
        const wrapper = shallow(<LoginForm {...essentialProps} />);
        essentialProps.onChange.mockReset();
        wrapper.find(Button).simulate('click');
        expect(essentialProps.onChange);
    });
});
