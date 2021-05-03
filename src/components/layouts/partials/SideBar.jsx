import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios';

import SideMenu from './SideMenu';
import UserContext from '../../../context/user/userContext'

const SideBar = (props) => {

    const userContext = useContext(UserContext);

    useEffect(() => {

        redirectToLogin();

        if(localStorage.getItem('token')){
            userContext.getUser();
        }
        console.log(props.title, 'the');

    }, [])

    const redirectToLogin = () => {

        if(localStorage.getItem('token') === null){
            localStorage.clear();
            props.history.push('/signin');
        }
    }

    return(
        <>
        <SideMenu {...props} />
        </>
    )

}

export default SideBar;