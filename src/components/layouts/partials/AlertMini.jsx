import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const AlertMini = ({type, message, isVisibile }) => {

    const switchIcons = (type) => {
        let nm = 'alert-circle';

        if(type === 'info'){
            nm = 'alert-circle';
        }else if(type === 'danger'){
            nm = 'slash';
        }else if(type === 'warning'){
            nm = 'alert-triangle';
        }else if(type === 'success'){
            nm = 'check';
        }else{
            nm = 'alert-circle';
        }

        return nm;
    }

    return(
        <>
        <div class={`alert alert-${type ? type : 'info'} ${isVisibile ? 'ui-show' : 'ui-hide'}`} role="alert">
        <div class="d-flex">
            <div className="pdr1">
                <span className={`fe fe-${switchIcons(type)}`}></span>
            </div>
            <div>
            <div class="onmineshaft font-gilroy fs-13" style={{lineHeight: '15px'}}>{message ? message : '...'}</div>
            </div>
        </div>
        </div>
        </>
    )
}

export default AlertMini;