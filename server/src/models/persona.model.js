const sequelize = require('../config/coneccion.sequelize')
const { DataTypes } = require('sequelize')

const Persona = sequelize.define('Persona', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4 
    },
    nombrecompleto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nrodocumento: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true 
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true 
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: true 
    }
}, { timestamps: false });


module.exports = Persona;