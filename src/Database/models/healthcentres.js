'use strict';
const {
  Model,Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HealthCentres extends Model {
    
    static associate(models) {
      HealthCentres.hasMany(models.Users, {
          foreignKey: 'HealthCentre',
          });
      HealthCentres.hasMany(models.NewBorns, {
        foreignKey: 'HealthCentre',
        });
    }
  }
  HealthCentres.init({
    name:DataTypes.STRING,
    type: {
      type: Sequelize.ENUM("hospital","centre de saint"),
      defaultValue: "hospital",
      allowNull: false,
    },
    provence: DataTypes.STRING,
    district: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'HealthCentres',
  });
  return HealthCentres;
};