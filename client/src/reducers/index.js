import { combineReducers } from 'redux';
import { reducer as modal } from 'redux-modal'
import user from './user_reducer';
import notes from './notes_reducer';

const rootReducer = combineReducers({
    modal,
    user,
    notes
});

export default rootReducer;