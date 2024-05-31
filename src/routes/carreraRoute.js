const { Router } = require('express')
const carreraController = require('../controllers/carreraController')
const middlewareCarrera = require('../middlewares/existsMiddleware')
const route = Router()

route.get('/carreras', carreraController.getAllCarreras)
route.get('/carreras/:id', middlewareCarrera.existsById, carreraController.carreraById)

route.post('/carreras', middlewareCarrera.validaSchema ,carreraController.crearCarrera)

route.delete('/carreras/:id', middlewareCarrera.existsById, carreraController.borrarCarrera)

route.put('/carreras/:id', 
    middlewareCarrera.existsById,
    middlewareCarrera.validaSchema,
    carreraController.actualizarCarrera
)

module.exports = route