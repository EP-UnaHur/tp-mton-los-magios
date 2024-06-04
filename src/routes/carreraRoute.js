const { Router } = require('express')
const db = require('../db/models')
const carreraController = require('../controllers/carreraController')
const middlewareCarrera = require('../middlewares/middlewaresGeneral')
const carreraSchema = require('../schemas/carreraSchema')
const materiaSchema = require('../schemas/materiaSchema')
const route = Router()

route.get('/carreras', carreraController.getAllCarreras)
route.get('/carreras/:id', middlewareCarrera.existsById(db.Carrera), carreraController.carreraById)

route.post('/carreras/:id/materia', 
    middlewareCarrera.existsById(db.Carrera), 
    middlewareCarrera.validaSchema(materiaSchema), 
    carreraController.crearMateriaEnCarrera )

route.get('/carreras/:id/materia', middlewareCarrera.existsById(db.Carrera), carreraController.getTodasLasMateriasDeCarrera)

route.post('/carreras', middlewareCarrera.validaSchema(carreraSchema) ,carreraController.crearCarrera)

module.exports = route