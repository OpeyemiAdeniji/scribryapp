import React, {useState} from 'react';
import Lottie from 'react-lottie';

import checkData from '../../_data/create-account.json'


const LottiePlayer = ({ lottieData, w, h, loop }) => {

    const [isStopped, SetIsStopped] = useState(false);
    const [isPaused, SetIsPaused] = useState(false);

    const buttonStyle = {
        display: 'block',
        margin: '10px auto'
    };

    const defaultOptions = {
        loop: loop ? true : false,
        autoplay: true, 
        animationData: lottieData ? lottieData : checkData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div>
            <Lottie 
                options={defaultOptions}
                height={h}
                width={w}
                isStopped={isStopped}
                isPaused={isPaused}/>

                {/* <button style={buttonStyle} onClick={() => this.setState({isStopped: true})}>stop</button>
                <button style={buttonStyle} onClick={() => this.setState({isStopped: false})}>play</button>
                <button style={buttonStyle} onClick={() => this.setState({isPaused: !this.state.isPaused})}>pause</button> */}
        </div>
    )

}

export default LottiePlayer;