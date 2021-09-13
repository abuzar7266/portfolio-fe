import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Projects } from './Project';
import { User } from './user';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers
        ({
            projects:Projects,
            user:User
        }),
        applyMiddleware(thunk)
    );

    return store;
}