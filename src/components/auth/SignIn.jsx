import React, { useEffect, useContext, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import Axios from "axios";

import "react-web-tabs/dist/react-web-tabs.css";
import toastBar from "../../helpers/toastBar";
import ButtonSpinner from '../../components/layouts/ButtonSpinner';
import GoogleLogin from 'react-google-login';

import Google from '../../helpers/google';



const SignIn = (props) => {
   
    const [loading, setLoading] = useState(false);
    const [fieldType, setField] = useState('password');
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    
    const config = {
        headers: {
          'Content-Type': 'application/json',
        },
    };

    const toggleField = (e) => {
        e.preventDefault();

        if(fieldType === 'password'){
            setField('text');
        }else{
            setField('password');
        }
    }

    const googleLogin = async (googleData) => {
        setUser({...user, loading: true});
        const data = {
            token: googleData.tokenId
        }

        await Axios.post(`${process.env.REACT_APP_API_URL}/auth/login/oauth`, {...data})
        .then((resp) => {
            
             // clear storage
             localStorage.clear();
             // set new storage items
             localStorage.setItem('token', resp.data.token);
             localStorage.setItem('userId', resp.data.data._id);
             localStorage.setItem('isLoggedIn', true);

             const user = resp.data.data;

                        if(user.isAdmin === false){

                            if(user.projects.length === 0){
                                props.history.push('/services')
                            }

                        }
setLoading(false);

        }).catch((err) => {
            
            if (err.response) {
                if(err.response.data.message === 'Invalid credentials'){
                    toastBar('Invalid username or password', 'error');
                }
            } 
            setUser({ ...user, loading: false });
        })

    }
    
    // login
    const login = async (e) => {
        e.preventDefault();

        if (!user.email || !user.password) {
            toastBar('Supply your email and password', 'error')
        }else if(!user.email){
            toastBar('Enter your email', 'error')
        }else if(!user.password){
            toastBar('Enter your password', 'error')
        } else{

            try {

                setLoading(true);
    
                    await Axios.post(`${process.env.REACT_APP_API_URL}/auth/login
                    `, {...user}, config)
                    .then((resp) => {
    
                         // clear storage
                        localStorage.clear();
                        // set new storage items
                        localStorage.setItem('token', resp.data.token);
                        localStorage.setItem('userId', resp.data.data._id);
                        localStorage.setItem('isLoggedIn', true);

                        const user = resp.data.data;

                        if(user.isAdmin === false){

                            if(user.projects.length === 0){
                                props.history.push('/services')
                            }

                        }
    
                        console.log(resp);
    
                        setLoading(false);
    
                    }).catch((err) => {
    
                        if (err.response) {
                            if(err.response.data.message === 'Invalid credentials'){
                                toastBar('Invalid username or password', 'error');
                            }
                        } 
                        setLoading(false);
                    })
                
            } catch (err) {
                toastBar(`${err}`, 'error');
            }

        }

        
    }


  return (
    <>
    <section className="hero home-hero ui-full-bg-norm auth--bx" style={{backgroundImage: 'url("../../images/assets/bg@authbox.jpg")'}}>
                <div className="container">
                  
                    <div className="ui-wrapper-large">

                        <div className="row">

                            <div className="col-md-7">
                             
                                <div className="row">

                                    <div className="col-md-7 mx-auto auth--mv">

                                    <div className="logo-auth ui-text-center mrgb2">
                          
                                        <img src="../../images/assets/logo-white.svg" alt='img'/>
                                    </div>
                            <div className="c--box ui-box-shadow-dark-fade mrgt1">
          

                                    <form onSubmit={login}>
                                       
                                            <>
                                                <div className="form-group">
                                                <h3 className='font-gilroybold brand-purplelight fs-20 mb-1 text-center mrgt mrgb2'>Login into your Account</h3>
                                                   
                                                </div>

                                                <div className="form-group">
                                                    <label className="font-gilroymedium brandcox-firefly fs-14 mb-1">Email address</label>
                                                    <input type="email"
                                                    onChange={(e) => setUser({...user, email: e.target.value }) } 
                                                    className="font-gilroy fs-15 form-control" placeholder="E.g. you@example.com" />
                                                </div>

                                                <div className="form-group">
                                                    <label className="font-gilroymedium brandcox-firefly fs-14 mb-1">Password</label>
                                                    <div className="input--icon">
                                                        <span onClick={(e) => toggleField(e)} className="sc-eye fs-25"></span>
                                                        <input type={fieldType}
                                                        onChange={(e) => setUser({...user, password: e.target.value }) } 
                                                        className="font-gilroy fs-15 form-control" placeholder="Choose a password" />
                                                    </div>
                                                    
                                                </div>
                                                <div className="form-group mrgt1">
                                                    <div className="d-flex align-items-center">
                                                        <div className="custom-control custom-checkbox" style={{position: 'relative', top: '3px'}}>
                                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                            <label className="custom-control-label brand-yellow fs-14 font-gilroymedium" for="customCheck1"><span className="fs-14">Stay logged in</span></label>
                                                        </div>
                                                        <div className="ml-auto">
                                                            <Link to="/forgotpassword" className="brand-yellowdark fs-14 ui-underline font-gilroymedium"><span className="brand-yellowdark fs-14">Forgot password?</span></Link>
                                                        </div>
                                                    </div>
                                                   
                                                </div>


                                                <div className="mrgt3">
                                                   
                                                           
                                                    {
                                                        loading ?
                                                        (<button className="btn big-btn btn-block bg-brand-yellow onwhite font-gilroybold" disabled><ButtonSpinner width="30px" imageUrl="../../../images/assets/spinner-white.svg" /></button>) :
                                                        (<button className="btn big-btn btn-block bg-brand-yellow onwhite font-gilroybold">LOGIN</button>) 
                                                    }
                                                     
                                                </div>
                                                <div className=" form-group mrgt1 text-center ">
                                                  {/* <Link to="/googleauth" className="fs-14 ont-gilroy">Or sign in with <span>
                                                  <img src="../../images/assets/google.png" alt='img'/></span></Link> */}
                                                    <GoogleLogin
                                                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                                        render={(props) => (
                                                            <>
                                                                <Link onClick={props.onClick} disabled={props.disabled} to="" className="fs-14 ont-gilroy">Or sign in with <span>
                                                                <img src="../../images/assets/google.svg" width="25px" alt='img'/></span></Link>
                                                            </>
                                                          )}
                                                        buttonText="Google"
                                                        onSuccess={googleLogin}
                                                        onFailure={googleLogin}
                                                        cookiePolicy={'single_host_origin'}
                                                        isSignedIn={false}
                                                    />
                                                  
                                                </div>
                                                <div className="form-group ui-text-center ">
                                                    <span className="font-gilroy onmineshaft fs-14">Don't have an account?</span>&nbsp;
                                                    <Link to="/signup"  className="font-gilroy fs-14 brand-yellowdark"><span className="fs-14">Regsiter</span></Link>
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

export default SignIn;
