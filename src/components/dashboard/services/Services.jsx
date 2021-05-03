import React, { useEffect, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios'

import NavBar from '../../layouts/partials/NavBar';
import Footer from '../../layouts/partials/Footer';
import ContactModal from '../../layouts/partials/ContactModal'
import Faq from '../../pages/Faq'
import ServicesModal from '../../layouts/partials/ServicesModal'
import ServiceContext from '../../../context/service/serviceContext'

import AlertMini from '../../layouts/partials/AlertMini';
import ButtonSpinner from '../../layouts/partials/ButtonSpinner'
import Dialog from './Dialog'

const Services = (props) => {

        const serviceContext = useContext(ServiceContext)

    const [showS, setShowS] = useState(false);
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(0);
    const [pageData, setPage] = useState({
        title: 'What project would you like to do?',
        intro: 'We offer a range of services within the creative content development industry.'
    });

    const [alertData, setAlertData] = useState({
        show: false,
        type: 'info',
        message: '...'
    });

    const [projectData, setProject] = useState({
        name: '',
        serviceId: '',
        serviceName: '',
        description: ''
    })

    useEffect(() => {

        redirectToLogin()

        scrollTop()
        serviceContext.getServices();

    }, []);

    const redirectToLogin = () => {

        if(!localStorage.getItem('token')){
            localStorage.clear();
            props.history.push('/signin');
        }

    }


    const toggleModal = () => {
        setShowS(!showS);
    }

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

      const splitName = (n) => {

        let p1, p2;

        const na = n.split(' ');

        if(n === 'Web Copy Development'){

            p1 = na[0] + ' ' + na[1];
            p2 = na[2];

        }else{
            p1 = na[0];
            p2 = na[1];
        }

        return { partOne: p1, partTwo: p2 }

      }
      
      const next = (e, s) => {
          e.preventDefault();
          setProject({...projectData, serviceId: s._id, serviceName: s.name});
          setPage({...pageData, title: 'Tell us about your project', intro: 'We will create a project for you and follow up with an email.'})
          setStep(1);
      }

      const prev = (e) => {
        e.preventDefault();
        setProject({...projectData, serviceId: '', serviceName: ''});
        setPage({...pageData, title: 'What project would you like to do?', intro: 'We offer a range of services within the creative content development industry.'})
        setStep(0);
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

      const submit = async(e) => {
          e.preventDefault();

          if(!projectData.name && !projectData.description){
              setAlertData({...alertData, show: true, type: 'danger', message: 'All fields are required.'});
              setTimeout(() => {
                  setAlertData({...alertData, show: false});
              }, 3000)
          }else if(!projectData.name){
            setAlertData({...alertData, show: true, type: 'danger', message: 'Please supply a project name'});
            setTimeout(() => {
                setAlertData({...alertData, show: false});
            }, 3000)
        }else if(!projectData.description){
            setAlertData({...alertData, show: true, type: 'danger', message: 'Please supply project description'});
            setTimeout(() => {
                setAlertData({...alertData, show: false});
            }, 3000)
        }else{

            setLoading(true);

            const configx = {
                headers: {
                    ContentType: 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }

            await Axios.post(`${process.env.REACT_APP_API_URL}/projects`, {...projectData}, configx)
            .then((resp) => {

                if(resp.data.error === false){
                    toggleModal();
                    setLoading(false);
                }
                

            }).catch((err) => {
                setAlertData({...alertData, show: true, type: 'danger', message: `${err.response.data.message}`});
                setTimeout(() => {
                    setAlertData({...alertData, show: false});
                }, 3000)
                setLoading(false);

            })

        }

      }

    

    return(
        <>
        
          

           

            
            <section id="services" className="services section ui-full-bg-norm" style={{backgroundImage: 'url("../../images/assets/bg@back-five.jpg")'}}>
                <div className="container">
                    <div className="ui-wrapper-large">

                        <div className="row">
                        
                        <div className="col-md-4 mx-auto">
                        <h1 className="font-montserratbold text-center">
                                    <span className="brand-purple fs-20">{pageData.title}</span>  
                                </h1>
                                <p className="font-montserratmedium text-center">
                                    <span className="  brand-purpledark fs-16">{pageData.intro}</span>  
                                </p>
                        </div>
                           
                             
                        </div>

                        {
                            step === 0 &&
                            <>
                                <div className="row mrgt3 mrgb1">

                                    <div className="col-md-8 mx-auto">

                                        <div className="serv--bx">

                                            {

                                                serviceContext.loading &&
                                                <>
                                                
                                                    <div className="load--bx">

                                                        <img src="../../../images/assets/spinner-p.svg" className="spin-serv" width="60px" alt="spinner" />
                                                        <p className="font-montserrat text-center mrgt1">
                                                            <span className="brand-purpledark fs-16">Please Wait...</span>  
                                                        </p>

                                                    </div>
                                                
                                                </>

                                            }

                                            {

                                                !serviceContext.loading && serviceContext.services.length > 0 &&
                                                <>
                                                    {
                                                        serviceContext.services.map((s, i) => 
                                                        
                                                            <>
                                                                <div className="">
                                                                    <Link onClick={(e) => next(e, s)} className="s--link dropdown">
                                                                        <div className="s--box">
                                                                        
                                                                            <img src={getIcons(s.name)} alt="icon" />
                                                                            <p className="name">
                                                                                <span className="font-montserratmedium fs-17">{ splitName(s.name).partOne  }</span>
                                                                                <span className="font-montserratmedium fs-17">{ splitName(s.name).partTwo  }</span>
                                                                            </p>
                                                                            <p className="dur mrgb0">
                                                                                <span className="font-montserratmedium fs-12">Delivery in {s.deliveryDays.toString()} days</span>
                                                                            </p>
                                                                        </div>
                                                                        
                                                                    </Link>
                                                                </div>
                                                            </>
                                                        )
                                                    }
                                                </>

                                            }

                                        </div>

                                    </div>

                                </div>

                            </>
                        }

                        {
                            step === 1 &&
                            <>
                                <div className="row">

                                    <div className="col-md-5 mx-auto">

                                        <div className="c--box ui-box-shadow-dark-light mrgt1">

                                    <AlertMini type={alertData.type} message={alertData.message} isVisibile={alertData.show}  />

                                    <form onSubmit={(e) => e.preventDefault()}>
                                        
                                        <div className="form-group d-flex align-items-center">
                                            <label className="font-gilroymedium fs-16 mrgb0">
                                                <span className="fs-16 onmineshaft">Selected Service</span> &nbsp;
                                                <span className="fs-14 brand-purple">(<Link onClick={(e) => prev(e)}>change</Link>)</span>
                                            </label>
                                            <div className="ml-auto">
                                                <img src={getIcons(projectData.serviceName)} width="25px" alt="service" /> &nbsp;
                                                <span className="font-gilroy fs-15 brand-purple">{projectData.serviceName}</span>
                                            </div>
                                            
                                        </div>

                                        <div className="form-group">
                                            <label className="font-gilroymedium brandcox-firefly fs-14 mb-1">Give your project a name</label>
                                            <input type="email"
                                            defaultValue={(e) => {setProject({...projectData, name: e.target.value})} } 
                                            onChange={(e) => {setProject({...projectData, name:e.target.value})}} 
                                            className="font-gilroy fs-15 form-control" placeholder="E.g. My New Project" />
                                        </div>

                                        <div className="form-group">
                                            <label className="font-gilroymedium brandcox-firefly fs-14 mb-1">Describe what you want to do</label>
                                            <textarea 
                                                defaultValue={(e) => {setProject({...projectData, description: e.target.value})} } 
                                                onChange={(e) => {setProject({...projectData, description:e.target.value})}}
                                            className="font-gilroy fs-15 form-control" />
                                        </div>

                                        <div className="mrgt3">
                                            {
                                                loading ? (
                                                    <Link to="" className="btn big-btn hero-start btn-block bg-brand-yellow onmineshaft font-gilroybold disabled"><ButtonSpinner imageUrl={`../../../images/assets/spinner-white.svg`} /></Link>
                                                ) : (
                                                    <Link onClick={(e) => submit(e)} to="" className="btn big-btn hero-start btn-block bg-brand-yellow onwhite font-gilroybold">Create Project</Link>
                                                )
                                            }
                                        </div>
                                    

                                    </form>

                                </div>

                                    </div>

                                </div>
                            </>
                        }
                        
                    </div>
                </div>

                
            </section>
        
            <Dialog isShow={showS} closeModal={toggleModal} />

        </>
    )

}

export default Services;