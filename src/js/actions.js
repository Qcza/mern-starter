import { CHANGE_COLOR } from './actionTypes';

export const changeColor = (color) => {
    return {type: CHANGE_COLOR, color}
};