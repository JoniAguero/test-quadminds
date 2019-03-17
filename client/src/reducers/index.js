import { combineReducers } from 'redux';

import { reducer as modal } from 'redux-modal'
import { reducer as form } from 'redux-form'
import { snackbarReducer } from 'material-ui-snackbar-redux'
 
import notes from './notes_reducer';

const rootReducer = combineReducers({
    modal,
    form,
    snackbar: snackbarReducer,
    notes
});

export default rootReducer;