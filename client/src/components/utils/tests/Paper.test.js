import React from 'react';
import { mount } from 'enzyme';
import Paper from '../paper';
import { Note, Classes } from '../tests/fixtures';

describe('Paper', () => {
    const paper = mount(<Paper {...Note} {...Classes}/>);
    it('renders a Paper title', () => {
        expect(paper.find('h3').text()).toEqual(Note.note.title) 
    });
    it('renders a Paper content', () => {
        expect(paper.find('p').text()).toEqual(Note.note.content)
    });
});