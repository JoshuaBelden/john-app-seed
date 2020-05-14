import { ALERT_CREATED, ALERT_DELETED } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case ALERT_CREATED:
            return [...state, payload];

        case ALERT_DELETED:
            return state.filter(alert => alert.id !== payload);
        default:
            return state;
    }
}