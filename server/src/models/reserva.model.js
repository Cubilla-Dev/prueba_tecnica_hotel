const { DataTypes } = require('sequelize');
const sequelize = require('../config/coneccion.sequelize')
const Habitacion = require('./habitacion.model')
const Persona = require('./persona.model')

const Reserva = sequelize.define('Reserva', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    fechareserva: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    fechaentrada: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fechasalida: {
        type: DataTypes.DATE,
        allowNull: false
    },
    habitacionid:{
        type: DataTypes.UUID,
        allowNull: false
    },
    personaid:{
        type: DataTypes.UUID,
        allowNull: false
    },
    montoreserva: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, { timestamps: false });

Reserva.belongsTo(Habitacion, { foreignKey: 'habitacionid' });
Reserva.belongsTo(Persona, { foreignKey: 'personaid' });

module.exports = Reserva;