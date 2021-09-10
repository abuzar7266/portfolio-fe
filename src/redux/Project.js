import * as ActionTypes from './ActionTypes';
import { PROJECTS } from '../shared/Projects';

export const Projects = (state = { isLoading: true, errMess: null,projects:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PROJECTS:
            return {isLoading: false, errMess: null, projects: [...action.payload.files]};
        default:
            return state;
    }
};