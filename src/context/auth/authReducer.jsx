import { get } from 'jquery';
import {
    GET_LOGGEDIN_USER,
    GET_LOGGEDIN_USER_TYPE,
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
        case GET_LOGGEDIN_USER_TYPE:
            return {
                ...state,
                userType: action.payload,
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