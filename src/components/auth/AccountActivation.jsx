import React, { useEffect, useContext, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import ButtonSpinner from '../../components/layouts/partials/ButtonSpinner';
import LottiePlayer from '../../components/layouts/partials/LottiePlayer';
import lottieData from '../../components/_data/check-green.json';

const ActivateAccount = (props) => {
    const [loading, setLoading] = useState(false);
    const [activate, setActivate] = useState(false);
    const [activateData, setActivateData] = useState({
        
    })

    const [aData, setAData] = useState({
        type: '',
        message: '',
        show: false
    })

    const activateToken = props.match.params.activateToken;

    useEffect(() => {
        setLoading(true)
        active();
    }, [])

    const config = {
        headers: {
           'Content-Type': 'application/json'
        },
    };

    const active = async() => {


        try {

            await Axios.put(`${process.env.REACT_APP_API_URL}/auth/activate/${activateToken}`, {...activateData}, config)
            .then((resp) => {
                
                if(resp.data.error === false){

                    setLoading(false);
                    setActivate(true);
                }
            }).catch((err) => {
                setAData({...aData, show: true, type: 'danger', message: `${err.response.data.message}`});
                setTimeout(() => {
                    setAData({...aData, show: false});
                }, 2000)

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

    return (
        <>
             <section className="hero home-hero ui-full-bg-norm auth--bx" style={{backgroundImage: 'url("../../../images/assets/bg@auth5.jpg")'}}>
                
                <div className="container">
                    <div className="ui-wrapper-large">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="row">
                                    <div className="col-md-7 mx-auto auth--mv">
                                        <div className="logo-auth ui-text-center">
                            
                                            <img src="../../images/assets/logo-white.svg" alt='img'/>

                                        </div>

                                        <div className="c--box ui-box-shadow-dark-fade mrgt1">

                                           <div className="container">

                                                {
                                                    loading && 
                                                        <div className="empty">
                                                            <img src="../../../images/assets/spinner-white.svg" alt="spinner" />
                                                        </div>
                                                }

                                                {
                                                    loading &&
                                                    <div className="">
                                                    
                                                        <p className="text-act">Please hold on while your account is been activated</p>
                                                    </div>
                                                }


                                                {
                                                    !loading &&
                                                        <>
                                                            <div className="ui-text-center mrgb2 lottie ">
                                                                <LottiePlayer lottieData={lottieData} w='150px' h='150px' loop={true} />
                                                            </div>

                                                            <div className="mrgb1">
                                                                <h3 className="title fs-24 ui-text-center font-gilroymedium" style={{lineHeight: '35px'}}>Account Activated successfully</h3>

                                                                <p className="font-gilroy fs-14 ui-text-center account mrgt2">Login to your account</p>
                                                            </div>

                                                            <div className="ui-text-center mrgt4login ">
                                                                <Link to="/signin" className="btn big-btn btn-block bg-brand-yellow onwhite mrgt2 font-gilroybold">LOGIN</Link>
                                                            </div>
                                                        </>
                                                }

                                           </div>

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

export default ActivateAccount;
