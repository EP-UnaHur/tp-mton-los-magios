const { Router } = require('express')
const db = require('../db/models')
const carreraController = require('../controllers/carreraController')
const middlewareCarrera = require('../middlewares/existsMiddleware')
const carreraSchema = require('../schemas/carreraSchema')
const route = Router()

route.get('/carreras', carreraController.getAllCarreras)
route.get('/carreras/:id', middlewareCarrera.existsById(db.Carrera), carreraController.carreraById)

//route.post('/carreras/:id/materia', ...) 201,404,400
//route.get('/carreras/:id/materia', ...) 200,404

route.post('/carreras', middlewareCarrera.validaSchema(carreraSchema) ,carreraController.crearCarrera)

module.exports = route