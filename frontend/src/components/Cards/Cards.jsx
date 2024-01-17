import './Cards.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from '../Card/Card';

export const Cards = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/hotels')
      .then((response) => setHotels(response.data))
      .catch((error) =>
        console.error('Error al obtener datos del backend', error)
      );
  }, []);
  return (
    <section className='containerCards'>
      {hotels.map((hotel) => (
        <Card key={hotel.id} {...hotel} />
      ))}
    </section>
  );
};
