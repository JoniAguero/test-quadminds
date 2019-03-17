import React from 'react';
import { shallow } from 'enzyme';
import { Note } from './index';

const props = { note: {
    _id: 1
} }

describe('Note', () => {
    const note = shallow(<Note {...props } />);
    it('renders a Paper container', () => {
        expect(note.find('.container-note-paper').exists()).toBe(true);
    })
    it('renders a Button container', () => {
        expect(note.find('.container-note-buttons').exists()).toBe(true);
    })
});