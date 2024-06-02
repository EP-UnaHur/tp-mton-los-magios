const Joi = require('joi')

const materiaSchema = Joi.object().keys({
    nombre: Joi.string().required().min(3).max(50).messages({
        'string.min': `El nombre de la materia debe tener al menos {#limit} caracteres`,
        'string.max': `El nombre de la materia debe tener como máximo {#limit} caracteres`,
        'string.empty': `El nombre de la materia no puede estar vacío`,
        'any.required': `El nombre de la materia es obligatorio`
    }),

    cuatrimestral: Joi.boolean().optional().messages({
        'boolean.base': `El campo cuatrimestral debe ser un valor booleano`
    }),

    anio: Joi.number().min(1).required().messages({
        'number.base': `El año debe ser un número`,
        'number.min': `El año debe ser igual o mayor a {#limit}`,
        'any.required': `El año es obligatorio`
    })
})

module.exports = materiaSchema