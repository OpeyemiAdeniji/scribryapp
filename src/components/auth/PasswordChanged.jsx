import React, { useEffect, useContext, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";

import checkData from '../_data/lottie-check.json';

import LottiePlayer from '../layouts/partials/LottiePlayer';

import "react-web-tabs/dist/react-web-tabs.css";

const PasswordChanged= () => {

    return (
        <Fragment>
            <section className="hero home-hero ui-full-bg-norm" style={{backgroundImage: 'url("../../images/assets/bg@changepw.png")'}}>
                <div className="container">
                    
                    <div className="ui-wrapper-large">

                        <div className="row">

                            <div className="col-md-7">
                                
                                <div className="row">
                                    <div className="col-md-7 mx-auto">
                                                <div className="logo-auth auth--mv ui-text-center">
                                            
                                                    <img src="../../images/assets/scribry.svg" alt='img'/>

                                                </div>  

                                                <div className="c--box ui-box-shadow-dark-fade mrgt2">
                                                    <div>
                                                    <LottiePlayer lottieData={checkData} w={200} h={200} />
                                                    </div>
                                                    
                                                    <div>
                                                    <h3 className="font-gilroymedium fs-24 text-center brand-purple mrgb mrgt1">Password changed
                                                    successfuly!</h3>
                                                    <p className="font-gilroy fs-15 mrgb">
                                                    Your password has been changed successfully. Please proceed to login.
                                                    </p>
                                                    </div>

                                                    <div className="mrgt mrgb">
                                                                                                    
                                                        <Link to="" className="btn big-btn btn-block bg-brand-yellow onwhite font-gilroybold">Continue</Link>
                                                                                                
                                                    </div>

                                                </div>
                                            
        
                                        </div>
                                    </div>
                                </div>
                          
                            </div>
                            
                        </div>
        
                    </div>
                
            </section>

        </Fragment>
    
        
    )

}

export default PasswordChanged;