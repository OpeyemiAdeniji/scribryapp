import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

const gLogin = async(response) => {
        // console.log(response);

    //    axios({
    //         method: 'POST',
    //         url: `${process.env.REACT_APP_API_URL}/auth/login/oauth`,
    //         data: {tokenId: response.tokenId}
    //     }).then(response => {
    //         console.log('Google login success', resp);
    //     })
        
    // }


    // const responseErrorGoogle = () => {

    // }

    return (
        
        <GoogleLogin
          clientId= '${process.env.REACT_APP_GOOGLE_CLIENT_ID}'
          buttonText= "Login with Google"
          onSuccess= {gLogin}
          onFailure= {gLogin}
          cookiePolicy= {"single_host_origin"} />
        
    );
}

export default gLogin;