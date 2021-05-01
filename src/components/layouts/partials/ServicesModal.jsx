import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Modal} from 'react-bootstrap';

import Contact from './Contact';
import Message from './Message';

const ServicesModal = ({isShow, closeModal, title, content}) => {

    const [modalTitle, setModalTitle] = useState('');
    

    useEffect(() => {

        setModalTitle(title);
    });

    const close = (e) => {
        e.preventDefault();
        closeModal();
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
                                    <Link onClick={close} className="dot-close">
                                        <span className="fe fe-x brand-purple fs-13"></span>
                                    </Link>
                                </div>
                            </div>

                            <div className="dm--ct">

                               {content ? content : ''}

                                <div className="mrgt3">
                                    <Link onClick={(e) => close(e)} to="" className="btn big-btn hero-start btn-block bg-brand-yellow onmineshaft font-gilroybold">Close</Link>
                                </div>
                               
                               
                            </div>

                        </div>
                    </div>
                    
                </Modal.Body>

            </Modal>
        </>
    )

}

export default ServicesModal;