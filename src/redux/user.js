import * as ActionTypes from './ActionTypes';

export const User = (state = { isLoading: true, errMess: null,user:{
    data:{
        _id:"",
        username:"",
    }



}}, action) => {

    switch (action.type) {
        case ActionTypes.ADD_LOGIN:
            return {isLoading: false, errMess: null, user: 
            {
                data:{_id:action.payload.data._id,username:action.payload.data.username}
            }  
        };
        default:
            return state;
    }
};