const express = require('express')
const routerReserva = express.Router()
const reservaController = require('../controllers/reserva.controller')
const { validateData } = require('../validators/reserva.validator')

//todo: registrar una reserva
routerReserva.post('/registro-reserva', validateData, reservaController.registReserva)
//todo: ver todas las reservas
routerReserva.get('/reservas', reservaController.reserConfirmadas)


module.exports = routerReserva;