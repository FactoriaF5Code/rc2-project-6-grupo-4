import './Card.css';

export const Card = ({ ...hotel }) => {
  return (
    <article className='containerCard'>
      <div className='cardHotel' key={hotel.id}>
        <img src={hotel.photoUrl} alt={hotel.name} />
        <div className='dataHotel'>
          <h3>{hotel.name}</h3>
          <p>{hotel.description}</p>
          <p>Precio por noche: {hotel.price_per_night}</p>
        </div>
      </div>
    </article>
  );
};
