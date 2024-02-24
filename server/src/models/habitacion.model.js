const sequelize = require('../config/coneccion.sequelize')
const { DataTypes } = require('sequelize')

const Habitacion = sequelize.define('Habitacion', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    habitacionpiso: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 10
        }
    },
    habitacionnro: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 20
        }
    },
    cantcamas: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 4
        }
    },
    tienetelevision: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    tienefrigobar: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, { timestamps: false });

module.exports = Habitacion;