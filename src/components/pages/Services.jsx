import React, { useEffect, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import NavBar from '../layouts/partials/NavBar';
import Footer from '../layouts/partials/Footer';
import ContactModal from '../layouts/partials/ContactModal'
import Faq from './Faq'
import ServicesModal from '../layouts/partials/ServicesModal'
import ServiceContext from './../../context/service/serviceContext'

const Services = (props) => {

    const serviceContext = useContext(ServiceContext)

    const [showS, setShowS] = useState(false);
    const history = useHistory();
    const [step, setStep] = useState(0)

    const [projectData, setProject] = useState({
        name: '',
        serviceId: '',
        description: ''
    })

    useEffect(() => {

        if(!localStorage.getItem('token')){
            props.history.push('/signin')
        }

        scrollTop()
        serviceContext.getServices();

    }, []);


    const openService = () => {
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
      
      const getType = (e, s) => {
          e.preventDefault();
          setProject({...projectData, serviceId: s.name});
          setStep(1);
      }

      const getIcons = (n) => {
          switch(n){
              case 'Web Copy Development':
                  return '../../../images/assets/icon@webcopy.svg'
             case 'Coorperate Writing':
                return '../../../images/assets/icon@corp.svg'
            case 'Proofreading':
                return '../../../images/assets/icon@proof.svg'
            case 'Editing':
                return '../../../images/assets/icon@editing.svg'
            case 'Website Editing':
                return '../../../images/assets/icon@webedit.svg'
            case 'Editing':
                return '../../../images/assets/icon@editing.svg'
            case 'Creative Writing':
                return '../../../images/assets/icon@write.svg'
            default:
                return ''
          }
      }

    

    return(
        <>
        
          

           

            
            <section id="services" className="section left experience ui-full-bg-norm" style={{backgroundImage: 'url("../../images/assets/bg@back-five.jpg")'}}>
                <div className="container">
                    <div className="ui-wrapper-large">

                        <div className="row">
                        
                        <div className="col-md-4 mx-auto">
                        <h1 className="font-montserratbold text-center">
                                    <span className="brand-purple fs-20">What would you like to do? </span>  
                                </h1>
                                <p className="font-montserratmedium text-center">
                                    <span className="  brand-purpledark fs-16">We offer range of services within the creative content development industry. </span>  
                                </p>
                        </div>
                           
                             
                        </div>

                        {
                            step === 0 &&
                            <>
                                <div className="row mrgt3 mrgb1">

                                    <div className="col-md-8 mx-auto">

                                        <div className="row">

                                            {

                                                serviceContext.loading &&
                                                <></>

                                            }

                                            {

                                                !serviceContext.loading && serviceContext.services.length > 0 &&
                                                <>
                                                    {
                                                        serviceContext.services.map((s, i) => 
                                                        
                                                            <>
                                                                <div className="col-md-3 col-sm-6">
                                                                    <Link onClick={(e) => getType(e, s)} className="s--link dropdown">
                                                                        <div className="s--box ">
                                                                        
                                                                            <img src={getIcons(s.name)} alt="icon" />
                                                                            <p className="name">
                                                                                <span className="font-montserratmedium fs-17">{ splitName(s.name).partOne  }</span>
                                                                                <span className="font-montserratmedium fs-17">{ splitName(s.name).partTwo  }</span>
                                                                            </p>
                                                                            <p className="dur mrgb0">
                                                                                <span className="font-montserratmedium fs-12">Delivery in 4 days</span>
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
                                <h1>{ projectData.serviceId }</h1>
                            </>
                        }
                        
                    </div>
                </div>

                
            </section>
        


        </>
    )

}

export default Services;