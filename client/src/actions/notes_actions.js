import axios from 'axios';
import {
    SET_NOTES
} from './types';

import {
    NOTES_SERVER
} from '../components/utils/misc';


export function getNotes() {
    console.log('action notes');

    const request = axios.get(`${NOTES_SERVER}/all`)
        .then(response => response.data);

    return {
        type: SET_NOTES,
        payload: request
    }

}