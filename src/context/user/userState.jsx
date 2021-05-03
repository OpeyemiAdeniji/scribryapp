import React, { useReducer } from 'react';
import Axios from 'axios';
import UserContext from './userContext';
import UserReducer from './userReducer';

import {
    GET_LOGGEDIN_USER,
    GET_USER_PROJECTS,
    GET_USER_PROJECT,
    SET_LOADING,
} from '../types';

const UserState = props => {

    const initialState = {
        user: {},
        projects: [],
        project: {},
        loading: false
    }

    const config = {
        headers: {
            ContentType: 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
    };

    const [state, dispatch] = useReducer(UserReducer, initialState);

    const getUser = async() => {

        
        setLoading();

        await Axios.get(`${process.env.REACT_APP_API_URL}/auth/user`, config)
        .then((resp) => {
            dispatch({
                type: GET_LOGGEDIN_USER,
                payload: resp.data.data
            });

            

        })
        .catch((err) => {
            console.log(`Could not get loggedin user ${err}`);
        })
    }

    const getProjects = async(id) => {

        setLoading();

        await Axios.get(`${process.env.REACT_APP_API_URL}/projects/user/${id}`, config)
        .then((resp) => {

            dispatch({
                type: GET_USER_PROJECTS,
                payload: resp.data.data
            });

        })
        .catch((err) => {
            console.log(`Could not get user projects ${err}`);
        })
    }

    const getProject = async(id) => {

        setLoading();

        if(state.projects.length > 0){
            const p = state.projects.find((i) => i._id === id);
            dispatch({
                type: GET_USER_PROJECT,
                payload: p
            });
        }else{
            dispatch({
                type: GET_USER_PROJECT,
                payload: {}
            });
        }
    }

    // set loading
    const setLoading = () => dispatch({type: SET_LOADING })

    return <UserContext.Provider 
        value={{
            user: state.user,
            projects: state.projects,
            project: state.project,
            loading: state.loading,
            getProjects,
            getProject,
            getUser
        }}
    >
        { props.children }
    </UserContext.Provider>
}

export default UserState;
