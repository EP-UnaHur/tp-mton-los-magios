const { Router } = require('express')
const profesorController = require('../controllers/profesorController')
const middlewareProfesor = require('../middlewares/existsMiddleware')
const route = Router()

route.get('/profesor', profesorController.getAllProfesores )

route.get('/profesor/:id', middlewareProfesor.existsById, profesorController.getProfesorById )
route.post('/profesor', middlewareProfesor.validaSchema, profesorController.crearProfesor )
route.delete('/profesor/:id',middlewareProfesor.existsById, profesorController.borrarProfesor)
route.put('/profesor/:id',
    middlewareProfesor.existsById,
    middlewareProfesor.validaSchema,
    profesorController.actualizarProfesor
)


module.exports = route