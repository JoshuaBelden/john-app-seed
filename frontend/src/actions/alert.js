import { ALERT_CREATED, ALERT_DELETED } from './types';
import { v4 as uuid } from 'uuid';

export const createAlert = (message, alertType, timeout = 3000) => dispatch => {
    const id = uuid();
    dispatch({
        type: ALERT_CREATED,
        payload: { message, alertType, id }
    });

    setTimeout(() => dispatch({ type: ALERT_DELETED, payload: id }), timeout);
};

export const deleteAlert = (alert) => dispatch => {
    dispatch({ type: ALERT_DELETED, payload: alert.id })
}
