import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios';
import * as moment from 'moment';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';

import UserContext from '../../../context/user/userContext';


import All from './All'
import Active from './Active';
import Completed from './Completed'

const Projects = (props) => {

    const userContext = useContext(UserContext);
    

    useEffect(() => {

        userContext.getProjects(localStorage.getItem('userId'));
        


    }, []);

    

    return(
        <>
            <Tabs defaultTab='one' onChange={(tabId) => { }}>

                <TabList className="tabpage-bx">
                    <Tab onClick={(e) => e.preventDefault() } tabFor="one" className="font-gilroymedium">
                        <span className="fs-14">All Projects</span>
                    </Tab>
                    <Tab onClick={(e) => e.preventDefault() } tabFor="two" className="font-gilroymedium">
                        <span className="fs-14">Active</span>
                    </Tab>
                    <Tab onClick={(e) => e.preventDefault() } tabFor="three" className="font-gilroymedium">
                        <span className="fs-14">Completed</span>
                    </Tab>
                </TabList>

                <div id="body-inner" className="ui-body-content-inner project-cards">

                    <TabPanel tabId="one">
                        <All loading={userContext.loading} projects={userContext.projects} />
                    </TabPanel>
                    <TabPanel tabId="two">
                        <Active loading={userContext.loading} projects={userContext.projects} />
                    </TabPanel>
                    <TabPanel tabId="three">
                        <Completed loading={userContext.loading} projects={[]} />
                    </TabPanel>
                                
                </div>

                
                
            </Tabs>
        
            

        </>
    )

}

export default Projects;