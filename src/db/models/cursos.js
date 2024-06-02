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
          foreignKey: 'materiaId'
      })
      Cursos.belongsToMany(models.Profesor,{
        through: 'Curso_Profesor'
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
    timestamps: false,
  });
  return Cursos;
};