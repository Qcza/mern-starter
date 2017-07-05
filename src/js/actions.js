import { CHANGE_COLOR, GET_TEXT } from './actionTypes';
import fetch from 'isomorphic-fetch';

export const changeColor = (color) => {
    return {type: CHANGE_COLOR, color}
};

const getText = (text) => {
    return {type: GET_TEXT, text}
};

export const fetchText = () => {
    return dispatch => {
        return fetch('/texts')
            .then((res)=>res.json())
            .then((json)=>dispatch(getText(json[0].text)))
    }
};