import React, { useEffect, useContext, useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';

// components
import SideMenu from './SideMenu';
// contexts
import AuthContext from '../../../context/auth/authContext';


const SideBar = (props) => {
    const [loading, setLoading] = useState(false);
    
    const authContext = useContext(AuthContext);
    const { userType } = authContext;
    const history = useHistory();

    useEffect(() => {

        setLoading(true);

        if(localStorage.getItem('isLoggedIn') === 'true'){
            authContext.getUser();
            setLoading(false)
        }

      }, []);

      const logout = () => {
        localStorage.clear();
        history.push('/signin')
      };


   

  
    
   
    return(
        
        <>
            <SideMenu   loading={loading} handleLogout={logout} userType={userType}/>
        </>
        
    )

}

export default SideBar;