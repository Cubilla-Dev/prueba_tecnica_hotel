const { Sequelize } = require('sequelize')
const config = require('./config.env')

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: config.db.host,
    username: config.db.user_db,
    password: config.db.password_db,
    database: config.db.name_db,
    port: config.db.port_db,
})


module.exports = sequelize