import React, { useEffect, useContext, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";

import checkData from '../_data/lottie-check.json';

import LottiePlayer from '../layouts/partials/LottiePlayer';

import "react-web-tabs/dist/react-web-tabs.css";

const MailSent = () => {

    return (
        <Fragment>
        <section className="hero home-hero ui-full-bg-norm" style={{backgroundImage: 'url("../../images/assets/bg@auth4.jpg")'}}>
                    <div className="container">
                      
                        <div className="ui-wrapper-large">
    
                            <div className="row">
    
                                <div className="col-md-7">
                                 
                                    <div className="row">

                                        <div className="col-md-7 mx-auto auth-mv">

                                        <div className="logo-auth ui-text-center">
                                    <img src="../../../images/assets/logo-white.svg" alt='img'/>
                               </div>
                                    <div className="c--box ui-box-shadow-dark-fade mrgt1">

                                    <LottiePlayer lottieData={checkData} w={200} h={200} />

                                    <h3 className="font-gilroymedium fs-24 text-center brand-purple mrgb mrgt1">Link sent!</h3>
                                    <p className="font-gilroy fs-15 mrgb pdl1 pdr1 text-center">
                                    A password reset link has been sent to your email. Please check your email to change your password.
                                    </p>

                                    <div className="mrgt mrgb ui-text-center mrgt2 mrgb2">
                                                                                    
                                                <Link to="/signin" className="btn big-btn bg-brand-yellow onwhite font-gilroybold">Continue</Link>
                                                                                
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

export default MailSent;