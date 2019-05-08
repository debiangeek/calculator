import { SET_TOTAL, INPUT_CHANGE } from './../actions/actionConst';

let initialState = {
    input: '',
    total: ''
};

export default function calcReducer (state = initialState, action) {
    switch (action.type) {
        case SET_TOTAL:
            return {
                input: state.input,
                total: action.payload
            };
        case INPUT_CHANGE:
            return {
                input: action.payload,
                total: state.total
            };
        default:
            return state;
    };
};