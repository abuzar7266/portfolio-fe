import * as ActionTypes from './ActionTypes';
import { PROJECTS } from '../shared/Projects';
import axios from 'axios';
export const addProject = (Files) => ({
    type: ActionTypes.ADD_PROJECTS,
    payload: 
    {
        files:Files
    }
});


export const fetchProjects = () => (dispatch) => {

    dispatch(projectsLoading(true));

    setTimeout(() => {
        const config = 
        {
            headers:{
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }
        axios.get('project')
        .then(projects=>{
            dispatch(addProject(projects.data));
        })
    }, 10);
}
export const fetchUser = () => (dispatch) => {

    dispatch(userLoading(true));

    setTimeout(() => {
            const config = {
                headers:{
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }
            axios.get('users',config)
            .then(res=>{
                dispatch(addUser(res));
            });
    }, 10);
}

export const projectsLoading = () => ({
    type: ActionTypes.PROJECTS_LOADING
});

export const projectsFailed = (errmess) => ({
    type: ActionTypes.PROJECTS_FAILED,
    payload: errmess
});

export const addProjects = (projects) => ({
    type: ActionTypes.ADD_PROJECTS,
    payload: projects
});


export const addUser = (user)=>({
    type:ActionTypes.ADD_LOGIN,
    payload:user
});

export const userLoading = ()=>({
    type: ActionTypes.LOGIN_LOADING
});