import {
    SET_NOTES, NEW_NOTE, SET_NOTE_BY_ID, CLEAR_NOTE_DETAIL
} from '../actions/types';
 

export default function(state={}, action){

    switch(action.type){
        case SET_NOTES:
            return {...state, notes: action.payload }
        case SET_NOTE_BY_ID:
            return {...state, notes: action.payload }
        case NEW_NOTE:
            return {...state, notes: action.payload }
        case CLEAR_NOTE_DETAIL:
            return {...state, prodDetail: action.payload }
        default:
            return state;
    }
}