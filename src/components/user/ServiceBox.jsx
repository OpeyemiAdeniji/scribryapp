import React, { useEffect, useContext, useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';

import TopBar from '../layouts/partials/TopBar'

const ServiceBox = (props) => {
    

    const [loading, setLoading] = useState(false);
    const [upDate, setUpData] = useState({ 
        name: '',
        description: '',
      service: '',
      });

      const [service] = useState({
          name: 'Okiri Gabriel',
          service: 'Content Writing',
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, sit. Eum in sunt nulla omnis magnam ducimus iusto beatae corporis."
      })
   

  
    
   
    return(
        
        <>  
        <div className="container">
            <div className="row">
                <div className="col-md-4 mrgt4">
                {/* <div className="align-items-center">
                <h1 className="fs-24 fs-20">{'gab'}</h1>
                <h3 className="fs-18 ml-auto">{'okiri'}</h3>
            <h5 className="fs-14">{'okiri'}</h5>
            </div> */}
            <div className="card">
                <div className=' card-body service-dash'>
                <div className="align-items-center">
                <h1 className="fs-24 card-title font-gilroybold">{service.name}</h1>
                <h3 className="fs-18 card-text font-gilroymedium ">{service.service}</h3>
            <h5 className="fs-14 font-gilroy">{service.description}</h5>
            </div>
                </div>
            </div>
            </div>
            </div>
        </div>
            
        </>
        
    )

}

export default ServiceBox;