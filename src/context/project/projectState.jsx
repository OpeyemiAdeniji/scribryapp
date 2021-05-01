import React, {useContext, useReducer, useState} from 'react'
import ProjectContext from './projectContext'
import ProjectReducer from './projectReducer'
import Axios from 'axios';
import {
    GET_PROJECT,
    GET_PROJECTS,
    SET_LOADING
} from '../types';



const ProjectState = props => {

    const initialState = {
        projects: [],
        project: {},
        loading: false
    }

    const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
    };

    const [state, dispatch] = useReducer(ProjectReducer, initialState);

    const getProjects = async() => {

        setLoading();

        await Axios.get(`${process.env.REACT_APP_API_URL}/projects`, config)
        .then((resp) => {

            dispatch({
                type: GET_PROJECT,
                payload: resp.data.data
            });


          

        })
        .catch((err) => {
            console.log(`Could not get projects ${err}`);
        })
    }
 
    
    const getProject = async(projectId) => {
        setLoading();

        await Axios.get(`${process.env.REACT_APP_API_URL}/projects/${projectId}`, config)
        .then((resp) => {

            dispatch({
                type: GET_PROJECT,
                payload: resp.data.data
            });

        })
        .catch((err) => {
            console.log(`Could not get parent ${err}`);
        })
    }
    // set Loading
    const setLoading = () => dispatch({type:SET_LOADING})

    return <ProjectContext.Provider
    value={{
        project: state.projects,
        projects: state.projects,
        loading: state.loading,
    
        getProjects,
        getProject
    }}
    >
        {props.children}
    </ProjectContext.Provider>
}

export default ProjectState;