import React from 'react';

const ButtonSpinner = ({imageUrl, w}) => {

    return (
        <div>
            <span className="button-spinner ui-text-center">
                <img width={w ? w : '30px'} src={imageUrl ? imageUrl : "images/assets/spinner-p.svg"} alt="spinner" />
            </span>
        </div>
    )

}

export default ButtonSpinner;