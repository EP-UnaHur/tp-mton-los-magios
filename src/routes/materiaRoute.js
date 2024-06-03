const { Router } = require('express')
const db = require('../db/models')
const materiaController = require('../controllers/materiaController')
const middlewareMateria = require('../middlewares/existsMiddleware')
const cursoSchema = require('../schemas/cursoSchema')
const route = Router()

route.get('/materias', materiaController.getAllMaterias)
route.get('/materias/:id', middlewareMateria.existsById(db.Materia), materiaController.getMateriaById)
route.delete('/materias/:id',middlewareMateria.existsById, materiaController.borrarMateria) // falta res.500

route.post('/materias/:id/cursos', 
    middlewareMateria.existsById(db.Materia), 
    middlewareMateria.validaSchema(cursoSchema),
    materiaController.crearCursoParaLaMateria)

route.get('/materias/:id/cursos', middlewareMateria.existsById(db.Materia), materiaController.getTodosLosCursosDeLaMateria)

module.exports = route