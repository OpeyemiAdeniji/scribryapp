import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../layouts/partials/NavBar';
import Footer from '../layouts/partials/Footer';
import ContactModal from '../layouts/partials/ContactModal'
import Faq from './Faq'
import ServicesModal from '../layouts/partials/ServicesModal'

const Contact = () => {


    const [showS, setShowS] = useState(false);

    useEffect(() => {
        scrollTop()

    }, []);


    const openService = () => {
        setShowS(!showS);
    }

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

    

    return(
        <>
        
          

           

            
            <section id="services" className="section left experience ui-full-bg-norm full" style={{backgroundImage: 'url("../../images/assets/bg@back-five.jpg")'}}>
                <div className="container">
                    <div className="ui-wrapper-xxlarge">

                        <div className="row">
                        <div className="col-md-4 mx-auto">
                        <h1 className="font-montserratbold text-center">
                                    <span className="brand-blue fs-24">What would you like to do? </span>  
                                </h1>
                                <p className="font-montserratmedium text-center">
                                    <span className="  brand-purpledark fs-13">We offer range of services within the creative content development industry. </span>  
                                </p>
                        </div>
                            <div className="col-md-12 mx-auto">
                            
                                   
                                <div className="row row-x mrgt2">
                                

                                    <div className="col-md-8 mx-auto">
                                        <div className="row">

                                        <div className="col-md-3 col-sm-6">
                                            <Link  className="s--link ">
                                                <div className="s--box ">
                                                
                                                    <img src="../../../images/assets/icon@editing.svg" alt="icon" />
                                                    <p className="name">
                                                    <span className="font-montserratmedium fs-17">Document</span>
                                                        <span className="font-montserratmedium fs-17">Editing</span>
                                                    </p>
                                                    <p className="dur mrgb0">
                                                        <span className="font-montserratmedium fs-12">Delivery in 4 days</span>
                                                    </p>
                                                </div>
                                                
                                            </Link>
                                        </div>
                                            
                                        <div className="col-md-3 col-sm-6">
                                            <Link  className="s--link">
                                                <div className="s--box">
                                                    <img src="../../../images/assets/icon@proof.svg" alt="icon" />
                                                    <p className="name">
                                                        <span className="font-montserratmedium fs-17">Proofreading</span><br/>
                                                        <span className="font-montserratmedium fs-17">{""}</span>
                                                    </p>

                                                    <p className="dur mrgb0">
                                                        <span className="font-montserratmedium fs-12">Delivery in 2 days</span>
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                        
                                        <div className="col-md-3 col-sm-6">
                                            <Link  className="s--link ">
                                                <div className="s--box">
                                                <img src="../../../images/assets/icon@write.svg" alt="icon" />
                                                <p className="name">
                                                    <span className="font-montserratmedium fs-17">Creative</span>
                                                    <span className="font-montserratmedium fs-17">Writing</span>
                                                </p>
                                                <p className="dur mrgb0">
                                                    <span className="font-montserratmedium fs-12">Delivery in 8 days</span>
                                                </p>
                                            </div>
                                           
                                            </Link>
                                        </div>

                                        <div className="col-md-3 col-sm-6">
                                            <Link to='/createproject' className="s--link dropdown">
                                            <button className='service-btn'>
                                                <div className="s--box">
                                                    <img src="../../../images/assets/icon@proof.svg" alt="icon" />
                                                    <p className="name">
                                                    <span className="font-montserratmedium fs-17">Cooperate</span>
                                                    <span className="font-montserratmedium fs-17">Writing</span>
                                                    </p>
                                                    <p className="dur mrgb0">
                                                        <span className="font-montserratmedium fs-12">Delivery in 2 days</span>
                                                    </p>
                                                </div>
                                                <div class="">
                                                <div class="dropdown-content">
    <span><Link to >Business Doc Development</Link></span>
    <span><Link to >Company Profile</Link></span>
    <span><Link to >Business Plan</Link></span>
    <span><Link to >Business Proposal</Link></span>
  </div>
</div>
                                            </button>
                                            </Link>
                                        </div>
                                        
                                         </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                             
                             
                        </div>


                        

                    </div>
                </div>

                <div className="container">
                    <div className="services-two">

                        <div className="row">
                            <div className="col-md-12 text-center mx-auto">

                                <div className="row row-x mrg">

                                   

                                    <div className="col-md-6 mx-auto">
                                        <div className="row">

                                        <div className="col-md-4 col-sm-6">
                                            <Link to='' className="s--link">
                                                <div className="s--box">
                                                    <img src="../../../images/assets/icon@editing.svg" alt="icon" />
                                                    <p className="name">
                                                    <span className="font-montserratmedium fs-17">Web Copy</span>
                                                    <span className="font-montserratmedium fs-17">Development</span>
                                                      
                                                    </p>

                                                    <p className="dur mrgb0">
                                                        <span className="font-montserratmedium fs-12">Delivery in 4 days</span>
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                            
                                    
                                        <div className="col-md-4 col-sm-6">
                                            <Link  className="s--link">
                                                <div className="s--box">
                                                <img src="../../../images/assets/icon@write.svg" alt="icon" />
                                                <p className="name">
                                                    <span className="font-montserratmedium fs-17">Website</span>
                                                    <span className="font-montserratmedium fs-17">Editing</span>
                                                    <span className="font-montserratmedium fs-17">{""}</span>
                                                </p>

                                                <p className="dur mrgb0">
                                                    <span className="font-montserratmedium fs-12">Delivery in 8 days</span>
                                                </p>
                                            </div>
                                            </Link>
                                        </div>
                                        <div className="col-md-4 col-sm-6">
                                            <Link  className="s--link  service-btn">
                                                <div className="s--box">
                                                    <img src="../../../images/assets/icon@proof.svg" alt="icon" />
                                                    <p className="name">
                                                    <span className="font-montserratmedium fs-17">Creative</span>
                                                    <span className="font-montserratmedium fs-17">Transcription</span>
                                                    </p>

                                                    <p className="dur mrgb0">
                                                        <span className="font-montserratmedium fs-12">Delivery in 2 days</span>
                                                    </p>
                                                </div>
                                                <div class="">
                                                <div class="dropdown-content">
    <span><Link to >Document</Link></span>
    <span><Link to >Document</Link></span>
    <span><Link to >Document</Link></span>
  </div>
</div>
                                            </Link>
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
    )

}

export default Contact;