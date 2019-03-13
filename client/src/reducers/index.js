import { combineReducers } from 'redux';
import user from './user_reducer';
import notes from './notes_reducer';

const rootReducer = combineReducers({
    user,
    notes
});

export default rootReducer;