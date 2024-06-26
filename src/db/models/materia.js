'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Materia.belongsTo(models.Carrera,{
        as: 'carrera',
        foreignKey: 'carreraId'
      })
      
      Materia.hasMany(models.Curso,{
        as: 'cursos',
        foreignKey: 'materiaId'
      })
    }
  }
  Materia.init({
    nombre: DataTypes.STRING,
    cuatrimestral: DataTypes.BOOLEAN,
    anio: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Materia',
    tableName: 'Materias',
    timestamps: false,
  });
  return Materia;
};