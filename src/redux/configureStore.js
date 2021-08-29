import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Projects } from './Project';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers
        ({
            projects:Projects
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}