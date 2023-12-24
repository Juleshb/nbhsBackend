'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HealthCentres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      provence: {
        type: Sequelize.STRING
      },
      district: {
        type: Sequelize.STRING
      },
      HealthCentreCode:{
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING,
        defaultValue: "hospital",
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
    await queryInterface.dropTable('HealthCentres');
  }
};