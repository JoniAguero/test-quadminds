import {
    SET_NOTES, NEW_NOTE
} from '../actions/types';
 

export default function(state={}, action){

    switch(action.type){
        case SET_NOTES:
            return {...state, notes: action.payload }
        case NEW_NOTE:
            return {...state, notes: action.payload }
        default:
            return state;
    }
}