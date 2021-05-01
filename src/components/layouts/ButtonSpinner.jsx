import React from 'react';

const ButtonSpinner = ({imageUrl , width}) => {

    return (
        <div>
            <span className="loading-spinner ui-text-center">
                <img width={width ? width : '20px'} src={imageUrl ? imageUrl : "images/assets/spinner.svg"} alt="spinner" />
            </span>
        </div>
    )

}

export default ButtonSpinner;