import React, {useContext, useReducer, useState} from 'react';
import ServiceContext from './serviceContext';
import ServiceReducer from './serviceReducer';
import Axios from 'axios';
import { 
    GET_SERVICES,
    GET_SERVICE,
    SET_LOADING
 } from '../types';


const ServiceState = (props) => {

    const initialState = {
        services: [],
        service: {},
        loading: false
    }

    const [state, dispatch] = useReducer(ServiceReducer, initialState);

    const getServices = async () => {
        setLoading();

        await Axios.get(`${process.env.REACT_APP_API_URL}/services`)
        .then((resp) => {
            dispatch({
                type: GET_SERVICES,
                payload: resp.data.data
            })
        }).catch((err) => {
            console.log(`Could not get services ${err}`);
        })
    }

    const getService = async (id) => {
        setLoading();

        await Axios.get(`${process.env.REACT_APP_API_URL}/services/${id}`)
        .then((resp) => {
            dispatch({
                type: GET_SERVICE,
                payload: resp.data.data
            })
        }).catch((err) => {
            console.log(`Could not get service ${err}`);
        })
    }

    const setLoading = () => {
        dispatch({
            type: SET_LOADING
        })
    }

    return <ServiceContext.Provider
        value={{
            services: state.services,
            service: state.service,
            loading: state.loading,
            getServices,
            getService
        }}
    >
        {props.children}
    </ServiceContext.Provider>

}

export default ServiceState;