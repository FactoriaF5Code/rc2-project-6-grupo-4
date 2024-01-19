import './Page.css';
import { useState } from "react";
import Header from './header/Header';
import  AlertConfirm  from "./AlertConfirm/AlertConfirm";
import { Footer } from './footer/Footer';
import { Cards } from './Cards/Cards';


function Page() {
  const [reservationInfo, setReservationInfo] = useState(null);

  const handleReservationConfirm = (hotelName, checkInDate, checkOutDate) => {
    setReservationInfo({ hotelName, checkInDate, checkOutDate });
  };

  return (
    <div className='page'>
      <Header />
      {/*datos hoteles*/}
      <AlertConfirm reservationInfo={reservationInfo} />
      <Cards onReservationConfirm={handleReservationConfirm} />
      <Footer />
    </div>
  );
}

export default Page;
