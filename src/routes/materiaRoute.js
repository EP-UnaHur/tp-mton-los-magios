const { Router } = require('express')
const materiaController = require('../controllers/materiaController')
const middlewareMateria = require('../middlewares/existsMiddleware')
const route = Router()

route.get('/materias', materiaController.getAllMaterias)
route.get('/materias/:id', middlewareMateria.existsById, materiaController.getMateriaById)

route.post('/materias', middlewareMateria.validaSchema, materiaController.crearMateria)

route.delete('/materias/:id',middlewareMateria.existsById, materiaController.borrarMateria)

route.put('/materias/:id', 
    middlewareMateria.existsById,
    middlewareMateria.validaSchema,
    materiaController.actualizarMateria
)

module.exports = route