import React, { useState, useEffect, useRef } from 'react';

import './timer.css'

function Timer() {

    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

    let interval = useRef()

    const startTimer = () => {
        const countDownDate = new Date('Sep 03, 2020 00:00:00').getTime()

        interval = setInterval(() => {
            const now = new Date().getTime()

            const timeLeft = countDownDate - now

            // const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
            const hours = Math.floor((timeLeft / (1000 * 60 * 60 * 24)) * 24)
            const minutes = Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60))
            const seconds = Math.floor(timeLeft % (1000 * 60) / 1000)

            if (timeLeft < 0) {
                clearInterval(interval.current /* thats why we use useRef, to get the current interval element id */)
            }
            else {
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
            }

        }, 1000)
    }

    useEffect(() => {
        startTimer()

        return () => {
            clearInterval(interval.current)
        }
    }, []);

    return (
        <div className="containerTimer">
            <div className="contentTimer">
                <span className="desc-promo">
                    🔥 CONTAGEM REGRESSIVA PARA FIM DAS INSCRIÇÕES DO <a href="#">CURSO</a>: <strong>{timerHours}:{timerMinutes}:{timerSeconds}</strong>
                </span>
            </div>
        </div>
    );
}

export default Timer;