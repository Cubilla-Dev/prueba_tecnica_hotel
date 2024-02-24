import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { RUTA_API_RESERVAS, RUTA_API_HABITACIONES_DISPONIBLES, RUTA_API_PERSONA_REGISTRADAS } from '../../routers/routerApi'
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { RUTA_VERIFICACION_RESERVA } from '../../routers/routerPath';


const Reserva = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, getValues, formState: { errors} } = useForm();
    const [habitaciones, setHabitaciones] = useState([]);
    const [personaData, setPersonaData] = useState(null);

    const fetchHabitaciones = async () => {
        try {
            const valoresFormulario = getValues(); 
            const fechaEntrada = valoresFormulario.fecha_entrada; 
            const fechaSalida = valoresFormulario.fecha_salida; 
            console.log(fechaEntrada)
            const response = await axios.post(RUTA_API_HABITACIONES_DISPONIBLES, {
                "fecha_reserva": fechaEntrada,
                "fecha_entrada": fechaSalida
            });
            setHabitaciones(response.data.data);
        } catch (error) {
            console.error('Error al obtener las habitaciones disponibles:', error);
        }
    };
    
    const onSubmit = async (data) => {
        try {
            // Verificar si hay errores antes de enviar el formulario
            if (Object.keys(errors).length === 0) {
                const response = await axios.post(RUTA_API_RESERVAS, data);
                console.log('Reserva creada exitosamente:', response.data);
                navigate(RUTA_VERIFICACION_RESERVA);
            } else {
                console.error('Por favor completa todos los campos antes de enviar el formulario');
            }
        } catch (error) {
            console.error('Error al crear la reserva:', error);
        }
    };
    

    const handlePersonaInputChange = async (event) => {
        try {
            const documento2 = event.target.value;
            const response = await axios.post(RUTA_API_PERSONA_REGISTRADAS, {
                numero_documento: documento2
            });
            setPersonaData(response.data.data);
            //se agrego el id y la fecha de reserva a la peticion 
            setValue('persona_id', response.data.data.id);
            const fechaReserva = dayjs().format('YYYY-MM-DDTHH:mm:ss');
            setValue('fecha_reserva', fechaReserva)
        } catch (error) {
            console.error('Error al obtener la información de la persona:', error);
        }
    };
    

    return (
        <div>
            <h2>Formulario de Reserva</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="fechaEntrada">Fecha de Entrada:</label>
                    <input type="date" id="fechaEntrada" name="fechaEntrada" {...register("fecha_entrada", { required: true})} />   
                    {errors.fecha_entrada && <span>Este campo es requerido</span>}             
                </div>
                <div>
                    <label htmlFor="fechaSalida">Fecha de Salida:</label>
                    <input type="date" id="fechaSalida" onInput={fetchHabitaciones} name="fechaSalida" {...register("fecha_salida", { required: true})} />
                    {errors.fecha_salida && <span>Este campo es requerido</span>}
                </div>
                <div>
                    <label htmlFor="habitacion">Cantidad de camas:</label>
                    <select id="habitacion" name="habitacion"  {...register("habitacion_id", { required: true})}>
                        {habitaciones.map(habitacion => (
                            <option key={habitacion.id} value={habitacion.id}>{habitacion.cantcamas}</option>
                        ))}
                    </select>
                    {errors.habitacion_id && <span>Este campo es requerido</span>}
                </div>
                <div>
                    <label htmlFor="documento">Número de Documento:</label>
                    <input type="text" id="documento" name="documento" onBlur={handlePersonaInputChange}  />
                    {personaData && (
                        <div>
                            <p>Nombre: {personaData.nombrecompleto}</p>
                            <p>Numero de documento: {personaData.nrodocumento}</p>
                        </div>
                    )}
                    {errors.persona_id && <span>Este campo es requerido</span>}
                </div>
                <button type="submit">Reservar</button>
            </form> 
        </div>
    );
};

export default Reserva;
