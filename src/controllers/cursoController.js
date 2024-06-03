const { where } = require('sequelize')
const { Curso, Profesor, Materia } = require('../db/models')
const hacerLista = require('../utils/hacerLista')
const controller = {}

const getAllCursos = async (req, res) => {
    const cursos = await Curso.findAll()
    res.status(200).json(cursos)
}

controller.getAllCursos = getAllCursos

const getCursoById = async (req, res)=> {
    const id = req.params.id
    res.status(200).json(await Curso.findByPk(id))
}

controller.getCursoById = getCursoById

const crearCurso = async(req, res) => {
    const curso = await Curso.create(req.body)
    res.status(201).json(curso)
}

controller.crearCurso = crearCurso

const borrarCurso = async(req, res) => {
    const curso = await Curso.destroy({where: {id}})
    if(curso)
        res.status(200).json(`El curso con id ${id} se borro con exito.`)
    else
        res.status(404).json(`El curso con id ${id} no existe.`)
}

controller.borrarCurso = borrarCurso

const actualizarCurso = async (req, res) => {
/*     const curso = await Curso.update(req.body, {where: {id}})
    if(curso){
        const cursoActualizado = await Curso.findByPk(id)
        res.status(200).json(cursoActualizado)
    } else 
        res.status(400).json({ error: `El curso con id ${id} no existe.` }) */
    const idCursoAActualizar = req.params.id;
    const CursoAActualizar = await Curso.findByPk(idCursoAActualizar) 
    await CursoAActualizar.set(req.body).save();
    res.status(200).json(CursoAActualizar)

}

controller.actualizarCurso = actualizarCurso

const asociarANProfesores = async (req, res) => {
    let listaProfesores = hacerLista(req.body);
    const cursoAAsociar = await Curso.findByPk(req.params.id);

    listaProfesores = await Promise.all(listaProfesores.map(async profesor => {
        const instanciaProfesor = await Profesor.findByPk(profesor.id);
        const cursoYaTieneAlProfesor = await cursoAAsociar.hasProfesor(instanciaProfesor);
        if(instanciaProfesor && !cursoYaTieneAlProfesor) {
            return instanciaProfesor;
        }
        return null;
    }));

    listaProfesores = listaProfesores.filter(profesor => profesor !== null);

    await cursoAAsociar.addProfesor(listaProfesores);

    res.status(201).json(listaProfesores);
}

controller.asociarANProfesores = asociarANProfesores;

const getProfesoresDelCurso = async (req, res) => {
    const idDelCurso = req.params.id;
    const curso = await Curso.findByPk(idDelCurso, {
        include:[{
            model: Materia,
            as: 'materia',
        },{
            model: Profesor,
            as: 'profesores',
            through: {
                attributes: []
            }
        }]
    });
    res.status(200).json({curso});
}

controller.getProfesoresDelCurso = getProfesoresDelCurso;

module.exports = controller