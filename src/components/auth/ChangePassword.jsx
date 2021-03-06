import React, { useEffect, useContext, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import Alert from '../../components/layouts/partials/Alert'
import lottieData from '../../components/_data/check-green.json'
import LottiePlayer from '../../components/layouts/partials/LottiePlayer'
import ButtonSpinner from '../../components/layouts/partials/ButtonSpinner'

const ResetPassword = (props) => {
    
    const [pass, setPass] = useState('password');
    const [loading, setLoading] = useState(false);
    const [reset, setReset] = useState(false);
    const [resetData, setResetData] = useState({

        password: '',
        confirmPassword: ''
    })

    const [aData, setAData] = useState({
        type: '',
        message: '',
        show: false
    })

    const resetToken = props.match.params.resetToken;

    useEffect(() => {
    }, [])

    const showPass = (e) => {
        e.preventDefault();
        if(pass === 'password'){
            setPass('text');
        }else{
            setPass('password')
        }
    }

    const config = {    
        headers: {
          'Content-Type': 'application/json',
        },
    };

    const submit = async(e) => {

        e.preventDefault();

        if(!resetData.password || !resetData.confirmPassword){
            setAData({...aData, show: true, type: 'danger', message: 'All fields are required.'});
            setTimeout(() => {
                setAData({...aData, show: false});
            }, 2000)
        }else if(!resetData.password){
            setAData({...aData, show: true, type: 'danger', message: 'All fields are required.'});
            setTimeout(() => {
                setAData({...aData, show: false});
            }, 2000)

        }else if(!resetData.confirmPassword){
            setAData({...aData, show: true, type: 'danger', message: 'All fields are required.'});
            setTimeout(() => {
                setAData({...aData, show: false});
            }, 2000)
        }else{
            setLoading(true);

            try {

                await Axios.put(`${process.env.REACT_APP_API_URL}/auth/resetpassword/${resetToken}`, {...resetData}, config)
                .then((resp) => {
                    
                    if(resp.data.error === false){
                        
                        setReset(true);
                    }
                }).catch((err) => {
                    setAData({...aData, show: true, type: 'danger', message: `${err.response.data.message}`});
                    setTimeout(() => {
                        setAData({...aData, show: false});
                    }, 8000)

                    setLoading(false);

                })
                
            } catch (err) {
                setAData({...aData, show: true, type: 'danger', message: `${err.response.data.message}`});
                setTimeout(() => {
                    setAData({...aData, show: false});
                }, 2000)

                setLoading(false);

            }
        }
    }

    return (
        <Fragment>
            <section className="hero home-hero ui-full-bg-norm" style={{backgroundImage: 'url("../../images/assets/bg@auth5.jpg")'}}>
                <div className="container">
                    
                    <div className="ui-wrapper-large">

                        <div className="row">

                            <div className="col-md-7">
                                
                                <div className="row">

                                    <div className="col-md-7 mx-auto auth--mv">

                                    <div className="logo-auth ui-text-center">
                                    <img src="../../images/assets/logo-white.svg" alt='img'/> 
                                </div>

                          </div>

                                <div className="c--box ui-box-shadow-dark-fade">
                                    {
                                        !reset &&
                                        <form onSubmit={(e) => submit(e)}>                                                
                                                
                                            <div className="form-group">
                                                <h3 className='font-gilroybold brand-purpledark fs-22 mb-1 text-center mrgt1 mrgb1'>Change your Passsword
                                                </h3>
                                                <p className='font-gilroy brand-purpledark fs-14 mb-1 text-center mrgb2' style={{lineHeight: '16px'}}>
                                                Please choose a password that you can easily remember. Think about it.
                                                </p>
                                                
                                            </div>

                                            <Alert show={aData.show} type={aData.type} message={aData.message} />


                                            <div className="form-group">
                                                <label className="font-gilroymedium brandcox-firefly fs-14 mb-1">New Password</label>

                                                <div className="input--icon">
                                                    <span onClick={(e) => showPass(e)} className="sc-eye fs-25"></span>
                                                    <input 
                                                    onChange={(e) => {setResetData({...resetData, password: e.target.value})}}
                                                    type={pass} name="currentpassword"
                                                    className="font-gilroy fs-15 form-control" placeholder="Choose a password" />
                                                </div>

                                            </div>

                                            <div className="form-group">
                                                <label className="font-gilroymedium brandcox-firefly fs-14 mb-1">Type password again</label>
                                                <input 
                                                onChange={(e) => {setResetData({...resetData, confirmPassword: e.target.value})}}
                                                type="password"                              
                                                className="font-gilroy fs-15 form-control" placeholder="Confirm password" />
                                            </div>

                                            <div className="mrgt2">
                                            
                                                {
                                                    loading ?
                                                
                                                    (<button className="btn big-btn btn-block bg-brand-yellow onwhite font-gilroybold disabled"><ButtonSpinner imageUrl="../../../images/assets/spinner-white.svg" /></button>) :
                                                    (<button className="btn big-btn btn-block bg-brand-yellow onwhite font-gilroybold">CHANGE PASSWORD</button>) 
                                                }
                                                    
                                                
                                            </div>   
                                            <div className="form-group ui-text-center mrgt2">
                                                    <span className="font-gilroy onmineshaft fs-14">Remember your password?</span>&nbsp;
                                                    <Link to="/signin"  className="font-gilroy fs-14 brand-yellowdark"><span className="fs-14">Login</span></Link>
                                                </div>    
                                        </form>
                                        
                                    }
                                    
                                    {
                                        reset &&
                                            <>
                                                <div className="ui-text-center mrgb2">
                                                    <LottiePlayer lottieData={lottieData} w='150px' h='150px' loop={true} />
                                                </div>
                                                <div className="mrgb1">
                                                    <h3 className="fs-23 brand-purple pdl2 pdr2 ui-text-center" style={{lineHeight: '25px'}}>Password reset successfully</h3>
                                                    <p className="onmineshaft fs-14 ui-text-center mrgb1">Login to your account</p>
                                                </div>

                                                <div className="ui-text-center mrgb2 mrgt2">
                                                    <Link to="/signin" className="btn big-btn  btn-block bg-brand-yellow onwhite font-gilroybold">LOGIN</Link>
                                                </div>
                                            </>
                                    }
                                </div>


                                    </div>

                                </div>
                            
                            </div>
                      

                    </div>
                </div>
            </section> 
        </Fragment>
      );
    };

export default ResetPassword;
