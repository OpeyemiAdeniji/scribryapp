import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Modal} from 'react-bootstrap';

import Message from '../../layouts/partials/Message';

const Dialog = ({isShow, closeModal}) => {

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

    let history = useHistory();

    useEffect(() => {

        setModalTitle('Contact Us');
    });

    const submitForm = (e) => {

        e.preventDefault();
        history.push('/dashboard/projects');
        closeModal();
    }

    return (
        <>
            <Modal show={isShow} 
                onHide={(e) => e.preventDefault()} 
                size="sm"
                fade={false}
                keyboard={false}
                aria-labelledby="small-modal"
                centered
                className="dm--modal"
            >

                <Modal.Body>

                    <div className="d-flex">
                        <div className="dm--dbx ui-full-bg-norm" style={{backgroundImage: 'url("../../images/assets/img@pmodal.jpg")'}}>
                            <div className="dm--d">
                                <div>
                                    {/* <img src="../../images/assets/img@idadd.svg" alt="icon" /> */}
                                </div>
                            </div>
                        </div>
                        <div className="dm--body">

                            <div className="d-flex align-items-center mrgb1">
                                <h2 className="font-gilroybold brand-purple fs-18">{modalTitle ? modalTitle : "Create Project"}</h2>
                                <div className="ml-auto">
                                    <Link onClick={closeModal} className="dot-close">
                                        <span className="fe fe-x brand-purple fs-13"></span>
                                    </Link>
                                </div>
                            </div>

                            <div className="dm--ct">

                                <Message buttonText={'Continue'} title={'Successful!'} message={'We have successfully created your first Scribry project'} handleSubmit={submitForm} />
                               
                            </div>

                        </div>
                    </div>
                    
                </Modal.Body>

            </Modal>
        </>
    )

}

export default Dialog;