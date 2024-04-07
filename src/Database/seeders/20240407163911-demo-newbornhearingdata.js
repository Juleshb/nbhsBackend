'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('NewBorns', [{
        
          id: 1,
          motherName: "Habarugira justin",
          fatherName: "Habarugira justin",
          maritalStatus: "Maried",
          phoneContact: "0789028283",
          province: "Western province",
          district: "Gasabo",
          HealthCentre: null,
          recordedBy: 10,
          dateOfBirth: "2024-03-16T00:00:00.000Z",
          ageOfNewborn: 3,
          sex: "Male",
          modeOfDelivery: "C-Section",
          APGARSCOREAtBirth: 23,
          weightAtBirth: 5,
          neonatalInfectionRisk: "Yes",
          maternalSevereDisease: "Yes",
          historyOfMaternalAlcoholUseAndSmoking: "Yes",
          maternalExplosureToOtotoxicDrugs: "Yes",
          newbornPositionInTheFamily: "Seventh born",
          presenceOfEarDysmorphism: "Yes",
          historyOfHearingLossAmongFamilyMembers: "Yes",
          OAEResult: "Pass",
          ABRScale: null,
          generatedCode: "null-2024-03-16-00001",
          createdAt: "2024-03-16T09:51:33.273Z",
          updatedAt: "2024-03-16T09:51:33.273Z"
      
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
