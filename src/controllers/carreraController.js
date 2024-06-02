const { Carrera } = require('../db/models')
const controller = {}

const getAllCarreras = async (req, res) => {
    const carreras = await Carrera.findAll()
    res.status(200).json(carreras)
}

controller.getAllCarreras = getAllCarreras

const carreraById = async(req, res) => {
    const id = req.params.id
    res.status(200).json(await Carrera.findByPk(id))
}

controller.carreraById = carreraById

const crearCarrera = async(req, res) => {
    const carrera = await Carrera.create(req.body)
    res.status(201).json(carrera)
}

controller.crearCarrera = crearCarrera

const borrarCarrera = async(req, res) => {
    try{
        const carrera = await db.Carrera.destroy({where: {id}})
        res.status(200).json(`La carrera con id ${id} se borro con exito.`)
    } catch(err){
        res.status(404).json({err: err.message})
    }
   
    
}

controller.borrarCarrera = borrarCarrera

const actualizarCarrera = async(req, res) => {
    const carrera = await Carrera.update(req.body, {
        where: {id}
    })
    if(carrera){
        const carreraActualizada = await Carrera.findByPk(id)
        res.status(200).json(carreraActualizada)
    } else 
        res.status(400).json({ error: `La carrera con id ${id} no existe.` })
}

controller.actualizarCarrera = actualizarCarrera

module.exports = controller