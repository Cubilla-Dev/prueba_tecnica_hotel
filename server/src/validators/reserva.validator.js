const { check } = require('express-validator')
const { validateResult } = require('../helpers/validator.helper')

const validateData = [
    check('fecha_reserva')
    .exists().withMessage('El campo fecha de reserva es obligatorio')
    .isISO8601().withMessage('Tiene que ser una fecha'),

    check('fecha_entrada')
    .exists().withMessage('El campo fecha de entrega es obligatorio')
    .isISO8601().withMessage('Tiene que ser una fecha'),

    check('fecha_salida')
    .exists().withMessage('El campo fecha de salida es obligatorio')
    .isISO8601().withMessage('Tiene que ser una fecha'),

    check('habitacion_id')
    .exists().withMessage('El campo habitacion id es obligatorio'),

    check('persona_id')
    .exists().withMessage('El campo persona id es obligatorio'),
    
    (req, res ,next) => {
        validateResult(req, res, next)
    }
]

module.exports = {validateData};
