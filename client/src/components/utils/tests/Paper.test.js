import React from 'react';
import { shallow } from 'enzyme';
import Paper from '../paper';

describe('Paper', () => {
    const paper = shallow(<Paper/>);
    it('renders a Paper', () => {
        console.log(paper.debug());
    })
    
});