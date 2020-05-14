import { MY_PROFILE_RETRIEVED, PROFILE_FAILED } from '../actions/types';

const initialState = {
    myProfile: null,
    profiles: [],
    loading: true,
    error: {}
}

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case MY_PROFILE_RETRIEVED:
        return {
            ...state,
            myProfile: payload,
            loading: false
        };
        case PROFILE_FAILED:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
}