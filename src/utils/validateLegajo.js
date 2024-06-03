const { Profesor } = require('../db/models');

const validateLegajo = async (legajo) => {
    const profesor = await Profesor.findOne({where: { legajo: legajo}});
    if(profesor) {
        throw new Error('Ya existe un profesor con ese legajo');
    }
    return legajo;
};

module.exports = validateLegajo;