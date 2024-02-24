const express = require('express')
const app = express()
const cors = require('cors')
const config = require('./src/config/config.env')
const morgan = require('morgan')
const sequelize = require('./src/config/coneccion.sequelize')
const resError = require('./src/util/res.error')

//? Authenticate DB
sequelize.authenticate()
    .then(() => console.log('Base de datos autenticado'))
    .catch((err) => console.log(err))

//? Sync DataBase Models
sequelize.sync( {force: false })
    .then(() => console.log('Base de datos sincronizado'))
    .catch(err => console.log(err))

//router
const routerVerificar = require('./src/routers/verificacion.router')
const routerPersona = require('./src/routers/persona.router')
const routerHabitacion = require('./src/routers/habitacion.router')
const routerReserva = require('./src/routers/reserva.router')

//middleware
app.use(express.json())
app.use(morgan('dev'))

const corsOptions = {
    origin:  '*', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

//usando router
app.use(routerVerificar)
app.use(routerPersona)
app.use(routerHabitacion)
app.use(routerReserva)

//TODO: centralizacion de errores
app.use((err, req, res, next) => {
    const { statusCode, message } = err;
    resError(res, statusCode, message)
})

app.listen(config.api.port, () => {
    console.log(`Server en linea en el port: ${config.api.port}`)
})