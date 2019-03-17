import React from 'react';
import { mount } from 'enzyme';
import Paper from '../paper';
import { note, classes } from '../tests/fixtures';

describe('Paper', () => {
    const paper = mount(<Paper note={note} classes={classes}/>);
    it('renders a Paper title', () => {
        expect(paper.find('h3').text()).toEqual(note.title) 
    });
    it('renders a Paper content', () => {
        expect(paper.find('p').text()).toEqual(note.content)
    });
});