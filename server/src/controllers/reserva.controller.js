const Reserva = require('../models/reserva.model')

const response = require('../util/responde')
const catchedAsync = require('../util/catched.Async')
const {ClientError} = require('../util/error')
const montoReserva = require('../util/monto.reserva')

const reservaController = {
    registReserva: catchedAsync(async (req, res) => {

        const {fecha_reserva, fecha_entrada, fecha_salida, habitacion_id, persona_id } = req.body;

        const monto = montoReserva(fecha_entrada, fecha_salida)

        const regisReserva = await Reserva.create({
            fechareserva: fecha_reserva,
            fechaentrada: fecha_entrada,
            fechasalida: fecha_salida,
            habitacionid: habitacion_id,
            personaid: persona_id,
            montoreserva: monto, 
        })
    
        response(res, 200, regisReserva)
    }),
    reserConfirmadas: catchedAsync(async (req, res) => {
        const reservas = await Reserva.findAll();
        response(res, 200, reservas)
    })
}


module.exports = reservaController;