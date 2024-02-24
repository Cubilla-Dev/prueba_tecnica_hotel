const moment = require('moment');
const { Op } = require('sequelize');
const Habitacion = require('../models/habitacion.model');
const Reserva = require('../models/reserva.model');
const response = require('../util/responde')
const catchedAsync = require('../util/catched.Async')
const {ClientError} = require('../util/error')

const habitacionController = {
    registHabitacion: catchedAsync(async (req, res) => {
        const { habitacionpiso, habitacionnro, cantcamas, tienetelevision, tienefrigobar } = req.body;
    
        const regisHabitacion = await Habitacion.create({
            habitacionpiso, 
            habitacionnro, 
            cantcamas, 
            tienetelevision, 
            tienefrigobar
        })
    
        response(res, 200, regisHabitacion)
    }),
    verifiHabitaDisponibles: catchedAsync(async (req, res) => {
        const { fecha_entrada, fecha_salida } = req.body;
    
        const fechaEntrada = moment(fecha_entrada);
        const fechaSalida = moment(fecha_salida);
    
        const reservas = await Reserva.findAll({
            where: {
                fechaentrada: {
                    [Op.lt]: fechaSalida.toDate(), 
                },
                fechasalida: {
                    [Op.gt]: fechaEntrada.toDate(), 
                },
            },
        });
    
        const habitacionesReservadas = reservas.map(reserva => reserva.habitacionid);
    
        const habitacionesDisponibles = await Habitacion.findAll({
            where: {
                id: {
                    [Op.notIn]: habitacionesReservadas,
                },
            },
        });
    
        response(res, 200, habitacionesDisponibles)
    }),

}

module.exports = habitacionController;
