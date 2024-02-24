const express = require('express')
const routerVerificar = express.Router()

routerVerificar.get('/', (req, res)=>{
    res.send('Server en linea')
})


module.exports = routerVerificar;