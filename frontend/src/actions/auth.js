import axios from 'axios';
import { createAlert } from './alert';
import {
    REGISTRATION_CREATED,
    REGISTRATION_FAILED,
    USER_LOADED,
    AUTHORIZATION_FAILED,
    LOGIN_SUCCEDED,
    LOGIN_FAILED,
    LOGOUT_SUCCEDED,
} from './types';
import setAuthToken from '../utils/setAuthToken';

// LOAD USER
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('/api/auth');
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({ type: AUTHORIZATION_FAILED });
    }
};

// Register User
export const createRegistration = ({ name, email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ name, email, password });
    try {
        const res = await axios.post('api/users', body, config);

        dispatch({
            type: REGISTRATION_CREATED,
            payload: res.data
        });
    } catch (error) {
        if (error.response) {
            const errors = error.response.data.errors;
            if (errors) {
                errors.forEach(error => dispatch(createAlert(error.message, 'danger')));
            }
        } else {
            console.log(error);
        }

        dispatch({
            type: REGISTRATION_FAILED
        });
    }
};

// Login User
export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post('api/auth', body, config);
        dispatch({
            type: LOGIN_SUCCEDED,
            payload: res.data
        });
        dispatch(loadUser());
    } catch (error) {
        if (error.response) {
            const errors = error.response.data.errors;
            if (errors) {
                errors.forEach(error => dispatch(createAlert(error.message, 'danger')));
            }
        } else {
            console.log(error);
        }

        dispatch({
            type: LOGIN_FAILED
        });
    }
};

// logout user
export const logout = () => dispatch => {
    dispatch({ type: LOGOUT_SUCCEDED });
};
