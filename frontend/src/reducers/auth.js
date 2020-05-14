import {
    REGISTRATION_CREATED,
    REGISTRATION_FAILED,
    USER_LOADED,
    AUTHORIZATION_FAILED,
    LOGIN_SUCCEDED,
    LOGIN_FAILED,
    LOGOUT_SUCCEDED,
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            };
        case REGISTRATION_CREATED:
        case LOGIN_SUCCEDED:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            };

        case REGISTRATION_FAILED:
        case LOGIN_FAILED:
        case AUTHORIZATION_FAILED:
        case LOGOUT_SUCCEDED:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            };
        default:
            return state;
    }
}