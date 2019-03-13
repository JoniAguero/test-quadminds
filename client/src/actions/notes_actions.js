import axios from 'axios';
import {
    SET_NOTES, NEW_NOTE
} from './types';

import {
    NOTES_SERVER
} from '../components/utils/misc';


export function getNotes() {
    const request = axios.get(`${NOTES_SERVER}/all`)
        .then(response => response.data);

    return {
        type: SET_NOTES,
        payload: request
    }

}

export function newNote() {
    console.log('action new note');

    const request = axios.post(`${NOTES_SERVER}/new`)
        .then(response => response.data);

    return {
        type: NEW_NOTE,
        payload: request
    }

}