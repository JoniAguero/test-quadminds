import {
    SET_NOTES
} from '../actions/types';
 

export default function(state={},action){
    switch(action.type){
        case SET_NOTES:
            return {...state, notes: action.payload }
        default:
            return state;
    }
}