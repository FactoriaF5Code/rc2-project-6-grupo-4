import { useState } from "react";
import "./Page.css";
import axios from "axios";
import { useEffect } from "react";

function Page() {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/hotels")
        .then((response) => setHotels(response.data))
        .catch(error => console.error('Error al obtener datos del backend', error));      
}, [])


    return (
        <div className="Page">
            
                <span>Trooking</span>
                {/*datos hoteles*/}
                <ul>
                    {hotels.map((hotel) => (
                        <li key={hotel.id}>
                            <div>
                                <h3>{hotel.name}</h3>
                                <p>{hotel.description}</p>
                                <img src={hotel.photo_url} alt={hotel.name} />
                                <p>Precio por noche: {hotel.price_per_night}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            
        </div>
    );
}

export default Page;
