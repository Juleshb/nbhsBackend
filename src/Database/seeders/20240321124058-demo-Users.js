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
        role: "nurse",
        firstName: "NDAYAMBAJE",
        lastName: " Egide ",
        email: "ndayambajeegide975@gmail.com",
        pin: "$2b$10$uaCstbvSXIDTw2UbRjzb1uHkN223YR3PpsvXWWXdfodq.58SyhW9a",
        type: null,
        profile: null,
        HealthCentre: null,
        updatedAt: "2024-04-10T12:26:01.062Z",
        createdAt: "2024-04-10T12:26:01.062Z"
      },
      {
        role: "admin",
        firstName: "Bosco",
        lastName: "Niko",
        email: "jbosconik@gmai.com",
        pin: "$2b$10$.V8Olq7iprtI7DP2ffacFeomv2Q6/YCaxRjdFjcGkz.FknkvKLfp6",
        type: null,
        profile: null,
        HealthCentre: null,
        updatedAt: "2024-04-15T06:24:43.548Z",
        createdAt: "2024-03-18T07:48:25.645Z"
      },
      {
        role: "admin",
        firstName: "John",
        lastName: "Bukuru",
        email: "johnbkrdr@gmail.com",
        pin: "$2b$10$xtvwPCrP9pW8a9IT9TrKi.xTH2VNgc4MhjSGdp/7kamqvuc45N7sm",
        type: null,
        profile: null,
        HealthCentre: null,
        updatedAt: "2024-04-15T06:25:08.673Z",
        createdAt: "2024-03-17T15:42:19.536Z"
      },
      {
        role: "admin",
        firstName: "Niko",
        lastName: "Bosco",
        email: "jbosconik@gmail.com",
        pin: "$2b$10$pviSfC1SqGEWIDLmHqgnNeomiJJB5kJMrYPA.j6vPFipjRPq2jZe.",
        type: null,
        profile: null,
        HealthCentre: null,
        updatedAt: "2024-04-15T06:25:54.152Z",
        createdAt: "2024-03-18T07:48:26.851Z"
      },
      {
        role: "admin",
        firstName: "John",
        lastName: "Bukuru",
        email: "johnbkrdr@gmail.com",
        pin: "$2b$10$xtvwPCrP9pW8a9IT9TrKi.xTH2VNgc4MhjSGdp/7kamqvuc45N7sm",
        type: null,
        profile: null,
        HealthCentre: null,
        updatedAt: "2024-04-15T06:26:24.009Z",
        createdAt: "2024-03-17T15:42:19.536Z"
      },
      {
        role: "admin",
        firstName: "Bosco",
        lastName: "Niko",
        email: "jbosconik@gmai.com",
        pin: "$2b$10$.V8Olq7iprtI7DP2ffacFeomv2Q6/YCaxRjdFjcGkz.FknkvKLfp6",
        type: null,
        profile: null,
        HealthCentre: null,
        updatedAt: "2024-04-15T06:27:55.741Z",
        createdAt: "2024-03-18T07:48:25.645Z"
      },
      {
        role: "ideologist",
        firstName: "HABARUREMA",
        lastName: "Jules",
        email: "habaruremajules2@gmail.com",
        pin: "$2b$10$TtsHsOdGtNMi7y0ZR19dc.2keGR3KQDkScUJlNjv3QDHpxbLZxRyy",
        type: null,
        profile: null,
        HealthCentre: null,
        updatedAt: "2024-04-19T13:15:15.741Z",
        createdAt: "2024-04-15T06:08:17.189Z"
      },
      {
        role: "admin",
        firstName: "Niko",
        lastName: "Bosco",
        email: "jbosconik@gmail.com",
        pin: "$2b$10$pviSfC1SqGEWIDLmHqgnNeomiJJB5kJMrYPA.j6vPFipjRPq2jZe.",
        type: null,
        profile: null,
        HealthCentre: null,
        updatedAt: "2024-05-16T20:25:39.217Z",
        createdAt: "2024-03-18T07:48:26.851Z"
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    // Revert the data
  }
};
