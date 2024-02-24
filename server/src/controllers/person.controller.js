const Persona = require('../models/persona.model')
const response = require('../util/responde')
const catchedAsync = require('../util/catched.Async')
const {ClientError} = require('../util/error')

const personaController = {
    regisPersona: catchedAsync(async (req, res) => {
        const { nombrecompleto, nrodocumento, correo, telefono } = req.body;
    
        const verifCorreo = await Persona.findOne({ where: { correo: correo } });
    
        if (verifCorreo) {
            throw new ClientError('Correo ya registrado', 403);
        }
    
        const verifDocumento = await Persona.findOne({ where: { nrodocumento: nrodocumento } })
        if(verifDocumento){
            throw new ClientError('Documento ya registrado', 403)
        }
    
        const regisPersona = await Persona.create({
            nombrecompleto,
            nrodocumento,
            correo,
            telefono
        })
    
        response(res, 200, regisPersona)
    }),
    personasRegistradas: catchedAsync(async (req, res) => {
        const { numero_documento } = req.body;
        console.log(numero_documento)

        const persona = await Persona.findOne({ where: { nrodocumento: numero_documento } });

        if (!persona) {
            throw new ClientError('La persona no está registrada', 404);
        }
        response(res, 200, persona)
    })
} 

module.exports = personaController;