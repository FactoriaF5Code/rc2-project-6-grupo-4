import './AlertConfirm.css';

import { useState, useEffect } from "react";


function AlertConfirm({ reservationInfo }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (reservationInfo) {
            setIsVisible(true);
            const timeoutId = setTimeoutId(() => {
                setIsVisible(false);
            }, 10000);
            return () => clearTimeout(timeoutId);
        }

    }, [reservationInfo]);


    return (
        isVisible &&
        <section className='containerAlertConfirm'>
            <div className="containerAlert">
                <p className="alerta">{`Enhorabuena! Has reservado el hotel ${reservationInfo?.hotelName} entre el ${reservationInfo?.checkInDate} y el ${reservationInfo?.checkOutDate}`}</p>
            </div>
        </section>

    )
}


export default AlertConfirm