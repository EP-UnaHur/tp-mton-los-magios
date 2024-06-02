'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cursos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cursos.belongsTo(models.Materia,{
          as: 'materias',
          foreignKey: 'curso_id'
      })
      Cursos.belongsToMany(models.Profesor,{
        through: 'curso_profesor',
        as: 'profesores',
        foreignKey: 'curso_id'  
      })
    }
  }
  Cursos.init({
    comision: DataTypes.STRING,
    turno: DataTypes.STRING,
    fechaInicio: DataTypes.DATE,
    fechaFin: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Cursos',
  });
  return Cursos;
};