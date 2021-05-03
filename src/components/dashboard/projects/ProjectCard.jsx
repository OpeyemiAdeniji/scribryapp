import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios';

const ProjectCard = ({ project, findService }) => {

    return(
        <>

            <div className="ui-dashboard-card pj--itm">

            <div className="ui-dashboard-card-body">

                
                <div className="icon">
                    <img src="../../../images/assets/icon@project.svg" alt="project icon" />
                </div>

                <div className="mrgt2" style={{lineHeight: '18px'}}>
                    <h2 className="onmineshaft mrgb0 fs-17 font-gilroymedium">{project.name}</h2>
                    <span className="fs-13 font-gilroy">{ findService(project.service).name }</span>
                </div>

                <div className="progress mrgt2" style={{height: '5px'}}>
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '10%'}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <span className="fs-13 font-gilroy">10% completed</span>

                <div className="d-flex align-items-center mrgt2">

                    <div>
                        <span><img src="../../../images/assets/icon@time.svg" width="20px" /></span> &nbsp;
                        <span className="fs-13 font-gilroy">Delivery in { findService(project.service).deliveryDays } days</span>
                    </div>

                    <div className="ml-auto">

                        <Link to="" className="btn bg-brand-purple onwhite font-gilroybold">View Details</Link>

                    </div>

                </div>
                
                
            </div>

            </div>

        
        </>
    )

}

export default ProjectCard;