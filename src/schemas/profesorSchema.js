const Joi = required('Joi')
const validateDate = require('../utils/dateValidator')
const validateLegajo = require('../utils/validateLegajo')

const profesorSchema = joy.object().keys({
    nombre: Joi.string().required().min(1).max(20).messages({
        'string.empty': 'El nombre no puede estar vacío',
        'string.min': `El nombre debe tener al menos {#limit} caracter`,
        'string.max': `El nombre debe tener como máximo {#limit} caracteres`,
        'any.required': 'El nombre es obligatorio'
    }),

    fechaNacimiento: Joi.string().custom(validateDate).required().messages({
        "any.custom": "El formato de la fecha debe ser YYYY-MM-DD",
        'string.empty': 'La fecha de nacimiento no puede estar vacía',
        'any.required': 'La fecha de nacimiento es obligatoria'
    }),

    legajo: Joi.number().optional().custom(validateLegajo).messages({
        'number.base': 'El campo legajo debe ser un número entero',
    }),

    activo: Joi.boolean().messages({
        'boolean.base': 'El campo activo debe ser un booleano'
    })

})

const profesorSoloIdSchema = joy.object.keys({
    id: Joi.number().required().messages({
        'number.base': 'El campo id debe ser un numero entero',
        'any.required': 'El id es obligatorio'
    })
})

module.exports = profesorSchema