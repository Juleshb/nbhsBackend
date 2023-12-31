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
      Drafts.belongsTo(models.HealthCentres, {
				foreignKey: "HealthCentre",
				onDelete: "CASCADE",
        onUpdate: "CASCADE",
				as: "bornIn"
			});
      Drafts.belongsTo(models.Users, {
				foreignKey: "HealthCentre",
				onDelete: "CASCADE",
        onUpdate: "CASCADE",
			});
    }
  }
  Drafts.init({
    motherName: DataTypes.STRING,
    fatherName: DataTypes.STRING,
    maritalStatus: DataTypes.STRING,
    phoneContact: DataTypes.STRING,
    province: DataTypes.STRING,
    district: DataTypes.STRING,
    HealthCentre: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    midwife: DataTypes.INTEGER,
    dateOfBirth: DataTypes.DATE,
    ageOfNewborn: DataTypes.INTEGER,
    sex: DataTypes.STRING,
    modeOfDelivery: DataTypes.STRING,
    APGARSCOREAtBirth: DataTypes.INTEGER,
    weightAtBirth: DataTypes.INTEGER,
    neonatalInfectionRisk: DataTypes.STRING,
    maternalSevereDisease: DataTypes.STRING,
    historyOfMaternalAlcoholUseAndSmoking: DataTypes.STRING,
    maternalExplosureToOtotoxicDrugs: DataTypes.STRING,
    APGARSCOREAtBirth: DataTypes.STRING,
    newbornPositionInTheFamily: DataTypes.STRING,
    presenceOfEarDysmorphism: DataTypes.STRING,
    historyOfHearingLossAmongFamilyMembers: DataTypes.STRING,
    OAEResult: DataTypes.STRING,
    ABRScale: DataTypes.STRING,
    generatedCode: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Drafts',
  });
  return Drafts;
};