const { Router } = require('express')
const db = require('../db/models')
const cursoController = require('../controllers/cursoController')
const middlewareCurso = require('../middlewares/existsMiddleware')
const cursoSchema = require('../schemas/cursoSchema')
const profesorSchema = require('../schemas/profesorSchema')
const route = Router()

route.get('/cursos', cursoController.getAllCursos)
route.get('/cursos/:id', middlewareCurso.existsById(db.Curso), cursoController.getCursoById)
route.delete('/cursos/:id', middlewareCurso.existsById, cursoController.borrarCurso) // falta res.500

route.put('/cursos/:id', 
    middlewareCurso.existsById(db.Curso), 
    middlewareCurso.validaSchema(cursoSchema), 
    cursoController.actualizarCurso
)//el valida schema pide todos los campos hacer otro que no los requira quizas ?

route.post('/cursos/:id/profesores',
    middlewareCurso.existsById(db.Curso), 
    middlewareCurso.validaSchema(profesorSchema.profesorSoloIdSchema),
    cursoController.asociarANProfesores)


route.get('/cursos/:id/profesores', middlewareCurso.existsById(db.Curso), cursoController.getProfesoresDelCurso)// 202, 404

module.exports = route