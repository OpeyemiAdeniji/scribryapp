import { render } from '@testing-library/react';
import React, { useEffect, useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

const TopBar = (props) => {

    useEffect(() => {

    }, [])



    return (
        <>
        
        <div className='ui-topbar position-sticky'>

            <div className='ui-topbar-inner '>

                <div className='d-flex align-items-center'>

                    <div className='pdr1'>
                        <a href='#' className='hmb--btn'>
                            <span className='fe fe-menu fs-20 onsilverlight ui-hide-mobile-only' />
                        </a>
                        <a href='#' className='hmm--btn'>
                            <span className='fe fe-menu fs-20 brand-lendlot-blue ui-show-mobile-only' />
                        </a>
                    </div>
                    
                    {/* <div className='pdl1 ui-show-mobile-only mbl--brand'>
                        <img src='../images/assets/logo-alone.svg' alt='lendlot logo' />
                    </div> */}

                    <div className='ui-topbar-options'>

                        
                        
                        <div className='ui-topbar-links'>
                            <div className='ui-group-button'>
                            <Link className='ui-topbar-primary-logo'>
                                <img src="../../images/assets/avatar.svg" alt='user-dp' className='ui-rounded' />
                            </Link>
                            </div>
                        </div>
                    
                    </div>
          
                </div>
            
            </div>

        </div>

        </>
    )
}

export default TopBar;

