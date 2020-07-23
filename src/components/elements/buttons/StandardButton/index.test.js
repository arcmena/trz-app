import React from 'react';
import { shallow } from 'enzyme';
import Button from './';

const essentialProps = {
    outlined: true,
    width: '60px',
    height: '35px',
};

describe('<Button/>', () => {
    it('should render the button', () => {
        const wrapper = shallow(<Button {...essentialProps} />);
        expect(wrapper.find('button').props()).toEqual({
            outlined: essentialProps.outlined,
            width: essentialProps.width,
            height: essentialProps.height,
        });
    });
});
