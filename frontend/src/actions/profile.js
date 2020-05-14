import axios from 'axios';
import { MY_PROFILE_RETRIEVED, PROFILE_FAILED } from './types';
import { createAlert } from './alert';

export const getMyProfile = () => async dispatch => {
    try {
        const res = await axios.get(`/api/profile/me`);
        dispatch({
            type: MY_PROFILE_RETRIEVED,
            payload: res.data,
        });
    } catch (error) {
        if (error.response) {
            dispatch({
                type: PROFILE_FAILED,
                payload: {
                    message: error.response.statusText,
                    status: error.response.status
                },
            });
        } else {
            dispatch({
                type: PROFILE_FAILED,
                payload: {
                    message: error
                }
            })
        }
    }
}

export const updateProfile = (formData, history) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const res = axios.post('api/profile', formData, config);

        dispatch({
            type: MY_PROFILE_RETRIEVED,
            payload: res.data,
        });

        dispatch(createAlert('Your profile has been updated.', 'success'));

        history.push('/profile/me');
    } catch (error) {
        if (error.response) {
            dispatch({
                type: PROFILE_FAILED,
                payload: {
                    message: error.response.statusText,
                    status: error.response.status
                },
            });
        } else {
            dispatch({
                type: PROFILE_FAILED,
                payload: {
                    message: error
                }
            })
        }
    }
}