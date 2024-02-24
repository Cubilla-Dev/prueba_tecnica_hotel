require('dotenv').config()

module.exports = {
    db: {
        host_db: process.env.HOST_DB,
        name_db: process.env.NAME_DB,
        user_db: process.env.USER_DB,
        password_db: process.env.PASSWORD_DB,
        port_db: process.env.PORT_DB,
    },
    api: {
        port: process.env.PORT,
    },
}