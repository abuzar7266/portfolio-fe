import * as ActionTypes from './ActionTypes';
import { PROJECTS } from '../shared/Projects';

export const Projects = (state = { isLoading: true, errMess: null,projects:PROJECTS}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PROJECTS:
            return {...state, isLoading: false, errMess: null, projects: action.payload};
        default:
            return state;
    }
};