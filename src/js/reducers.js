import { combineReducers } from 'redux';
import { CHANGE_COLOR, GET_TEXT } from './actionTypes';

function changeColorReducer (state=null, action) {
    switch (action.type) {
        case CHANGE_COLOR:
            return action.color;
        default:
            return state
    }
}

function getTextReducer (state=null, action) {
    switch (action.type) {
        case GET_TEXT:
            return action.text;
        default:
            return state
    }
}

export default combineReducers ({
    color: changeColorReducer,
    text: getTextReducer
})