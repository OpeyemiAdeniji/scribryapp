import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {Modal} from 'react-bootstrap';
import checkData from '../../_data/check-green.json';

import LottiePlayer from '../../../components/layouts/partials/LottiePlayer';


const SuccessModal = ({ modalState, isMessage, backDrop, className, lottieData, title, body, goTo}) => {

    const [successShow, setMshow] = useState(false)

    return(
        
        <Modal show={modalState ? modalState : successShow} 
        onHide={modalState} 
        size="sm"
        fade={false}
        backdrop={backDrop ? backDrop : "static"} 
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={className ?  className : "modaal"}
      >

      <Modal.Body className="md--body">
       
            {lottieData &&  <LottiePlayer lottieData={checkData} w={200} h={200} />}

            {isMessage && 
                <>
                   
    
                    <div className="row ui-text-center">
                        <div className="col-md-8 mx-auto">
                            <h2 className="font-gilroymedium brand-p mrgb1 fs-20">{title}</h2>
                            <p className="mrgb1 font-gilroy fs-14">{body}</p>
                        </div>
                    </div>

                    <div className="ui-group-button ui-text-center mrgb1">
                        <Link to={goTo ? goTo : '/'} className="btn big-btn hero-start btn-block bg-brand-yellow onmineshaft font-gilroybold">
                            Continue
                        </Link>
                       
                    </div>
                   
                </>
            }

            
         
      </Modal.Body>

      {/* <Modal.Footer>
        
      </Modal.Footer> */}

  </Modal>
        

    )

}

export default SuccessModal;