const { check } = require('express-validator')
const { validateResult } = require('../helpers/validator.helper')

const validateData = [
    check('habitacionpiso')
    .exists().withMessage('El campo habitacionpiso es obligatorio')
    .isInt({min: 1, max: 10}).withMessage('El número debe ser un entero mayor a 0 y menor o igual a 10'),

    check('habitacionnro')
    .exists().withMessage('El campo habitacionnro es obligatorio')
    .isInt({min:1, max:20}).withMessage('El número entero mayor a 0 y menor o igual a 20'),

    check('cantcamas')
    .exists().withMessage('El campo cantcamas es obligatorio')
    .isInt({min:1, max:4}).withMessage('Debe ser un numero entero entre 1 y 4'),
    
    (req, res ,next) => {
        validateResult(req, res, next)
    }
]

module.exports = {validateData};
