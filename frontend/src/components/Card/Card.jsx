import './Card.css';
import { useState } from 'react';
import { Button, IconButton, Dialog, DialogTitle, DialogContent, TextField } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AlertConfirmation from "../AlertConfirm/AlertConfirm";

const Card = ({ ...hotel }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [reservationInfo, setReservationInfo] = useState(null);
  

  const handleReserverClick = () => {
    setIsModalOpen(true);
  };


  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleReserveConfirm = () => {
    console.log('Check-in Date:', checkInDate);
    console.log('check-out Date:', checkOutDate);
  
    const newReservationInfo = {
      hotel: hotel,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
    };
  
    setReservationInfo(newReservationInfo);
    setIsModalOpen(false);
    setIsAlertOpen(true); // Mostrar el componente AlertConfirmation
  };
  

  const handleAlertClose = () => {
    setIsAlertOpen(false);  // Oculta el componente AlertConfirmation
  };


  let priceColor = 'black';
  let msgPrice = '';
  if (hotel.pricePerNight < 200) {
    priceColor = 'green';
    msgPrice = '¡Ultimas Habitaciones!'
  } else {
    priceColor = 'red';
  }

  return (
    <article className='containerCard'>
      <div className='cardHotel' key={hotel.id}>
        <img src={hotel.photoUrl} alt={hotel.name} />
        <div className='dataHotel'>
          <h2>{hotel.name}</h2>
          <p className="description">{hotel.description}</p>
          <p className="price" style={{ color: priceColor }}>Precio por noche: {hotel.pricePerNight} €{msgPrice}</p>
        </div>
        <IconButton color="primary" aria-label="add to shopping cart">
          <Button className="bton" sx={{ fontSize: 30 }} variant="contained" onClick={handleReserverClick}>Reservar!<AddShoppingCartIcon sx={{ fontSize: 20 }} style={{ marginLeft: '1rem' }} /></Button>
        </IconButton>
      </div>

      <Dialog open={isModalOpen} onClose={handleModalClose} classes={{ paper: 'custom-dialog-paper' }}>
        <DialogTitle style={{ fontSize: '2rem' }}>{`Reserva en ${hotel.name}`}</DialogTitle>
        <DialogContent style={{ fontSize: '1.8rem' }}>
          <TextField
            label="Fecha de Entrada"
            type='date'
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            style={{ marginBottom: '1rem', fontSize: '2rem', width: '100%', height: '50%' }}
          />
          <TextField
            label="Fecha de salida"
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            style={{ fontSize: '2rem', width: '100%', height: '50%' }}
          />

          <Button style={{ fontSize: '1.8rem' }} onClick={handleReserveConfirm}>
            Confirmar Reserva
          </Button>
        </DialogContent>
      </Dialog>
      {isAlertOpen && <AlertConfirmation reservationInfo={reservationInfo} onClose={handleAlertClose} />}

    </article>
  );
};

export { Card };