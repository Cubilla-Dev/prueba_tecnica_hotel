const express = require('express')
const routerPersona = express.Router()
const personaController = require('../controllers/person.controller')
const { validateData } = require('../validators/persona.validator')

//todo: registrar personas
routerPersona.post('/registro-persona', validateData, personaController.regisPersona)
//todo: enlistar personas
routerPersona.post('/persona-registradas', personaController.personasRegistradas)


module.exports = routerPersona;