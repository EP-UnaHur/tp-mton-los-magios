const { Router } = require('express')
const cursoController = require('../controllers/cursoController')
const middlewareCurso = require('../middlewares/existsMiddleware')
const route = Router()

route.get('/cursos', cursoController.getAllCursos)
route.get('/cursos/:id', middlewareCurso.existsById, cursoController.getCursoById)

route.post('/cursos/', middlewareCurso.validaSchema, cursoController.crearCurso)
route.delete('/cursos/:id', middlewareCurso.existsById, cursoController.borrarCurso)
route.put('/cursos/:id', 
    middlewareCurso.existsById, 
    middlewareCurso.validaSchema, 
    cursoController.actualizarCurso
)

module.exports = route