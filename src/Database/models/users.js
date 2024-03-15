'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    
    static associate(models) {
      Users.belongsTo(models.HealthCentres, {
				foreignKey: "HealthCentre",
				onDelete: "CASCADE",
        onUpdate: "CASCADE",
				as: "worksIn"
			});
      Users.hasMany(models.NewBorns, {
        foreignKey: 'recordedBy',
        });
    }
  }
  Users.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    profile: DataTypes.STRING,
    email: DataTypes.STRING,
    pin: DataTypes.STRING,
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    role: {
      type: Sequelize.ENUM("nurse","ideologist", "admin"),
      defaultValue: "admin",
      allowNull: false,
    },
    HealthCentre: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};