import React from 'react';
import { shallow } from 'enzyme';
import Input from './';

const essentialProps = {
    type: 'text',
    id: 'button',
    name: 'namedbutton',
    placeholder: 'sometext',
    readOnly: true,
    value: 'sometest',
};

describe('<Input/>', () => {
    it('should render as expected', () => {
        const wrapper = shallow(<Input {...essentialProps} />);
        expect(wrapper).toMatchSnapshot();
    });
    it('should render the input', () => {
        const wrapper = shallow(<Input {...essentialProps} />);
        expect(wrapper.find('input').props()).toEqual({
            type: essentialProps.type,
            id: essentialProps.id,
            name: essentialProps.name,
            placeholder: essentialProps.placeholder,
            readOnly: essentialProps.readOnly,
            value: essentialProps.value,
        });
    });
});
