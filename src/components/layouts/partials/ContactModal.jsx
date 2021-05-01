import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Modal} from 'react-bootstrap';

import Contact from './Contact';
import Message from './Message';

const ContactModal = ({isShow, closeModal}) => {

    const [show, setShow] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [buttonText, setButtonText] = useState('');
    const [uMessage, setUMessage] = useState('');
    const [uAction, setUAction] = useState('');
    const [step, setStep] = useState(0);
    const [mView, setView] = useState({
        title: '',
        message: '',
    });

    useEffect(() => {

        setModalTitle('Contact Us');
    });

    const submitForm = (e, data) => {

        if(step === 0 && data === null){
            setView({...mView, title: 'Successful!', message: 'We have recieved your message, we will reach out to you shortly. Thank you.'})
            setStep(1);
        }

        if(step === 1 && data === null){
            setStep(0);
            closeModal('close');
        }

    }

    return (
        <>
            <Modal show={isShow} 
                onHide={closeModal} 
                size="sm"
                fade={false}
                keyboard={false}
                aria-labelledby="small-modal"
                centered
                className="dm--modal"
            >

                <Modal.Body>

                    <div className="d-flex">
                        <div className="dm--dbx ui-full-bg-norm" style={{backgroundImage: 'url("../../images/assets/img@tmodal.jpg")'}}>
                            <div className="dm--d">
                                <div>
                                    {/* <img src="../../images/assets/img@idadd.svg" alt="icon" /> */}
                                </div>
                            </div>
                        </div>
                        <div className="dm--body">

                            <div className="d-flex align-items-center mrgb1">
                                <h2 className="font-gilroybold brand-purple fs-18">{modalTitle ? modalTitle : "No Title"}</h2>
                                <div className="ml-auto">
                                    <Link onClick={closeModal} className="dot-close">
                                        <span className="fe fe-x brand-purple fs-13"></span>
                                    </Link>
                                </div>
                            </div>

                            <div className="dm--ct">

                                <form onSubmit={(e) => e.preventDefault()} method="POST">

                                    {
                                        step === 0 &&
                                        <>
                                            <Contact handleSubmit={submitForm} />
                                        </>
                                    }

                                    {
                                        step === 1 &&
                                        <>
                                            <Message buttonText={'Ok'} title={mView.title} message={mView.message} handleSubmit={submitForm} />
                                        </>
                                    }

                                </form>

                                
                               
                            </div>

                        </div>
                    </div>
                    
                </Modal.Body>

            </Modal>
        </>
    )

}

export default ContactModal;