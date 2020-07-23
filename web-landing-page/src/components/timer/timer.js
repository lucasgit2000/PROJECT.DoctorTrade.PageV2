import React from 'react';

import './timer.css'

function Timer() {
    return (
        <div className="containerTimer">
            <div className="contentTimer">
                <span className="desc-promo">CONTAGEM REGRESSIVA PARA FIM DAS INSCRIÇÕES: </span>
                <span className="cronometro">10:00:00</span>
            </div>
        </div>
    );
}

export default Timer;