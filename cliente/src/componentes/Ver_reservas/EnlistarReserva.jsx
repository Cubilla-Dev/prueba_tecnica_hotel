import  { useState, useEffect } from 'react';
import axios from 'axios';
import { RUTA_API_ENLISTAR_RESERVAS } from '../../routers/routerApi'
import dayjs from 'dayjs';

const EnlistarReserva = () => {
    const [reservas, setReservas] = useState([]);
    
    useEffect(() => {
        const obtenerReservas = async () => {
        try {
            const response = await axios.get(RUTA_API_ENLISTAR_RESERVAS);
            setReservas(response.data.data); 
        } catch (error) {
            console.error('Error al obtener las reservas:', error);
        }
        };
        obtenerReservas();
    }, []); 

    return (
        <div>
        <h2>Listado de Reservas</h2>
        <ul>
            {reservas.map(reserva => (
            <li key={reserva.id}>
                <p>Fecha de reserva: {dayjs(reserva.fechareserva).format('YYYY-MM-DD')}</p>
                <p>Fecha de entrada: {dayjs(reserva.entrada).format('YYYY-MM-DD')}</p>
                <p>Fecha de salida: {dayjs(reserva.fechasalida).format('YYYY-MM-DD')}</p>
                <p>Precio total: {reserva.montoreserva}</p>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default EnlistarReserva;
