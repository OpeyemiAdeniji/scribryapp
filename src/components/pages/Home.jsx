import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../layouts/partials/NavBar';
import Footer from '../layouts/partials/Footer';
import ContactModal from '../layouts/partials/ContactModal'
import Faq from './Faq'
import ServicesModal from '../layouts/partials/ServicesModal'

const Contact = () => {

    const [show, setShow] = useState(false);
    const [showS, setShowS] = useState(false);
    const [sData, setSData] = useState({
        title: '',
        description: ''
    })

    useEffect(() => {
        scrollTop()

    }, []);

    const services = [
        {
            type: 'de',
            title: 'Document Editing',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            type: 'pr',
            title: 'Proofreading',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            type: 'cw',
            title: 'Creative Writing',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            type: 'crw',
            title: 'Corporate Writing',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            type: 'we',
            title: 'Website Editing',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            type: 'wcd',
            title: 'Web Copy Editing',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            type: 'tr',
            title: 'Transcription',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
    ];

    const getContent = (e, t) => {

        e.preventDefault();

        const s = services.find((i) => i.type === t);
        setSData({...sData, title: s.title, description: s.description});
        openService();

    }

    const toggleModal = () => {
        setShow(!show);
    }
 

    const openService = () => {
        setShowS(!showS);
    }

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

    

    return(
        <>
        
            <NavBar />

            <section className="hero home-hero ui-full-bg-norm" style={{backgroundImage: 'url("../../images/assets/bg@bg-hero.jpeg")'}}>
                <div className="container">
                    <div className="ui-wrapper-large">

                        <div className="row">

                            <div className="col-md-6">

                                <Link onClick={toggleModal} to="" className="box-label-link">
                                    <div className="box-label cyanlight mrgt2">
                                        <div className="label">Get Started</div>
                                        <div className="content">Gain access to amazing content development services</div>
                                        <div className="icon"><span className="fe fe-arrow-right"></span></div>
                                    </div>
                                </Link>
                                
                                <h1 className="font-montserratbold title title-large">
                                    <span className="brand-purpledark">We combine </span>  
                                    <span className="brand-purpledark">creative writing and</span> 
                                    <span className="brand-yellow"> design</span> 
                                    <span className="brand-purpledark"> thinking</span>
                                </h1>

                                <div className="font-gilroymedium body-text fs-17 hero-text brand-blackblue">
                                Through our exquisite proofreading, editing, writing and content development services, we enable individuals, writers, authors, students, content developers, businesses and organizations communicate their ideas, contents, solutions and offering, clearly and effectively, to their audiences and markets.
                                </div>

                                <div className="ui-group-button mrgt3">
                                    <Link to="/contact" className="btn big-btn hero-start bg-brand-purple onwhite font-gilroybold">Get Started</Link>
                                    <Link onClick={toggleModal} to="" className="brand-purpledark font-gilroybold video-link">
                                        <span>Contact Us</span> &nbsp;
                                        <span className="fe fe-arrow-right" style={{position: 'relative', top: '2px'}}></span> 
                                    </Link>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <section className="section right lenders ui-full-bg-norm" style={{backgroundImage: 'url("../../images/assets/bg@back-one.jpg")'}}>
                <div className="container">
                    <div className="ui-wrapper-xlarge">

                        <div className="row">

                            <div className="col-md-6">

                                

                                <div className="title-intro yellow mrgt2">
                                    Better writing experience
                                </div>

                                 <h1 className="font-montserratbold title">
                                    <span className="brand-purple">Full service</span>  
                                    <span className="brand-yellow"> writing &</span> 
                                    <span className="brand-purple"> content development</span> 
                                </h1>

                                <div className="sec--img ui-text-center ui-show-mobile-only">

                                    <img src="../../../images/assets/img@pcircle.svg" className="p-circle" alt="p-circle"/>
                                    <img src="../../../images/assets/img@lenders.png" className="main" alt="main"/>
                                    <img src="../../../images/assets/img@lycircle.svg" className="ly-circle" alt="ly-circle"/>

                                </div>

                                <p className="font-gilroymedium hero-text brand-blackblue">
                                We help authors, writers, content creators and organization realize their dreams. Through our exquisite writing, proofreading and editing, and content development products and services, we enable individuals, businesses and organizations communicate their ideas, thought, solutions and offering to their audience and markets.
                                </p>

                                <div className="ui-group-button mrgt3">
                                    <Link to="/contact" className="btn big-btn hero-start bg-brand-purple onwhite font-helveticabold">Get Started</Link>
                                    <Link  to="" className="brand-purpledark font-gilroybold video-link">
                                        <span>Contact Us</span> &nbsp;
                                        <span className="fe fe-arrow-right" style={{position: 'relative', top: '2px'}}></span> 
                                    </Link>
                                </div>

                                
                            </div>

                            <div className="col-md-6  ui-hide-mobile-only">

                                <div className="sec--img ui-text-center">

                                    <img src="../../../images/assets/img@pcircle.svg" className="p-circle" alt="p-circle"/>
                                    <img src="../../../images/assets/img@lenders.png" className="main" alt="main"/>
                                    <img src="../../../images/assets/img@lycircle.svg" className="ly-circle" alt="ly-circle"/>

                                </div>
                                
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        
            <section id="services" className="section left experience ui-full-bg-norm" style={{backgroundImage: 'url("../../images/assets/bg@back-two.jpg")'}}>
                <div className="container">
                    <div className="ui-wrapper-xlarge">

                        <div className="row">
                            <div className="col-md-6">

                                <div className="row row-x mrgt2">

                                    <div className="ui-show-mobile-only mrgb2">
                                        <div className="title-intro yellow">
                                            Amazing writing services
                                        </div>

                                        <h1 className="font-montserratbold title">
                                            <span className="brand-purple">Exquisite</span>  
                                            <span className="brand-yellow"> services </span> 
                                            <span className="brand-purple">on writing and more...</span> 
                                        </h1>
                                    </div>

                                    <div className="col-md-11">
                                        <div className="row">

                                        <div className="col-md-4 col-sm-6">
                                            <Link onClick={(e) => getContent(e, 'de')} className="s--link">
                                                <div className="s--box">
                                                
                                                    <span className="fe fe-external-link brand-purple"></span>
                                                    <img src="../../../images/assets/icon@editing.svg" alt="icon" />
                                                    <p className="name">
                                                        {/* <span className="font-montserratmedium fs-17">Document</span> */}
                                                        
                                                        <span className="font-montserratmedium fs-17">Editing</span>
                                                        <br/>
                                                    </p>

                                                    <p className="dur mrgb0">
                                                        <span className="font-montserratmedium fs-12">Delivery in 4 days</span>
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                            
                                        <div className="col-md-4 col-sm-6">
                                            <Link onClick={(e) => getContent(e, 'pr')} className="s--link">
                                                <div className="s--box">
                                                    <span className="fe fe-external-link brand-purple"></span>
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
                                        
                                        <div className="col-md-4 col-sm-6">
                                            <Link onClick={(e) => getContent(e, 'cw')} className="s--link">
                                                <div className="s--box">
                                                <span className="fe fe-external-link brand-purple"></span>
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
                                        
                                        <div className="col-md-4 col-sm-6">
                                            <Link onClick={(e) => getContent(e, 'crw')} className="s--link">
                                                <div className="s--box">
                                                <span className="fe fe-external-link brand-purple"></span>
                                                    <img src="../../../images/assets/icon@corp.svg" alt="icon" />
                                                    <p className="name">
                                                        <span className="font-montserratmedium fs-17">Corporate</span>
                                                        <span className="font-montserratmedium fs-17">Writing</span>
                                                    </p>

                                                    <p className="dur mrgb0">
                                                        <span className="font-montserratmedium fs-12">Delivery in 21 days</span>
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>

                                        <div className="col-md-4 col-sm-6">
                                            <Link onClick={(e) => getContent(e, 'we')} className="s--link">
                                                <div className="s--box">
                                                <span className="fe fe-external-link brand-purple"></span>
                                                <img src="../../../images/assets/icon@webedit.svg" alt="icon" />
                                                <p className="name">
                                                    <span className="font-montserratmedium fs-17">Website</span>
                                                    <span className="font-montserratmedium fs-17">Editing</span>
                                                </p>

                                                <p className="dur mrgb0">
                                                    <span className="font-montserratmedium fs-12">Delivery in 30 days</span>
                                                </p>
                                            </div>
                                            </Link>
                                        </div>


                                        <div className="col-md-4 col-sm-6">
                                            <Link onClick={(e) => getContent(e, 'wcd')} className="s--link">
                                                <div className="s--box">
                                                <span className="fe fe-external-link brand-purple"></span>
                                                <img src="../../../images/assets/icon@webcopy.svg" alt="icon" />
                                                {/* <p className="name">
                                                    <span className="font-montserratmedium fs-17">Web copy</span>
                                                    <span className="font-montserratmedium fs-17">Development</span>
                                                </p> */}
                                            <p className="name">
                                                <span className="font-montserratmedium fs-17">Website</span>
                                                <span className="font-montserratmedium fs-17">Editing</span>
                                            </p>

                                                <p className="dur mrgb0">
                                                    <span className="font-montserratmedium fs-12">Delivery in 30 days</span>
                                                </p>
                                            </div>
                                            </Link>
                                        </div>

                                        <div className="col-md-4 col-sm-6 ui-hide">
                                            <Link onClick={(e) => getContent(e, 'tr')} className="s--link">
                                                <div className="s--box">
                                                    <span className="fe fe-external-link brand-purple"></span>
                                                    <img src="../../../images/assets/icon@webcopy.svg" alt="icon" />
                                                    <p className="name">
                                                        <span className="font-montserratmedium fs-17">Transcription</span>
                                                        <br />
                                                        {/* <span className="font-montserratmedium fs-17">Development</span> */}
                                                    </p>

                                                    <p className="dur mrgb0">
                                                        <span className="font-montserratmedium fs-12">Delivery in 30 days</span>
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>

                                        

                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                             
                             <div className="col-md-6">

                                <div className="ui-hide-mobile-only">
                                    <div className="title-intro yellow mrgt2">
                                        Amazing writing services
                                    </div>

                                    <h1 className="font-montserratbold title">
                                        <span className="brand-purple">Exquisite</span>  
                                        <span className="brand-yellow"> services </span> 
                                        <span className="brand-purple">on writing and more...</span> 
                                    </h1>
                                </div>

                                <p className="font-gilroymedium fs-18 hero-text brand-blackblue ui-hide-mobile-only">
                                Through our exquisite proofreading, editing, writing and content development services, we enable individuals, writers, authors, students, content developers, businesses and organizations communicate their ideas, contents, solutions and offering, clearly and effectively, to their audiences and markets.
                                </p>

                                <div className="ui-group-button group-x mrgt3">
                                    <Link to="/contact" className="btn big-btn hero-start bg-brand-purple onwhite font-helveticabold">Get Started</Link>
                                    <Link onClick={toggleModal} to="" className="brand-purpledark font-gilroybold video-link">
                                        <span>Contact Us</span> &nbsp;
                                        <span className="fe fe-arrow-right" style={{position: 'relative', top: '2px'}}></span> 
                                    </Link>
                                </div>

                                
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        
            <section id="faqs" className="section right decision ui-full-bg-norm" style={{backgroundImage: 'url("../../images/assets/bg@decision.jpg")'}}>
                <div className="container">
                    <div className="ui-wrapper-large">

                        <div className="row mrgb2">
                            <div className="col-md-6 mx-auto ui-text-center">

                                <h1 className="font-montserratbold">
                                    <span className="brand-purple fs-28">Frequently </span>  
                                    <span className="brand-yellow fs-28">asked </span> 
                                    <span className="brand-purple fs-28">questions</span> 
                                </h1>
                            </div>
                        </div>

                        <div className="row">

                            <div className="col-md-10 mx-auto faq-scroll">

                                 {/*Accordion wrapper*/}
                                <div className="accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                                   
                                    <div className="row">

                                        <Faq hierachy="One" question={'How do I get a word count for my document?'} answer={"In MS Word, go to the Review tab or Tools menu and select Word Count. If you're doing a word count for an academic paper, be sure to check the option to include footnotes and endnotes in the word count."} />
                                       <Faq hierachy="Two" question={'Which file do you accept?'} answer={"MS Word, Notepad, Adobe Acrobat, MS Excel, MS PowerPoint and Webpages"} />
                                       <Faq hierachy="Three" question={'Will I be able to read through your corrections while you edit?'} answer={"Yes, you can. We will share your documents with you while we edit, so you can see the progress of your work."} />
                                       <Faq hierachy="Four" question={'How do I remove your comments and the colors on my document?'} answer={"In MS Word files (.doc and .docx), the Comments feature allows you to quickly delete comments, either one by one or all at once. You can access the Comments tool by clicking the REVIEW tab and then the DELETE icon in the comment section. You can also right click on a comment balloon and select DELETE COMMENT on the fly out Menu."} />
                                       <Faq hierachy="Five" question={'How long will it take to get my document back?'} answer={"This depends absolutely on the service you order. Our turnaround times range from 6 hours to 3 weeks, though the availability of times will vary based on the service and the word count of your document."} />
                                       <Faq hierachy="Six" question={'Do I need to register before I can work with Scribry?'} answer={"You don't necessarily have to register. However, registering with Scribry gives  you certain benefits such as; access to a personal dashboard where you can access both your past and present projects. Our clients can also get discounts based on the number of projects they've  shared with us."} />
                                       <Faq hierachy="Seven" question={'What are your payment options?'} answer={"Bank transfer and Paystack."} />
                                      
                                    </div>

                                </div>

                            </div>
                            
                        </div>

                        <div className="ui-group-button mrgt2 ui-text-center">
                            <Link to="/contact" className="btn big-btn hero-start bg-brand-purple onwhite font-helveticabold">Contact Us</Link>                          
                        </div>
                    </div>
                </div>
            </section>

            <section className="section start ui-full-bg-norm" style={{backgroundImage: 'url("../../images/assets/bg@back-four.jpg")'}}>
                <div className="container">
                    <div className="ui-wrapper-xlarge">

                        <div className="row">

                            <div className="col-md-7 mx-auto ui-text-center">

                                 <h1 className="font-montserratbold title">
                                    <span className="onwhite">Working on a project that needs creative </span>  
                                    <span className="brand-yellow"> content? </span>
                                </h1>

                                <p className="body-text onwhite">
                                    <span className="font-gilroymedium">Give your next project an amazing content creatively crafted with design thinking</span>
                                </p>

                                <div className="ui-group-button mrgt3">
                                    <Link to="/contact" className="btn big-btn hero-start bg-brand-yellow onwhite font-gilroybold">Get Started</Link>
                                </div>

                                
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <Footer />

            <ContactModal isShow={show}  closeModal={toggleModal} />
            <ServicesModal isShow={showS} title={sData.title} content={sData.description} closeModal={openService} />
        </>
    )

}

export default Contact;