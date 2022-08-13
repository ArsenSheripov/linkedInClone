import { combineReducers } from 'redux';
import userReducer from './userReducer';

export const rootReducer = combineReducers({
	userState: userReducer,
})