const { Router } = require('express')
const cursoProfesorController = require('../controllers/cursoProfesorController')
const route = Router()

route.get('/cursoProfesor', cursoProfesorController.getAllCursosProfesores)
route.get('/cursoProfesor/:idCurso/:idProfesor', cursoProfesorController.getCursosProfesoresById)
route.post('/cursoProfesor', cursoProfesorController.crearCursoProfesor)
route.delete('/cursoProfesor/:idCurso/:idProfesor', cursoProfesorController.borrarCursoProfesor)

module.exports = route