const { Router } = require('express')
const db = require('../db/models')
const profesorController = require('../controllers/profesorController')
const middlewareProfesor = require('../middlewares/middlewaresGeneral')
const profesorSchema = require('../schemas/profesorSchema')
const route = Router()

route.get('/profesor', profesorController.getAllProfesores )

route.get('/profesor/:id', middlewareProfesor.existsById(db.Profesor), profesorController.getProfesorById )
route.post('/profesor', middlewareProfesor.validaSchema(profesorSchema.profesorSchema), profesorController.crearProfesor )
route.delete('/profesor/:id',
    middlewareProfesor.existsById(db.Profesor),
    middlewareProfesor.tieneRelacion(db.Profesor, db.Curso),
    profesorController.borrarProfesor) // falta res.500

    route.put('/profesor/:id',
    middlewareProfesor.existsById(db.Profesor),
    middlewareProfesor.validaSchema(profesorSchema.profesorSchema),
    profesorController.actualizarProfesor
)

route.get('/profesor/:id/cursos', middlewareProfesor.existsById(db.Profesor), profesorController.getAllCursosProfesorById)

module.exports = route