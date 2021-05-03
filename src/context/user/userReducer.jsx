import {
    GET_LOGGEDIN_USER,
    GET_USER_PROJECTS,
    GET_USER_PROJECT,
    SET_LOADING
} from '../types';


export default (state, action) => {

    switch(action.type){
        case GET_LOGGEDIN_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case GET_USER_PROJECTS:
            return {
                ...state,
                projects: action.payload,
                loading: false
            }
        case GET_USER_PROJECT:
            return {
                ...state,
                project: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default: 
        return state;
    }

}