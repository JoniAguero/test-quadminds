import * as types from '../actions/types';
import rootReducer from './index';
import { rootReducerTest, notes } from '../components/utils/tests/fixtures';

describe('Notes Reducer', () => {

    it('returns the initial state', () => {
        expect(rootReducer({}, {}, {}, {})).toEqual(rootReducerTest);
    })

    xit('sets notes', () => {
        expect(rootReducer(rootReducer, {type: types.SET_NOTES, notes:{ ...notes}})).toEqual({...rootReducerTest, notes});
    })
    
});