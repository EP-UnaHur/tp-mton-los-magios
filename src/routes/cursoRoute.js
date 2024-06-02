const { Router } = require('express')
const cursoController = require('../controllers/cursoController')
const middlewareCurso = require('../middlewares/existsMiddleware')
const route = Router()

route.get('/cursos', cursoController.getAllCursos)
route.get('/cursos/:id', middlewareCurso.existsById, cursoController.getCursoById)
route.delete('/cursos/:id', middlewareCurso.existsById, cursoController.borrarCurso) // falta res.500

route.put('/cursos/:id', 
    middlewareCurso.existsById, 
    middlewareCurso.validaSchema, 
    cursoController.actualizarCurso
)

//route.post('/cursos/:id/profesores', ...) 201, 404, 400
//route.get('/cursos/:id/profesores', ...) 202, 404

module.exports = route