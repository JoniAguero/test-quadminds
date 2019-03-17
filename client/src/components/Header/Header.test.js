import React from 'react';
import { mount } from 'enzyme';
import Header from './index';

const props = { title: 'Quadmins Test' }

describe('Header', () => {
    console.log(props);
    
    let header = mount(<Header {...props} />);

    it('renders the header title', () => {
        expect(header.find('h1').text()).toEqual(props.title);   
    })

});