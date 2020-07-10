import themeReducer from './themeReducer';
import authReducer from './authReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    theme: themeReducer,
    auth: authReducer
})

export default allReducers;