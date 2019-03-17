import React from 'react';
import { mount } from 'enzyme';
import Footer from './index';

const props = { title: 'Created by Joni Aguero' }

describe('Footer', () => {
    console.log(props);
    
    let footer = mount(<Footer {...props} />);

    it('renders the Footer title', () => {
        expect(footer.find('p').text()).toEqual(props.title);   
    })

});