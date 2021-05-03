import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios';

import ServiceContext from '../../../context/service/serviceContext';
import ProjectCard from './ProjectCard'

const Active = ({ loading, projects }) => {

    const serviceContext = useContext(ServiceContext);

    const [empty, setEmpty] = useState(false);

    useEffect(() => {

        serviceContext.getServices();
        displayEmpty()

    }, []);

    const findService = (id) => {
        const sv = serviceContext.services.find((i) => i._id === id);
        return sv;
    }

    const displayEmpty = () => {
        setTimeout(() => {
            setEmpty(true);
        }, 5000);
    }

    return(
        <>

                {
                    loading && 
                    <>
                        <div className="ui-dashboard-card card-loading mrgt2">

                            {
                                !empty ? (
                                    <>
                                        <img src="../../../images/assets/spinner-p.svg" width="50px" alt="spinner"/>
                                        <p className="font-gilroy brand-purple ui-text-center fs-16 mrgb0">Getting projects...</p>
                                    </>
                                ) : (
                                    <>
                                        <img src="../../../images/assets/icon@projectn.svg" width="120px" alt="spinner"/>
                                        <p className="font-gilroy brand-purple ui-text-center fs-15 mrgb2 mrgt1" style={{lineHeight: '18px'}}>You have no active projects yet. Please <br /> create a project.</p>
                                        <Link to="/projects/create" className="btn bg-brand-purple onwhite font-gilroybold">Create Project</Link>
                                    </>
                                )
                            }

                        </div>

                    </>

                }

                {
                    !loading && projects.length === 0 &&
                    <>
                        <div className="ui-dashboard-card card-loading mrgt2">

                        <img src="../../../images/assets/icon@projectn.svg" width="120px" alt="spinner"/>
                        <p className="font-gilroy brand-purple ui-text-center fs-15 mrgb2 mrgt1" style={{lineHeight: '18px'}}>You have no active projects yet. Please <br /> create a project.</p>
                        <Link to="/projects/create" className="btn bg-brand-purple onwhite font-gilroybold">Create Project</Link>

                        </div>

                    </>

                }

            <div className="row mrgt2">

                {
                    !loading &&
                    <>
                        {
                            projects.map((p, i) => 
                                <>
                                    <div className="col-md-4">
                                        <ProjectCard project={p} findService={findService} />
                                    </div>
                                </>
                            )
                        }
                        

                    </>
                }

            </div>
        
            
        </>
    )

}

export default Active;