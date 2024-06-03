const { Profesor, Curso, Materia } = require('../db/models')
const controller = {}

const getAllProfesores = async (req, res) => {
    const profesores = await Profesor.findAll()
    res.status(200).json(profesores)
}

controller.getAllProfesores = getAllProfesores

const getProfesorById = async (req, res) => {
    const profesor = await Profesor.findByPk(req.params.id)
    res.status(200).json(profesor)
}

controller.getProfesorById = getProfesorById

const crearProfesor = async(req, res) => {
    const profesor = await Profesor.create(req.body)
    res.status(201).json(profesor)
}

controller.crearProfesor = crearProfesor

const borrarProfesor = async(req, res) => {
    const profesor = await Profesor.destroy({where: {id}})
    if(profesor)
        res.status(200).json(`El profesor con id ${id} se borro con exito.`)
    else
        res.status(404).json(`El profesor con id ${id} no existe.`)
}

controller.borrarProfesor = borrarProfesor

const actualizarProfesor = async(req, res) => {
    const profesor = await Profesor.update(req.body, { where: {id}})
    if(profesor){
        const profesorActualizado = await Profesor.findByPk(id)
        res.status(200).json(profesorActualizado)
    } else
        res.status(400).json({ error: `El profesor con id ${id} no existe.` })
}

controller.actualizarProfesor = actualizarProfesor

const getAllCursosProfesorById = async (req, res) => {
    const cursosDeProfesor = await Profesor.findByPk(req.params.id, {
        include: [{
            model: Curso,
            as: 'cursos',
            through: {
                attributes: []
            },
            include: {
                model: Materia,
                as: 'materia',
            }
        }]
    })
    res.status(200).json(cursosDeProfesor)
}

controller.getAllCursosProfesorById = getAllCursosProfesorById

module.exports = controller