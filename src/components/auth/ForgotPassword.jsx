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
    <>
    <section className="hero home-hero ui-full-bg-norm auth--bx" style={{backgroundImage: 'url("../../images/assets/bg@forgotpw.png")'}}>
                <div className="container ">
                  
                    <div className="ui-wrapper-large">

                        <div className="row">

                            <div className="col-md-7">

                                <div className="row">

                                    <div className="col-md-7 mx-auto">

                                        

                                            <div className="logo-auth auth--mv text-center mrgb2">
                                                    <img src="../../images/assets/logo-white.svg" alt='img'/>
                                            </div>

                                    <div className="c--box ui-box-shadow-dark-fade">
          
                                            <form onSubmit={sendLink} >
                                            
                                                    <>
                                                        <div className="form-group">
                                                            <h3 className='brand-purplelight fs-20 mb-1 text-center mrgt mrgb2 '  style={{ lineHeight: '27px'}}>
                                                                <span className='font-gilroybold fs-20'>Forgot your password?</span><br></br>
                                                                <span className='font-gilroybold fs-20 mb-1 text-center mrgb2'>Get a reset password link</span>
                                                            </h3>

                                                            <p className='font-gilroy brand-purpledark fs-13 mb-1 text-center' style={{ lineHeight: '25px', position:'relative', top:'-1.5rem'}}>With a reset password link,
                                                            you can choose a new password and enjoy scribry. Enter your email address to begin. </p>
                                                        
                                                        </div>

                                                        <div className="form-group">
                                                            <label className="font-gilroymedium brandcox-firefly fs-14 mb-1">Email address</label>
                                                            <input type="email"
                                                            onChange={(e) => setUser({...user, email: e.target.value }) }
                                                            className="font-gilroy fs-13 form-control" placeholder="E.g. you@example.com" />
                                                        </div>

                                                        <div className="mrgt">              
                                                                
                                                            {
                                                                loading ?
                                                            
                                                                (<button className="btn big-btn  btn-block bg-brand-yellow onwhite font-gilroybold" disabled><ButtonSpinner /></button>) :
                                                                (<button className="btn big-btn btn-block bg-brand-yellow onwhite font-gilroybold mrgt2">SEND LINK</button>) 
                                                            }
                                                            
                                                        </div>

                                                        <div className="form-group ui-text-center mrgt3">
                                                            <span className="font-gilroy onmineshaft fs-14">Remember your password?</span>&nbsp;
                                                            <Link to="/signin"  className="font-gilroy fs-14 brand-yellowdark"><span className="fs-14">Login</span></Link>
                                                        </div>
                                                    
                                                    
                                                    </>

                                            </form>

                                        </div>
                                    </div>

                               </div>
           
                            </div>
                            
                        </div>

                    </div>
                </div>
            </section>
    </> 
  );
};

export default ForgotPassword;
