const { check } = require('express-validator')
const { validateResult } = require('../helpers/validator.helper')

const validateData = [
    check('nombrecompleto')
    .exists().withMessage('El campo nombre completo es obligatorio'),

    check('nrodocumento')
    .exists().withMessage('El campo numero de documento es obligatorio')
    .isLength({ min: 6, max: 7 }).withMessage('Debe ser un numero de documento valido')
    .isNumeric().withMessage('El campo numero de documento debe ser un número'),

    check('correo')
    .exists().withMessage('El campo correo es obligatorio')
    .isEmail().withMessage('Tiene que ser un correo valido'),

    check('telefono')
    .exists().withMessage('El campo telefono es obligatorio')
    .isLength({ min: 10, max: 10 }).withMessage('Tiene que ser un numero de telefono valido: Ej: 0995465787')
    .isNumeric().withMessage('El campo telefono debe ser un número'),

    
    (req, res ,next) => {
        validateResult(req, res, next)
    }
]

module.exports = {validateData};
