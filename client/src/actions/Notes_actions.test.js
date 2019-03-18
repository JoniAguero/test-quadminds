import * as actions from './notes_actions';
import * as types from './types';
import { notes, note } from '../components/utils/tests/fixtures';

describe('Note Actions', () => {

    test('creates an action to set the notes', async () => {
        expect.assertions(1);
        const expectedAction = {
            type: types.SET_NOTES,
            payload: notes
        }
        const data = await actions.getNotesTest(notes);

        expect(data).toEqual(expectedAction);
    });

    test('creates an action to set the note by id', async () => {
        expect.assertions(1);
        const expectedAction = {
            type: types.SET_NOTE_BY_ID,
            payload: note
        }
        const data = await actions.getNoteByIdTest(note);

        expect(data).toEqual(expectedAction);
    });
    
});