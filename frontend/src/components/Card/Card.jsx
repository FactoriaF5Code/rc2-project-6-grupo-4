import './Card.css';
import { Button, IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const Card = ({ ...hotel }) => {

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
          <h3>{hotel.name}</h3>
          <p className="description">{hotel.description}</p>
          <p className="price" style={{ color: priceColor }}>Precio por noche: {hotel.pricePerNight} €{msgPrice}</p>
        </div>
      <IconButton color="primary" aria-label="add to shopping cart">
        <Button className="bton" size="large" variant="contained">Reservar!<AddShoppingCartIcon style={{ marginLeft: '1rem' }}/></Button>
      </IconButton>
      </div>
    </article>
  );
};

