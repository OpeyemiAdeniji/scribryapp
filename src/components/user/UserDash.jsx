import React, { useEffect, useContext, useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';

import TopBar from '../layouts/partials/TopBar'
import ServiceBox from '../user/ServiceBox'

const UserDash = (props) => {
    

    const [loading, setLoading] = useState(false);
    

  
    
   
    return(
        
        <>  
         <TopBar />
         <ServiceBox />
        
            
        </>
        
    )

}

export default UserDash;