import React, { useState } from 'react';

import './timer.css'

function Timer() {

    const [showTimer, setShowTimer] = useState(true)

    function ShowTimer() {
        setShowTimer(true)
        console.log(showTimer)
    }

    function HideTimer() {
        setShowTimer(false)
        console.log(showTimer)
    }

    return (

        showTimer ?

        <div className="containerTimer">
            <div className="timer-closeButton" onClick={() => {HideTimer()}}>x</div>
            <div className="contentTimer">
                <span className="desc-promo">
                    🔥 CONTAGEM REGRESSIVA PARA FIM DAS INSCRIÇÕES DO <a href="#">CURSO</a>: <strong>10:00:00</strong>
                </span>
            </div>
        </div>

        :

        null
    );
}

export default Timer;