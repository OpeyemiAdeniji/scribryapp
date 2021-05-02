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

                            <div className="col-md-5">
                                
                                <div className="row">
                                    <div className="col-md-10 ">
                                        <div className="logo-auth">
                                            <div className="text-center">
                                                <img src="../../images/assets/scribry.svg" alt='img'/>
                                            </div>
                                    
                                        </div>
                                    </div>
                                </div>
                                <div className="c--box ui-box-shadow-dark-fade mrgt2">
            
                                    <LottiePlayer lottieData={checkData} w={200} h={200} />

                                    <h3 className="font-gilroymedium fs-24 text-center brand-purple mrgb mrgt1">Password changed
                                    successfuly!</h3>
                                    <p className="font-gilroy fs-15 mrgb pdl3 pdr3">
                                    Your password has been changed successfully. Please proceed to login.
                                    </p>

                                    <div className="mrgt mrgb">
                                                                                    
                                        <Link to="" className="btn big-btn hero-start btn-block bg-brand-yellow onmineshaft font-gilroybold">Continue</Link>
                                                                                
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