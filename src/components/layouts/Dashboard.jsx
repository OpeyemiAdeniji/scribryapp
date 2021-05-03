import React, { Component, useContext, useEffect } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';

// components
import SideBar from '../layouts/partials/SideBar';
import TopBar from '../layouts/partials/TopBar'

const Dashboard = (DashboardComponent, pageTitle) => {


    return class DashboardLayout extends Component {

        constructor(props){
            super();
        }

        componentDidMount(){
            
        }

        componentWillUnmount(){

        }

        render(){
            return(
                <>
                    <SideBar {...this.props} />
                    <main className='ui-dashboard-body sdbr--open d-body'>
                        <TopBar pageTitle={pageTitle} />
                        <div className="ui-body-content">
                            <DashboardComponent {...this.props} />
                        </div>
                        
                    </main>
                    
                
                </>
            )
        }

    }

}

export default Dashboard;