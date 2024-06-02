const Joi = require('joi')

const carreraSchema = Joi.object().keys({
    nombre: Joi.string().required().min(3).max(50).messages({
        'string.min': `El campo nombre debe tener al menos {#limit} caracteres`,
        'string.max': `El campo nombre debe tener como máximo {#limit} caracteres`,
        'any.required': `El campo nombre es obligatorio`,
        'string.empty': `El campo nombre no puede estar vacío`,
    }),
    
    grado: Joi.string().required().min(3).max(30).messages({
        'string.min': `El campo grado debe tener al menos {#limit} caracteres`,
        'string.max': `El campo grado debe tener como máximo {#limit} caracteres`,
        'any.required': `El campo grado es obligatorio`,
    }),

    universidad: Joi.string().required().min(3).max(30).messages({
        'string.min': `El campo grado debe tener al menos {#limit} caracteres`,
        'string.max': `El campo grado debe tener como máximo {#limit} caracteres`,
        'any.required': `El campo grado es obligatorio`,
        'string.empty': `El campo universidad no puede ser vacio`
    })
})

module.exports = carreraSchema