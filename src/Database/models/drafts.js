'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Drafts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Drafts.init({
    motherName: DataTypes.STRING,
    fatherName: DataTypes.STRING,
    maritalStatus: DataTypes.STRING,
    phoneContact: DataTypes.STRING,
    province: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Drafts',
  });
  return Drafts;
};