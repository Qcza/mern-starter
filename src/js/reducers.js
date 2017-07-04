import { combineReducers } from 'redux';
import { CHANGE_COLOR } from './actionTypes';

function changeColorReducer (state=null, action) {
    switch (action.type) {
        case CHANGE_COLOR:
            return action.color;
        default:
            return state
    }
}

export default combineReducers ({
    color: changeColorReducer
})