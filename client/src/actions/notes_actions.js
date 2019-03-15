import axios from 'axios';
import {
    SET_NOTES, NEW_NOTE, SET_NOTE_BY_ID, CLEAR_NOTE_DETAIL, REMOVE_NOTE_BY_ID, UPDATE_NOTE_BY_ID
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

export function getNoteById(id) {

    const request = axios.get(`${NOTES_SERVER}/by_id?id=${id}`)
        .then(response => {
            return response.data
        });

    return {
        type: SET_NOTE_BY_ID,
        payload: request
    }

}

export function updateNoteById(id, datatoSubmit) {

    const request = axios.put(`${NOTES_SERVER}/update?id=${id}`, datatoSubmit)
        .then(response => {
            return response.data
        });

    return {
        type: UPDATE_NOTE_BY_ID,
        payload: request
    }

}

export function removeNoteById(id) {

    const request = axios.delete(`${NOTES_SERVER}/remove?id=${id}`)
        .then(response => {
            return response.data
        });

    return {
        type: REMOVE_NOTE_BY_ID,
        payload: request
    }

}

export function clearNoteDetail() {
    return {
        type: CLEAR_NOTE_DETAIL,
        payload: ''
    }
}

export function newNote(datatoSubmit) {

    const request = axios.post(`${NOTES_SERVER}/new`, datatoSubmit)
        .then(response => response.data);

    return {
        type: NEW_NOTE,
        payload: request
    }

}