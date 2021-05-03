import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios';

const SideMenu = (props) => {

    const logout = () => {
      localStorage.clear();
      props.history.push('/signin')
    }

    return(
        <>
            <div className='ui-monitor'>
            <div className='d-flex'>
              <div />
              <div className='ml-auto'>
                <Link to='/' className='pullin--btn onblack'>
                  <span
                    className='fe fe-arrow-left fs-20'
                    style={{ color: '#2F80ED' }}
                  />
                </Link>
              </div>
            </div>
          </div>

          <section className='ui-sidebar ssbar--open'>

            <div className='ui-sidebar-primary ssbar--open'>
              
              <div className='ui-sidebar-primary-header pdl3'>
                <Link to="/dashboard" className='ui-sidebar-primary-logo'>
                  <img src="../../../images/assets/logo-white.svg" alt='logo'/>
                </Link>
              </div>

              <div className='ui-sidebar-primary-body'>

              <ul className='ui-sidebar-primary-links'>
              <li className='active'>
                <Link to='/dashboard' className='ui-icon-animate' title='Dashboard'>
                  <span className='fe fe-home fs-20' />
                  <span className='lnk--text sb-text font-gilroy fs-15'>
                    Home
                  </span>
                </Link>
              </li>

              <li>
                <Link to='/dashboard/projects' className='ui-icon-animate' title='Dashboard'>
                  <span className='fe fe-book-open fs-20' />
                  <span className='lnk--text font-gilroy fs-15'>
                    Projects
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  className='ui-icon-animate'
                  title='logout'
                  onClick={logout}
                >
                  <span className='fe fe-chevrons-right fs-20' />
                  <span className='lnk--text font-gilroy fs-15'>
                    Log Out
                  </span>
                </Link>
              </li>
            </ul>
           
                
              </div>
            
            </div>
          
          </section>

        </>
    )

}

export default SideMenu;