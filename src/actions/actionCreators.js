import { SET_TOTAL, INPUT_CHANGE } from './actionConst';

export const setTotal = (total) => {
    return {
        type: SET_TOTAL,
        payload: total
    };
};

export const inputChange = (input) => {
    return {
        type: INPUT_CHANGE,
        payload: input
    };
};