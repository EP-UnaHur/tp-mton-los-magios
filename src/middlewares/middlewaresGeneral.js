const {Carrera, Materia, Curso, Profesor} = require('../db/models');
const hacerLista = require("../utils/hacerLista");

const existsById = (Model) => {
    return async (req, res, next) => {
        const id = req.params.id
        const model = await Model.findByPk(id)
        const modelName = Model.modelName || (Model.options.name && Model.options.name.singular);
        if(!model){
            return res.status(404).json({
                message: `El ${modelName} con id ${id} no fue encontrado`
            })
        }
        next()
    }
}

const validaSchema = (schema) => {
    return  async (req, res, next) => {
        const data = hacerLista(req.body);
        for(let i = 0; i < data.length; i++) {
            const result = schema.validate(data[i], {abortEarly: false})
            if (result.error) {
                return res.status(400).json(
                    {
                        indiceDelObjeto: i,
                        errores : result.error.details.map( error=> ( {
                            error: error.message
                        })
                    )}  
                )
            }
        }
    next()
    }
}

const tieneRelacion = (Model, ModeloRelacionado) => {
    return async (req, res, next) => {
        const id = req.params.id;
        const registroRelacionado = await ModeloRelacionado.findOne({ where: { [Model.name.toLowerCase() + 'Id']: id } });
        if (registroRelacionado) {
            return res.status(500).json({ error: `No se puede borrar el recurso con id ${id} porque está relacionado con ${ModeloRelacionado.name}` });
        }

    next();
    };
}

module.exports = {existsById, validaSchema, tieneRelacion}