import {
    GET_PROJECTS,
    GET_PROJECT,
    SET_LOADING
} from '../types'


export default (state, action) => {
    switch(action.type){
        case GET_PROJECTS:
            return{
                ...state,
                projects: action.payload,
                loaidng: false
            }

            case GET_PROJECT:
                return {
                    project: action.payload,
                    laoding: false
                }
                case SET_LOADING:
                    return {
                        ...state,
                        laoding: true
                    }
                    default:
                        return state;
    }

}