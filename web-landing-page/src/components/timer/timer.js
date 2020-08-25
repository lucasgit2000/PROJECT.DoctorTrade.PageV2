import React from 'react';

import './timer.css'

function Timer() {
    return (
        <div className="containerTimer">
            <div className="contentTimer">
                <span className="desc-promo">CONTAGEM REGRESSIVA PARA FIM DAS INSCRIÇÕES: <strong>10:00:00</strong> </span>
            </div>
        </div>
    );
}

export default Timer;