import React from 'react';
import { shallow } from 'enzyme';
import { Notes } from './Notes';
import { notes } from '../components/utils/tests/fixtures';

const notesNull = { notes: [] };

describe('Notes Container', () => {
    let notesWrapper = shallow(<Notes notes={notes} />);

    xit('renders a Notes title', () => {
        expect(notesWrapper.find('Typography').at(0).text()).toEqual('Listado de notas');
    });
    it('renders a Notes length', () => {
         expect(notesWrapper.find('.note').length).toEqual(notes.notes.length);
    });
    describe('Notes Container with 0 length', () => {
        beforeEach(() => {
            notesWrapper = shallow(<Notes notes={notesNull} />);
        })
        it('renders a Notes length', () => {
            expect(notesWrapper.find('.note').length).toEqual(0);
        });
    })
});