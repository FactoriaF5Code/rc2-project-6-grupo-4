import './Card.css';
import { Button } from '@mui/base';
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
      </div>
          <Button className="bton" size="small" style={{fontSize:"1rem"}}>Reservar!</Button>
    </article>
  );
};

