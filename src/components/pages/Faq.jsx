import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';

const Faq = ({ question, answer, hierachy }) => {

    return(
        <>
             <div className="col-md-6">
                <div className="faq--bx bg-white ui-box-shadow-dark-fade ui-rounded-small">
                <div className id="headingOne1">
                    <a data-toggle="collapse" className="faq-link" data-parent="#accordionEx" href={`#collapse${hierachy}`} aria-expanded="true" aria-controls="collapseOne1">
                    <h5 className="mb-0 font-gilroymedium d-flex align-items-center" style={{color: '#042C64'}}>
                        <span className="fs-16">{ question ? question : 'No Question'}</span> 
                        <span className="ml-auto"><i className="fe fe-chevron-down rotate-icon ui-pull-right" style={{position: 'relative', top: '2px'}} /></span>
                    </h5>
                    </a>
                </div>
                <div id={`collapse${hierachy}`} className="collapse" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordionEx">
                    <div className="onminseshaft font-gilroymedium fs-15 mrgt1 font-weight-light">
                    { answer ? answer : 'No Answer' }
                    </div>
                </div>
                </div>
            </div>
        </>
    )

}

export default Faq;