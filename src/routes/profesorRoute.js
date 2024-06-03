const { Router } = require('express')
const db = require('../db/models')
const profesorController = require('../controllers/profesorController')
const middlewareProfesor = require('../middlewares/existsMiddleware')
const route = Router()

route.get('/profesor', profesorController.getAllProfesores )

route.get('/profesor/:id', middlewareProfesor.existsById(db.Profesor), profesorController.getProfesorById )
route.post('/profesor', middlewareProfesor.validaSchema, profesorController.crearProfesor )
route.delete('/profesor/:id',middlewareProfesor.existsById, profesorController.borrarProfesor) // falta res.500
route.put('/profesor/:id',
    middlewareProfesor.existsById,
    middlewareProfesor.validaSchema,
    profesorController.actualizarProfesor
)

route.get('/profesor/:id/cursos', middlewareProfesor.existsById(db.Profesor), profesorController.getAllCursosProfesorById)// 200, 400

module.exports = route