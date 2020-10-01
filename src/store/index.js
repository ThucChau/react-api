import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducer';

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk, loggerMiddleware))
);

export default store;