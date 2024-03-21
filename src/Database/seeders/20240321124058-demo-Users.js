'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
      firstName: 'Alexis',
      lastName: 'HAKIZIMANA',
      profile: 'https://res.cloudinary.com/da12yf0am/image/upload/v1703439257/zjoyyeansibdalkiigwb.jpg',
      email: 'alexis@gmail.com',
      pin: '1357',
      type: 'null',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Steven',
      lastName: 'MUKAMA',
      profile: 'https://res.cloudinary.com/da12yf0am/image/upload/v1703439257/zjoyyeansibdalkiigwb.jpg',
      email: 'steven@gmail.com',
      pin: '1357',
      type: 'midwife',
      role: 'nurse',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Jules',
      lastName: 'HABARUREMA',
      profile: 'https://res.cloudinary.com/da12yf0am/image/upload/v1703439257/zjoyyeansibdalkiigwb.jpg',
      email: 'jules@gmail.com',
      pin: '1357',
      type: 'null',
      role: 'ideologist',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], 
  {}
  );
  },

  async down (queryInterface, Sequelize) {

  }
};