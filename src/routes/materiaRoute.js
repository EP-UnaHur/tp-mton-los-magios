const { Router } = require('express')
const materiaController = require('../controllers/materiaController')
const middlewareMateria = require('../middlewares/existsMiddleware')
const route = Router()

route.get('/materias', materiaController.getAllMaterias)
route.get('/materias/:id', middlewareMateria.existsById, materiaController.getMateriaById)
route.delete('/materias/:id',middlewareMateria.existsById, materiaController.borrarMateria) // falta res.500

//route.post('/materias/:id/curso', ...) 201, 404, 400
//route.get('/materias/:id/cursos', ...) 200, 404

//  creo que estos no hacen falta
route.post('/materias', middlewareMateria.validaSchema, materiaController.crearMateria)
route.put('/materias/:id', 
    middlewareMateria.existsById,
    middlewareMateria.validaSchema,
    materiaController.actualizarMateria
)

module.exports = route