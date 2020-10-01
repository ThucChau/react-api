import { combineReducers } from 'redux';
import postReducer from './post';
import userReducer from './user';
import authReducer from './auth';
import appReducer from './app';

const rootReducer = combineReducers({
    Post: postReducer,
    User: userReducer,
    Auth: authReducer,
    App: appReducer,
})

export default rootReducer;