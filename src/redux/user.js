import * as ActionTypes from './ActionTypes';

export const User = (state = { isLoading: true, errMess: null,user:{}}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LOGIN:
            return {...state, isLoading: false, errMess: null, user: action.payload};
        default:
            return state;
    }
};