const express = require('express')
const routerHabitacion = express.Router()
const habitaciones = require('../controllers/habitacion.controller')
const { validateData } = require('../validators/habitacion.validator')

//todo: registrar una habitacion
routerHabitacion.post('/registro-habitacion', validateData, habitaciones.registHabitacion)
//todo: verificar que habitaciones estan disponibles
routerHabitacion.post('/habitacion-disponible', habitaciones.verifiHabitaDisponibles)


module.exports = routerHabitacion;