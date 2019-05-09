import { INPUT, LASTINPUT, FORMULA, IS_SOLVED } from './actionConst';

export const inputAction = (input) => {
    return {
        type: INPUT,
        payload: input
    };
};

export const lastInputAction = (lastinput) => {
    return {
        type: LASTINPUT,
        payload: lastinput
    };
};

export const formulaAction = (formula) => {
    return {
        type: FORMULA,
        payload: formula
    };
};

export const isSolvedAction = (value) => {
    return {
        type: IS_SOLVED,
        payload: value
    };
};