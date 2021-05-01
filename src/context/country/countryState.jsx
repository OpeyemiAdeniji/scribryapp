import React, {useContext, useReducer, useState} from 'react';
import CountryContext from './countryContext';
import CountryReducer from './countryReducer';
import Axios from 'axios';
import { 
    GET_COUNTRIES,
    GET_COUNTRY,
    SET_LOADING
 } from '../types';


const CountryState = (props) => {

    const initialState = {
        countries: [],
        country: {},
        loading: false
    }

    const [state, dispatch] = useReducer(CountryReducer, initialState);

    const getCountries = async () => {
        setLoading();

        await Axios.get(`${process.env.REACT_APP_API_URL}/countries?limit=9999&sort=-desc`)
        .then((resp) => {
            dispatch({
                type: GET_COUNTRIES,
                payload: resp.data.data
            })
        }).catch((err) => {
            console.log(`Could not get countries ${err}`);
        })
    }

    const getCountry = async (id) => {
        setLoading();

        await Axios.get(`${process.env.REACT_APP_API_URL}/countries/${id}`)
        .then((resp) => {
            dispatch({
                type: GET_COUNTRY,
                payload: resp.data.data
            })
        }).catch((err) => {
            console.log(`Could not get country ${err}`);
        })
    }

    const setLoading = () => {
        dispatch({
            type: SET_LOADING
        })
    }

    return <CountryContext.Provider
        value={{
            countries: state.countries,
            country: state.country,
            loading: state.loading,
            getCountries,
            getCountry
        }}
    >
        {props.children}
    </CountryContext.Provider>

}

export default CountryState;