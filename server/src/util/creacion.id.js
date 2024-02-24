const { uuid } = require('uuidv4');

const idUnico = () => {
    return uuid()
}

module.exports = idUnico;