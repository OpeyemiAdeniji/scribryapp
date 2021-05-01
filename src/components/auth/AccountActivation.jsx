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
        <Fragment>
                <section className="hero home-hero ui-full-bg-norm" style={{backgroundImage: 'url("../../../images/assets/bg@changepw.png")'}}>
                

                            {
                                
                                loading && 
                                <div className="empty">
                                    <img src="../../../images/assets/spinner-white.svg" alt="spinner" />
                                </div>

                                
                            }

                            {
                                loading &&
                                <div className="onwhite">
                                
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
                                            <h3 className="title fs-25 ui-text-center onwhite activate">Account Activated successfully</h3>
                                            <p className="onmineshaft fs-14 ui-text-center mrgb1 onwhite account">Login to your account</p>
                                        </div>

                                        <div className="ui-text-center mrgt15 login ">
                                            <Link to="/signin" className="btn big-btn hero-start btn-block bg-brand-yellow onmineshaft font-gilroybold">LOGIN</Link>
                                        </div>
                                    </>
                            }

                </section>
        </Fragment>
  );    
};

export default ActivateAccount;
