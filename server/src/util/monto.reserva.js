const moment = require('moment');

const montoReserva = (fecha_entrada, fecha_salida) => {
    const fecha1 = moment(fecha_entrada);
    const fecha2 = moment(fecha_salida);
    console.log(fecha1)
    const dias = fecha2.diff(fecha1, 'days')
    console.log('los dias son: ', dias)
    return 120000 * dias
}

module.exports = montoReserva;