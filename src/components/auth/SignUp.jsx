import React, { useEffect, useContext, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import PasswordStrengthBar from 'react-password-strength-bar';
import toastBar from "../../helpers/toastBar";
import Alert from '../layouts/partials/Alert'
import SuccessModal from '../layouts/partials/SuccessModal'
import doneData from '../_data/lottie-done.json'
import ButtonSpinner from '../../components/layouts/ButtonSpinner';
import Axios from "axios";
import { GoogleLogin } from 'react-google-login';

import "react-web-tabs/dist/react-web-tabs.css";
import CountryDrop from '../layouts/partials/CountryDrop'

import CountryContext from '../../context/country/countryContext';


const SignUp= (props) => {

    const countryContext = useContext(CountryContext);
 
    const [fieldType, setField] = useState('password');
    const [isChecked, setIsChecked] = useState(true);
    const [successState, setModalState] = useState(false);
    const [loading, setLoading] = useState(false);
    const [pass, setPass] = useState('password');
    const [regData, setRegData] = useState({
        loading: false,
        email: '',
        password: '',
        phoneNumber: '',
        phoneCode: '',
     
    });

    useEffect(() => {
    
      countryContext.getCountries();

    }, [])

    const toggleField = (e) => {
      e.preventDefault();

      if(fieldType === 'password'){
          setField('text');
      }else{
          setField('password');
      }
  }

    const handleCheck = (e) => {
      if(e.target.checked){
          setIsChecked(false);
      }else{
          setIsChecked(true);
      }
  }

    const showPass = (e) => {
      e.preventDefault();
      if(pass === 'password'){
          setPass('text');
      }else{
          setPass('password');
      }
  }


    const { email, phoneNumber, phoneCode, password } = regData;

    const config = {
        headers: {
          'Content-Type': 'application/json',
        },
    };

    const getOptions = () => {
      let c = [];
      if(!countryContext.loading && countryContext.countries.length > 0){
        c = countryContext.countries.map((i) => {
          const m = {
            value: i._id,
            label: i.name,
            left:  i.phoneCode,
            image: i.flag
          }
          return m;
        })
      }
      return c;
    }

    const getSelected = (val) => {

      console.log(val);

      setRegData({...regData, phoneCode: '+' + val.left})

    }

    const googleSignup = async (googleData) => {
        
      const data = {
          token: googleData.tokenId
      }

      await Axios.post(`${process.env.REACT_APP_API_URL}/auth/register/oauth`, {...data})
      .then((resp) => {
        if(resp.data.error === false){
          toastBar('Account created successfully', 'success');
          props.history.push('/signin')
        }
        setLoading(false);
      }).catch((err) => {
        if (err.response) {
          toastBar(`Error! ${err.response.data.message}`, "error");
        }
        console.log(err, 'the catch');

        setLoading(false);
      })

  }

   
    const signup = async (e) => {
        e.preventDefault();
        
        console.log(regData);

        try {

            if (!regData.email || !regData.phoneNumber || !regData.phoneCode|| !regData.password) {
              toastBar("All fields are required", "warning");
            } else if (password.length < 8) {
              toastBar("Password must be 8 or more special characters and a Capital letter and small letter", "warning");
            }  else {
              setLoading(true);
               

                await Axios.post(
                  `${process.env.REACT_APP_API_URL}/auth/register`, { ...regData },
                  config
                )
                  .then((resp) => {

                    if(resp.data.error === false){
                      toastBar('Account created successfully', 'success');
                      props.history.push('/signin')
                    }
                    setLoading(false);

                  })
                  .catch((err) => {
                    if (err.response) {
                      toastBar(`Error! ${err.response.data.message}`, "error");
                    }
                    console.log(err, 'the catch');
        
                    setLoading(false);
                  });
              }
            } catch (err) {
              toastBar(`${err}`, "error");
                console.log(err, 'try catch');
              setLoading(false);
            }
    };
        
  

  return (
    <>
    <section className="hero home-hero ui-full-bg-norm" style={{backgroundImage: 'url("../../images/assets/bg@register.png")'}}>
                <div className="container">
                  
                    <div className="ui-wrapper-large">

                        <div className="row">
                          

                            <div className="col-md-7">
                             
                              <div className="row">

                                  <div className="col-md-7 mx-auto auth--mv">

                                  <div className="logo-auth ui-text-center mrgb2">
                              <img src="../../images/assets/logo-white.svg" alt='img'/>
                            </div>
                              
                              <div className="c--box ui-box-shadow-dark-fade mrgt-8">
          

                                    <form onSubmit={signup}>
                                       
                                            <>
                                                <div className="form-group">
                                                <h3 className='font-gilroybold brand-purpledark fs-20 mb-1 text-center mrgt mrgb1'>Create an Account</h3>
                                                   
                                                </div>

                                                <div className="form-group">
                                                    <label className="font-gilroymedium brandcox-firefly fs-14 mb-1">Email address</label>
                                                    <input type="email" name='email'
                                                     onChange={(e) =>
                                                        setRegData({
                                                          ...regData,
                                                          email: e.target.value,
                                                        })
                                                      }
                                                    className="font-gilroymedium fs-15 form-control" placeholder="E.g. you@example.com" />
                                                </div>
                                               <div className='row phone-input'>
                                                   <div className='col-md-7'>
                                               <div className="form-group">
                                                    <label className="font-gilroymedium brandcox-firefly fs-14 mb-1">Phone Number</label>
                                                    <input type="number" name='phone'
                                                     onChange={(e) =>
                                                        setRegData({
                                                          ...regData,
                                                          phoneNumber: e.target.value,
                                                        })
                                                      }
                                                    className="font-gilroymedium fs-15 form-control" placeholder="0809 800 0000" />
                                                </div>
                                                </div>

                                                <div className='col-md-5'>
                                               <div className="form-group">
                                                    <label className="font-gilroymedium brandcox-firefly fs-14 mb-2">{' '}</label>

                                                    <div style={{position: 'relative', top: '5px'}}>
                                                      <CountryDrop selected={getSelected} options={getOptions} search={true} defaultValue={1} className="c--drop" />
                                                    </div>
                                                </div>
                                                </div>
                                               </div>
                                               
                                                <div className="form-group">
                                                <label className="font-gilroymedium fs-14">Password</label>

                                                <div className="input--icon"> 
                                                    
                                                <span onClick={(e) => toggleField(e)} className="sc-eye fs-25"></span>
                                                <input 
                                                  
                                                  onChange={(e) => {setRegData({...regData, password: e.target.value})}}
                                                  type={fieldType} className=" font-gilroy fs-15 form-control" placeholder="Password" />
                                                    
                                                    
                                                </div>
                                                <div className="d-flex align-items-center pass-str">
                                                  {/* <PasswordStrengthBar minLength={8} password={regData.password} /> */}
                                                </div>
                                                
                                            </div>
                                                <div className="form-group ">
                                                    <div className="d-flex align-items-center">
                                                        <div className="custom-control fs-12 custom-checkbox">
                                                            <input onChange={(e) => handleCheck(e)} type="checkbox" className="custom-control-input" id="customCheck1" />
                                                            <label className="custom-control-label  fs-14 font-gilroy" for="customCheck1"><span>
                                                            I agree with <Link className=" brand-Lyellow  fs-12 font-gilroy">Terms</Link> & <Link className="brand-Lyellow  fs-12 font-gilroy">Privacy Policy</Link>
                                                                </span></label>
                                                        </div>
                                                        
                                                    </div>
                                                   
                                                </div>


                                                <div className="">
                                                   
                                                        {
                                                            loading ?
                                                           
                                                            (<button className="btn big-btn btn-block bg-brand-yellow onwhite font-gilroybold" disabled><ButtonSpinner width="30px" imageUrl="../../../images/assets/spinner-white.svg" /></button>) :
                                                            (
                                                              <button className={`btn big-btn btn-block bg-brand-yellow onwhite font-gilroybold ${isChecked ? 'disabled' : ''}`}>Create Account</button>
                                                            ) 
                                                        }
                                                </div>
                                                <form >
                                                <div className=" form-group  text-center ">
                                                  
                                                  <GoogleLogin
                                                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                                        render={(props) => (
                                                          <>
                                                              <Link onClick={props.onClick} disabled={props.disabled} to="" className="fs-14 ont-gilroy">Or sign in with <span>
                                                              <img src="../../images/assets/google.svg" width="25px" alt='img'/></span></Link>
                                                          </>
                                                        )}
                                                        buttonText="Google"
                                                        onSuccess={googleSignup}
                                                        onFailure={googleSignup}
                                                        cookiePolicy={'single_host_origin'}
                                                        isSignedIn={false}
                                                    />
                                                </div>
                                                </form>
                                                <div className="form-group ui-text-center ">
                                                    <span className="font-gilroy onmineshaft fs-14">Already have an account?</span>&nbsp;
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
            <SuccessModal
                        modalState={successState}
                        isMessage={true}
                        backDrop={'static'}
                        className={'update-modal'}
                        lottieData={doneData}
                        title={'Welcome to Scribry!'}
                        goTo={`/services`}
                        body={'Your account has been successfully created. You can now proceed to services'}
                    />
    </>
  );
};

export default SignUp;
