const { Cursos } = require('../db/models')
const controller = {}

const getAllCursos = async (req, res) => {
    const cursos = await Cursos.findAll()
    res.status(200).json(cursos)
}

controller.getAllCursos = getAllCursos

const getCursoById = async (req, res)=> {
    res.status(200).json(await Cursos.findByPk(id))
}

controller.getCursoById = getCursoById

const crearCurso = async(req, res) => {
    const curso = await Cursos.create(req.body)
    res.status(201).json(curso)
}

controller.crearCurso = crearCurso

const borrarCurso = async(req, res) => {
    const curso = await Cursos.destroy({where: {id}})
    if(curso)
        res.status(200).json(`El curso con id ${id} se borro con exito.`)
    else
        res.status(404).json(`El curso con id ${id} no existe.`)
}

controller.borrarCurso = borrarCurso

const actualizarCurso = async (req, res) => {
    const curso = await Cursos.update(req.body, {where: {id}})
    if(curso){
        const cursoActualizado = await Cursos.findByPk(id)
        res.status(200).json(cursoActualizado)
    } else 
        res.status(400).json({ error: `El curso con id ${id} no existe.` })
}

controller.actualizarCurso = actualizarCurso

module.exports = controller