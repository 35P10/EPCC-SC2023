import {useEffect,useRef,useState} from 'react'

import styles from "../styles/contador.module.scss";

const Contador = () =>  {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('October 26, 2023 00:17:10').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if(distance < 0){
                //stop
                clearInterval(interval.current);
            } else{
                //update
                setTimerDays(days < 10 ? `0${days}` : `${days}`);
                setTimerHours(hours < 10 ? `0${hours}` : `${hours}`);
                setTimerMinutes(minutes < 10 ? `0${minutes}` : `${minutes}`);
                setTimerSeconds(seconds < 10 ? `0${seconds}` : `${seconds}`);
            }
        }, 1000);
    };

    // componntes DidMount
    useEffect(() =>{
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    });

    return (
        <div className={styles.contador}>
            <div className="timer-section">
                <p className='timer-title'>{timerDays}</p>
                <p className='my-5 timer-subtitle'>Horas</p>
            </div>
            <div className="timer-section">
            <p className='timer-title'>{timerHours}</p>
                <p className='my-5 timer-subtitle'>Horas</p>
            </div>
            <div className="timer-section">
            <p className='timer-title'>{timerMinutes}</p>
                <p className='my-5 timer-subtitle'>Minutos</p>
            </div>
            <div className="timer-section">
            <p className='timer-title'>{timerSeconds}</p>
                <p className='my-5 timer-subtitle'>Segundos</p>
            </div>
        </div>
    );
    
}

export default Contador