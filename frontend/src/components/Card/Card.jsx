import './Card.css';
import { useState } from 'react';
import { Button, IconButton, Dialog, DialogTitle, DialogContent, TextField } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Card = ({ ...hotel }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const handleReserverClick = () => {
    setIsModalOpen(true);
  };


  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleReserveConfirm = () => {
    console.log('Check-in Date:', checkInDate);
    console.log('check-out Date:', checkOutDate);

    setIsModalOpen(false);
    onReservationConfirm(hotel.name, checkInDate, checkOutDate);
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

      <Dialog open={isModalOpen} onClose={handleModalClose}>
        <DialogTitle>{`Reserva en${hotel.name}`}</DialogTitle>
        <DialogContent>
          <TextField
            label="Fecha de Entrada"
            type='date'
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            style={{ marginBottom: '1rem' }}
          />
          <TextField
            label="Fecha de salida"
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
          <Button onClick={handleReserveConfirm}>Confirmar Reserva</Button>
        </DialogContent>
      </Dialog>
    </article>
  );
};

export { Card };