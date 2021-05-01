import React, { useEffect, useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

const SideMenu = (props) => {

    useEffect(() => {

    }, [])

    const logout = () => {
      props.handleLogout();
    }

    return(

        <div>

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
              
              <div className='ui-sidebar-primary-header ui-text-center'>
                <Link className='ui-sidebar-primary-logo'>
                  <img src="../../images/assets/avatar.svg" alt='user-photo' className='ui-rounded'/>
                  <p class='onwhite font-gilroy fs-18 mrgb0'> Anonymous </p>
                  <span className='fs-14' style={{ color: '#6B68F2' }}> Admin </span>
                </Link>
              </div>

              <div className='ui-sidebar-primary-body'>

              <ul className='ui-sidebar-primary-links'>
              <li className='active'>
                <Link to='/dashboard' className='ui-icon-animate' title='Dashboard'>
                  <span className='fe fe-home fs-18' />
                  <span className='lnk--text sb-text font-gilroy fs-15'>
                    Home
                  </span>
                </Link>
              </li>

       
       
          

              <li>
                <Link
                onClick={logout}
                  className='ui-icon-animate'
                  title='logout'
                >
                  <span className='fe fe-arrow-left fs-18' />
                  <span className='lnk--text font-gilroy fs-15'>
                    Log Out
                  </span>
                </Link>
              </li>
            </ul>
             
                  
              </div>
            
            </div>
          
          </section>

        </div>
      

    )

}

export default SideMenu;