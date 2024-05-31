const { Profesor, Curso } = require('../db/models')
const controller = {}

const getAllCursosProfesores = async (req, res) => {
    const profesoresYCursos = await Curso_Profesor.findAll({})
    res.status(200).json(profesoresYCursos)
}

controller.getAllCursosProfesores = getAllCursosProfesores

const getCursosProfesoresById = async(req, res) => {
    const { idCurso, idProfesor } = req.params.id
    const cursoProfesor = await Curso_Profesor.findOne({
        where: {
            idCurso: idCurso, 
            idProfesor: idProfesor
        }
    })
    if(profesor){
        res.status(201).json(cursoProfesor)
    } else {
        res.status(400).json()
    }

}

controller.getCursosProfesoresById = getCursosProfesoresById

const crearCursoProfesor = async (req, res) => {
    const { idCurso, idProfesor } = req.body
    const nuevoCursoProfesor = await Curso_Profesor.create({
        idCurso: idCurso,
        idProfesor: idProfesor
    })
    res.status(201).json(nuevoCursoProfesor)
}

controller.crearCursoProfesor = crearCursoProfesor

const borrarCursoProfesor = async(req, res) => {
    const {idCurso, idProfesor } = req.body
    const cursoProfesor = await Curso_Profesor.findOne({
        where: {
            idCurso: idCurso,
            idProfesor: idProfesor
        }})
    if (cursoProfesor){
        res.status(200).json(`La relacion entre Curso con id ${idCurso} y Profesor con id ${idProfesor} se borró con exito`)
    }
    else
        res.status(404).json(`La relacion entre Curso con id ${idCurso} y Profesor con id ${idProfesor} no existe.`)
}

controller.borrarCursoProfesor = borrarCursoProfesor

module.exports = controller
