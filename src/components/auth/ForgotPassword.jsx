import React, { useEffect, useContext, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import Axios from "axios";
// components
import ButtonSpinner from '../layouts/partials/ButtonSpinner';
import toastBar from '../../helpers/toastBar';

import "react-web-tabs/dist/react-web-tabs.css";



const ForgotPassword = (props) => {
    const [user, setUser] = useState({
        loading: false,
        email: ''
    });

    const { email, loading } = user;

    const config = {
        headers: {
          'Content-Type': 'application/json',
        },
    };

    const sendLink = async (e) => {
        e.preventDefault();

        try {

            if (!user.email) {
                toastBar('Supply your email', 'warning')
            } else {
                setUser({...user, loading: true});

                await Axios.post(`${process.env.REACT_APP_API_URL}/auth/forgotpassword`, {...user}, config)
                .then((resp) => {

                    if (resp) {
                        toastBar(resp.data.message, 'success');
                        props.history.push('/mailSent');
                    }

                }).catch((err) => {

                    if (err.response) {
                        toastBar(`${err.response.data.message}`, 'error');
                    } 
                    setUser({ ...user, loading: false });

                })
            }
            
        } catch (err) {
            toastBar(`${err}`, 'error');
        }
    }


  

  return (
    <Fragment>
    <section className="hero home-hero ui-full-bg-norm" style={{backgroundImage: 'url("../../images/assets/bg@forgotpw.png")'}}>
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
                                <div className="c--box ui-box-shadow-dark-fade ">
          

                                    <form onSubmit={sendLink} >
                                       
                                            <>
                                                <div className="form-group">
                                                <h3 className='font-gilroybold brand-purpledark fs-22 mb-1 text-center mrgt mrgb1'>Forgot your password?
                                                Get a reset password link </h3>
                                                <p className='font-gilroy brand-purpledark fs-14 mb-1 text-center mrgt mrgb'>With a reset password link,
                                                 you can choose a
                                                 new password and enjoy scribry.
                                                 Enter your email address to begin. </p>
                                                   
                                                </div>

                                                <div className="form-group">
                                                    <label className="font-gilroymedium brandcox-firefly fs-14 mb-1">Email address</label>
                                                    <input type="email"
                                                    onChange={(e) => setUser({...user, email: e.target.value }) }
                                                    className="font-gilroybold fs-15 form-control" placeholder="E.g. you@example.com" />
                                                </div>

                                               


                                                <div className="mrgt">
                                                   
                                                           
                                                {
                                                            loading ?
                                                           
                                                            (<button className="btn big-btn hero-start btn-block bg-brand-yellow onmineshaft font-gilroybold" disabled><ButtonSpinner /></button>) :
                                                            (<button className="btn big-btn hero-start btn-block bg-brand-yellow onmineshaft font-gilroybold">Submit</button>) 
                                                        }
                                                     
                                                </div>
                                             
                                               
                                            </>
                                       

                                      

                                    </form>
                                    

                                </div>

                               
                            </div>
                            
                        </div>

                    </div>
                </div>
            </section>
    </Fragment>
  );
};

export default ForgotPassword;
