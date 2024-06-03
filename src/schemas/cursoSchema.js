const Joi = require('joi')
const validateDate = require('../utils/dateValidator')

const cursoSchema = Joi.object().keys({
    comision: Joi.string().required().min(3).max(50).messages({
        'string.min': `El campo comision debe tener al menos {#limit} caracteres`,
        'string.max': `El campo comision debe tener como máximo {#limit} caracteres`,
        'any.required': `El campo comision es obligatorio`,
        'string.empty': `El campo comision no puede estar vacío`,
    }),
    
    turno: Joi.string().required().min(3).max(30).messages({
        'string.min': `El campo turno debe tener al menos {#limit} caracteres`,
        'string.max': `El campo turno debe tener como máximo {#limit} caracteres`,
        'any.required': `El campo turno es obligatorio`,
    }),

    fechaInicio: Joi.string().custom(validateDate).required().messages({
        "any.custom": "El formato de la fechaInicio debe ser YYYY-MM-DD",
        "any.required": "El campo fechaInicio es obligatorio"
    }),

    fechaFin: Joi.string().custom(validateDate).required().messages({
        "any.custom": "El formato de la fechaFin debe ser YYYY-MM-DD",
        "any.required": "El campo fechaFin es obligatorio"
    })
})

module.exports = cursoSchema