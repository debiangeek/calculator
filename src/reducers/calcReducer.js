import { INPUT, LASTINPUT, FORMULA, IS_SOLVED } from './../actions/actionConst';

let initialState = {
    input: '',
    lastInput: '',
    formula: '',
    solved: false
};

export default function calcReducer (state = initialState, action) {
    switch (action.type) {
        case INPUT:
            return {
                ...state,
                input: action.payload
            };
        case LASTINPUT:
            return {
                ...state,
                lastInput: action.payload
            };
        case FORMULA:
            return {
                ...state,
                formula: action.payload
            };
        case IS_SOLVED:
            return {
                ...state,
                solved: action.payload
            };
        default:
            return state;
    };
};
