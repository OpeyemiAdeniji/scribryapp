import React, {useEffect, useState, useContext, useRef} from 'react';
import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios';

import Dropdown from './Dropdown';
import AlertMini from './AlertMini';
import ButtonSpinner from './ButtonSpinner';
import ServiceContext from '../../../context/service/serviceContext'

const Contact = ({ handleSubmit }) => {

    const serviceContext = useContext(ServiceContext);

    const [step, setStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const [contactData, setData] = useState({
        email: '',
        service: '',
        description: ''
    });

    const [alertData, setAlertData] = useState({
        show: false,
        type: 'info',
        message: '...'
    });

    useEffect(() => {

        serviceContext.getServices();

    }, []);

    const config = {
        headers: {
            ContentType: 'application/json'
        }
    }

    const getIcons = (n) => {
        switch(n){
            case 'Web Copy Development':
                return '../../../images/assets/icon@webcopy.svg'
           case 'Coorperate Writing':
              return '../../../images/assets/icon@corp.svg'
          case 'Document Proofreading':
              return '../../../images/assets/icon@proof.svg'
          case 'Editing':
              return '../../../images/assets/icon@editing.svg'
          case 'Website Editing':
              return '../../../images/assets/icon@webedit.svg'
          case 'Document Editing':
              return '../../../images/assets/icon@editing.svg'
          case 'Creative Writing':
              return '../../../images/assets/icon@write.svg'
          case 'Audio Transcription':
              return '../../../images/assets/icon@audio.svg'
          default:
              return ''
        }
    }

    const fillOptions = () => {

        const svs = serviceContext.services.map((s) => {
            const m = {
                value: s._id,
                label: s.name,
                left: '',
                image: getIcons(s.name)
            }

            return m;
        });

        return svs;

    }

    const getSelected = (val) => {
        setData({...contactData, service: val.label});
    }

    

    

    const submit = async (e) => {

        e.preventDefault();

        if(step === 0){

            if(!contactData.email && !contactData.service && !contactData.description){
                setAlertData({...alertData, type: 'danger', message: 'All fields are required', show: true});
                setTimeout(() => {
                    setAlertData({...alertData, show: false});
                },2500)
            }else if(!contactData.email)
            {
                setAlertData({...alertData, type: 'danger', message: 'Email is required', show: true});
                setTimeout(() => {
                    setAlertData({...alertData, show: false});
                },2500)
            }else if(!contactData.service)
            {
                setAlertData({...alertData, type: 'danger', message: 'Service is required', show: true});
                setTimeout(() => {
                    setAlertData({...alertData, show: false});
                },2500)
            }
            else if(!contactData.description)
            {
                setAlertData({...alertData, type: 'danger', message: 'Description is required', show: true});
                setTimeout(() => {
                    setAlertData({...alertData, show: false});
                },2500)
            }else{
                setLoading(true);
                
                await Axios.post(`${process.env.REACT_APP_API_URL}/emails/contact`, {...contactData}, config).
                then((resp) => {
                    if(resp.data.error === false){
                        setLoading(false);
                        handleSubmit(e, null);
                    }
                    
                }).
                catch((err) => {
                    setAlertData({...alertData, type: 'danger', message: `${err.response.data.errors}`, show: true});
                    setTimeout(() => {
                        setAlertData({...alertData, show: false});
                    },2500)
                    setLoading(false);
                })
                
            }
            
        }
        
    }



    return(
        <>
            <AlertMini type={alertData.type} message={alertData.message} isVisibile={alertData.show}  />

            <div className="form-group">
                <label className="font-gilroymedium brandcox-firefly fs-14 mb-1">Select service</label>
                <Dropdown options={fillOptions} selected={getSelected} className="md--select" image={true} placeholder={`Select option`} search={true} />
            </div>
            <div className="form-group">
            <label className="font-gilroymedium brandcox-firefly fs-14 mb-1">Enter your email address</label>
            <input type="email"
            defaultValue={(e) => {setData({...contactData, email: e.target.value})} } 
            onChange={(e) => {setData({...contactData, email:e.target.value})}} 
            className="font-gilroy fs-15 form-control" placeholder="E.g. you@example.com" />
            </div>
            <div className="form-group">
                <label className="font-gilroymedium brandcox-firefly fs-14 mb-1">Tell us what you want to do</label>
                <textarea 
                defaultValue={(e) => {setData({...contactData, description: e.target.value})} } 
                onChange={(e) => {setData({...contactData, description:e.target.value})}} 
                className="font-gilroy fs-15 form-control" />
            </div>
            <div className="mrgt3">
            {
                loading ? (
                    <Link to="" className="btn big-btn hero-start btn-block bg-brand-yellow onmineshaft font-gilroybold disabled"><ButtonSpinner imageUrl={`../../../images/assets/spinner-white.svg`} /></Link>
                ) : (
                    <Link onClick={(e) => submit(e)} to="" className="btn big-btn hero-start btn-block bg-brand-yellow onmineshaft font-gilroybold">Submit</Link>
                )
            }
            </div>
        </>
    )

}

export default Contact;