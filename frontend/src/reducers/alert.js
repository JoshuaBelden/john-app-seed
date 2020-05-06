import { SET_ALERT, DISMISS_ALERT } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case SET_ALERT:
            return [...state, payload];

        case DISMISS_ALERT:
            return state.filter(alert => alert.id !== payload);
        default:
            return state;
    }
}