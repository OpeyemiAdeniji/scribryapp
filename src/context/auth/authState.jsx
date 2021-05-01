import React, { useReducer } from 'react';
import Axios from 'axios';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

import {
    GET_LOGGEDIN_USER,
    GET_LOGGEDIN_USER_TYPE,
    SET_LOADING,
} from '../types';

const AuthState = props => {

    const initialState = {
        user: {},
        userType: '',
        loading: false
    }

    const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
    };

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const getUser = async() => {

        
        setLoading();

        await Axios.post(`${process.env.REACT_APP_API_URL}/auth`, config)
        .then((resp) => {

            dispatch({
                type: GET_LOGGEDIN_USER_TYPE,
                payload: resp.data.usertype
            });
           
            dispatch({
                type: GET_LOGGEDIN_USER,
                payload: resp.data.user
            });

            

        })
        .catch((err) => {
            console.log(`Could not get loggedin user ${err}`);
        })
    }

    // set loading
    const setLoading = () => dispatch({type: SET_LOADING })

    return <AuthContext.Provider 
        value={{
            user: state.user,
            loading: state.loading,
            userType: state.userType,
            getUser
        }}
    >
        { props.children }
    </AuthContext.Provider>
}

export default AuthState;
