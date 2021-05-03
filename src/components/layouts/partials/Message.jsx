import React, {useEffect, useState, useContext} from 'react';
import { Link } from 'react-router-dom';


import checkData from '../../_data/check-green.json';

import LottiePlayer from './LottiePlayer';

const Message = ({ buttonText ,message, handleSubmit, title}) => {

    useEffect(() => {
    }, []);

    const submit = (e) => {
        handleSubmit(e, null);
    }


    return(
        <>
            <div className="modal-long">

                <div className="mrgt2">
                    <LottiePlayer lottieData={checkData} h={150} w={150} loop={true} />
                </div>


                <div className="row mrgb3 mrgt2">
                    <div className="col-md-8 mx-auto ui-text-center">
                        <h1 className="font-gilroymedium fs-20" style={{color: "#13343D"}}>{title ? title : 'No Title'}</h1>
                        <p className="fs-13 brand-cox-firefly font-gilroy" style={{lineHeight: '16px'}}>{message ? message : 'No message'}</p>
                    </div>
                </div>

                <div className="form-group mrgb0 ui-text-center">
                    <Link onClick={(e) => submit(e)} to="" className="btn big-btn bg-brand-yellow onwhite font-gilroybold">{buttonText ? buttonText : 'Continue'}</Link>
                </div>
                
            </div>
        </>
    )

}

export default Message;