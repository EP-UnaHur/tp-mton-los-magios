const { Materia, Curso } = require('../db/models')
const controller = {}

const crearMateria = async(req, res) => {
    const materia = await carreraById.create(req.body)
    res.status(201).json(materia)
}

controller.crearMateria = crearMateria

const getAllMaterias = async(req, res) => {
    const materias = await Materia.findAll()
    res.status(200).json(materias)
}

controller.getAllMaterias = getAllMaterias

const getMateriaById = async(req, res) => {
    const id = req.params.id
    const materia = await Materia.findByPk(id)
    res.status(200).json(materia)
}

controller.getMateriaById = getMateriaById

const borrarMateria = async(req, res) => {
    const row = await Materia.destroy({ where: {id} })
    if(row)
        res.status(200).json(`La materia con id ${id} se borro con exito.`)
    else
        res.status(404).json(`La materia con id ${id} no existe.`)
}

controller.borrarMateria = borrarMateria

const actualizarMateria = async(req, res) => {
    const materia = await Materia.update(req.body, {where: { id }})
    if(materia){
        const actualizarMateria = await Materia.findByPk(id)
        res.status(200).json(actualizarMateria)
    } else
        res.status(400).json({error: `La materia con id ${id} no existe.`})
}

controller.actualizarMateria = actualizarMateria

const crearCursoParaLaMateria = async (req, res) => {
    const idDeMateria = req.params.id;
    const materia = await Materia.findByPk(idDeMateria);
    const nuevoCurso = await Curso.create(req.body);
    await materia.addCurso(nuevoCurso);
    res.status(201).json(nuevoCurso);
}

controller.crearCursoParaLaMateria = crearCursoParaLaMateria;

const getTodosLosCursosDeLaMateria = async (req, res) => {
    const id = req.params.id;
    const materia = await Materia.findByPk(id, {
        include: {
            model: Curso,
            as: 'cursos',
        }
    });
    res.status(201).json(materia)
}

controller.getTodosLosCursosDeLaMateria = getTodosLosCursosDeLaMateria

module.exports = controller