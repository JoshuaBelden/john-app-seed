import { SET_ALERT, DISMISS_ALERT } from './types';
import { v4 as uuid } from 'uuid';

export const setAlert = (msg, alertType, timeout = 3000) => dispatch => {
    const id = uuid();
    dispatch({
        type: SET_ALERT,
        payload: { msg, alertType, id }
    });

    setTimeout(() => dispatch({ type: DISMISS_ALERT, payload: id }), timeout);
};

export const dismissAlert = (alert) => dispatch => {
    dispatch({ type: DISMISS_ALERT, payload: alert.id })
}
