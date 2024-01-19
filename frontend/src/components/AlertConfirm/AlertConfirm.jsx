
import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './AlertConfirm.css';

export default function AlertConfirm({ reservationInfo, onClose }) {
    useEffect(() => {
    }, [reservationInfo]);
    return (
        <Card className="containerAlertConfirm" sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt={reservationInfo.hotel.name}
                height="140"
                image={reservationInfo.hotel.photoUrl}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '2rem' }}>
                    {reservationInfo?.hotel?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '2rem' }}>
                    {`Fecha de entrada: ${reservationInfo?.checkInDate} - Fecha de salida: ${reservationInfo?.checkOutDate}`}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" sx={{ fontSize: '2rem' }}>COMPARTIR</Button>
                <Button size="small" onClick={onClose} sx={{ fontSize: '2rem' }}>EXIT</Button>
            </CardActions>
        </Card>
    );
}
