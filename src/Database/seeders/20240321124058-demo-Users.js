'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
    
    {
      role: "nurse",
      firstName: "kiki",
      lastName: "mimi",
      email: "jules2@gmail.com",
      pin: "$2b$10$y0OUkrPsn14g1Ndmf9JTQ.4TEF8cruCyyq5LBHX99G56fs7cJX4Dq",
      type: null,
      profile: null,
      HealthCentre: null,
      updatedAt: "2024-04-07T17:09:37.422Z",
      createdAt: "2024-04-07T17:09:37.422Z"
    },
  ], 
  {}
  );
  },

  async down (queryInterface, Sequelize) {

  }
};