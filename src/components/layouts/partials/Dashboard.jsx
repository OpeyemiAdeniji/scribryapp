import React, { Component } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';

// components
import SideBar from './SideBar';
import TopBar from './TopBar';

const Dashboard = (DashboardComponent) => {

    return class DashboardLayout extends Component {

        constructor(props){
            super();

            this.state = {
                loading: false
            }
        }

        componentDidMount(){
            
        }

        componentWillUnmount(){

        }

        render(){
            return(
                <>
                 

                    <SideBar isLoading={this.state.loading} />
                    
                    <main className='ui-dashboard-body sdbr--open'>
                        <div className='ui-body-content '>
                            <div className='ui-body-content-inner wd-dash-bg'>
                                <DashboardComponent {...this.props} />
                            </div>
                        </div>
                    </main>
                    
                
                </>
            )
        }

    }

}

export default Dashboard;