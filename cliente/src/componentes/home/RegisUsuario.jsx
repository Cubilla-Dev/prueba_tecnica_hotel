import axios from 'axios'
import { useForm } from 'react-hook-form';
import { RUTA_API_REGISTRO_PERSONA } from '../../routers/routerApi'
import { RUTA_RESERVA } from '../../routers/routerPath';
import { useNavigate } from 'react-router-dom';


const RegisUsuario = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            // Envía los datos del formulario a la API
            const response = await axios.post(RUTA_API_REGISTRO_PERSONA, data);
            console.log('Respuesta del servidor:', response.data);
            navigate(RUTA_RESERVA);
        } catch (error) {
            console.error('Error al enviar los datos:', error);
        }
    };

    return (
        <div>
            <h2>Registro de Usuario</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="nombreCompleto">Nombre Completo:</label>
                    <input type="text" id="nombreCompleto" {...register("nombrecompleto", { required: true })} />
                    {errors.nombrecompleto && <span>Este campo es requerido</span>}
                </div>
                <div>
                    <label htmlFor="numeroDocumento">Número de Documento:</label>
                    <input type="text" id="numeroDocumento" {...register("nrodocumento", { required: true })} />
                    {errors.nrodocumento && <span>Este campo es requerido</span>}
                </div>
                <div>
                    <label htmlFor="correo">Correo:</label>
                    <input type="email" id="correo" {...register("correo", { required: true })} />
                    {errors.correo && <span>Este campo es requerido</span>}
                </div>
                <div>
                    <label htmlFor="telefono">Teléfono:</label>
                    <input type="tel" id="telefono" {...register("telefono", { required: true })} />
                    {errors.telefono && <span>Este campo es requerido</span>}
                </div>
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
};

export default RegisUsuario;