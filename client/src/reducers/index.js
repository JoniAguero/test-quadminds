import { combineReducers } from 'redux';

import { reducer as modal } from 'redux-modal'
import { reducer as form } from 'redux-form'

import user from './user_reducer';
import notes from './notes_reducer';

const rootReducer = combineReducers({
    modal,
    form,
    user,
    notes
});

export default rootReducer;