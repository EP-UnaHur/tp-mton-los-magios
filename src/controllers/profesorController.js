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
    const id = req.params.id
    const profesor = await Profesor.destroy({where: {id}})
    res.status(200).json(`El profesor con id ${id} se borro con exito.`)
}

controller.borrarProfesor = borrarProfesor

const actualizarProfesor = async(req, res) => {
    const idProfesorAActualizar = req.params.id
    const profesorAActualizar = await Profesor.findByPk(idProfesorAActualizar);
    await profesorAActualizar.set(req.body).save();
    res.status(200).json(profesorAActualizar)
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