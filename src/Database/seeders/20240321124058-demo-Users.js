'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      
      
      
      
      {
        role: "admin",
        firstName: "Jules",
        lastName: "Habarurema",
        email: "habaruremajules@gmail.com",
        pin: "$2b$10$jjwB3xKySnGL4shfJkNmseYb7wReZfpDuwMuEpB0X49jMtPNfJ26i",
        type: null,
        profile: null,
        HealthCentre: null,
        updatedAt: "2024-03-16T09:49:54.342Z",
        createdAt: "2024-03-16T09:49:54.342Z"
      },
      
     
      {
        role: "admin",
        firstName: "Olivier ",
        lastName: "Sibomana ",
        email: "oliviersibomana917@gmail.com",
        pin: "$2b$10$fSiZrGDXmMf7KzQB/Vm2G.F63C5uXPw6Ti6bfP0UYpjL0JsYPPNQ6",
        type: null,
        profile: null,
        HealthCentre: null,
        updatedAt: "2024-03-16T11:06:19.139Z",
        createdAt: "2024-03-16T11:06:19.139Z"
      },
     
      
      {
        role: "ideologist",
        firstName: "John",
        lastName: "Bukuru",
        email: "johnbkrdr@gmail.com",
        pin: "$2b$10$xtvwPCrP9pW8a9IT9TrKi.xTH2VNgc4MhjSGdp/7kamqvuc45N7sm",
        type: null,
        profile: null,
        HealthCentre: null,
        updatedAt: "2024-03-17T15:42:19.536Z",
        createdAt: "2024-03-17T15:42:19.536Z"
      },
     
      
      {
        role: "ideologist",
        firstName: "Bosco",
        lastName: "Niko",
        email: "jbosconik@gmai.com",
        pin: "$2b$10$.V8Olq7iprtI7DP2ffacFeomv2Q6/YCaxRjdFjcGkz.FknkvKLfp6",
        type: null,
        profile: null,
        HealthCentre: null,
        updatedAt: "2024-03-18T07:48:25.645Z",
        createdAt: "2024-03-18T07:48:25.645Z"
      },
      
      {
        role: "ideologist",
        firstName: "Niko",
        lastName: "Bosco",
        email: "jbosconik@gmail.com",
        pin: "$2b$10$pviSfC1SqGEWIDLmHqgnNeomiJJB5kJMrYPA.j6vPFipjRPq2jZe.",
        type: null,
        profile: null,
        HealthCentre: null,
        updatedAt: "2024-03-18T07:48:26.851Z",
        createdAt: "2024-03-18T07:48:26.851Z"
      },
      
    ], {});
  },

  async down(queryInterface, Sequelize) {
    // Revert the data
  }
};