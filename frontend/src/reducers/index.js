import { combineReducers } from 'redux';
import alertData from './alert';
import authData from './auth';
import profileData from './profile';

export default combineReducers({
    alertData,
    authData,
    profileData
});
