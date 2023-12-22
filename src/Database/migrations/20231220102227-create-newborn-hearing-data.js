'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('NewBorns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      motherName: {
        type: Sequelize.STRING
      },
      fatherName: {
        type: Sequelize.STRING
      },
      maritalStatus: {
        type: Sequelize.STRING
      },
      phoneContact: {
        type: Sequelize.STRING
      },
      province: {
        type: Sequelize.STRING
      },
      district: {
        type: Sequelize.STRING
      },
      HealthCentre: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
           model: 'Users',
          key: 'id', 
          as: 'HealthCentre'
        }
      },
      midwife: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
           model: 'Users',
          key: 'id', 
        }
      },
      dateOfBirth: {
        type: Sequelize.DATE
      },
      ageOfNewborn: {
        type: Sequelize.INTEGER
      },
      sex: {
        type: Sequelize.STRING
      },
      modeOfDelivery: {
        type: Sequelize.STRING
      },
      APGARSCOREAtBirth: {
        type: Sequelize.INTEGER
      },
      weightAtBirth: {
        type: Sequelize.INTEGER
      },
      neonatalInfectionRisk: {
        type: Sequelize.STRING
      },

      maternalSevereDisease: {
        type: Sequelize.STRING
      },
      historyOfMaternalAlcoholUseAndSmoking: {
        type: Sequelize.STRING
      },
      maternalExplosureToOtotoxicDrugs: {
        type: Sequelize.STRING
      },
      newbornPositionInTheFamily: {
        type: Sequelize.STRING
      },
      presenceOfEarDysmorphism: {
        type: Sequelize.STRING
      },
      historyOfHearingLossAmongFamilyMembers: {
        type: Sequelize.STRING
      },
      OAEResult: {
        type: Sequelize.STRING
      },
      ABRScale: {
        type: Sequelize.STRING
      },
      generatedCode:{ 
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('NewBorns');
  }
};