import Database from "../Database/models";
import { v4 as uuidv4 } from 'uuid';
const NewBorns = Database["NewBorns"];

// Function to generate a random code
const generateRandomCode = (healthCareId, date, newBornId) => {
  return `${healthCareId}-${date}-${newBornId}`;
};

let latestNumber = 0;

export const addNewBorn = async (req, res) => {
  try {
    const nurseId = req.loggedInUser.id;
    const bornIn = req.loggedInUser.HealthCentre;
    const currentDate = new Date().toISOString().slice(0, 10);
    latestNumber++;
    const formattedNumber = padWithZeros(latestNumber, 3);
    const newBornId = formattedNumber;

    const {
      motherName,
      fatherName,
      maritalStatus,
      phoneContact,
      province,
      district,
      dateOfBirth,
      ageOfNewborn,
      sex,
      modeOfDelivery,
      APGARSCOREAtBirth,
      weightAtBirth,
      neonatalInfectionRisk,
      maternalSevereDisease,
      historyOfMaternalAlcoholUseAndSmoking,
      maternalExplosureToOtotoxicDrugs,
      newbornPositionInTheFamily,
      presenceOfEarDysmorphism,
      historyOfHearingLossAmongFamilyMembers,
      ABRScale,
    } = req.body;

    const createBorn = await NewBorns.create({
      motherName,
      fatherName,
      maritalStatus,
      phoneContact,
      province,
      district,
      dateOfBirth,
      ageOfNewborn,
      maternalExplosureToOtotoxicDrugs,
      maternalSevereDisease,
      historyOfMaternalAlcoholUseAndSmoking,
      sex,
      modeOfDelivery,
      APGARSCOREAtBirth,
      weightAtBirth,
      newbornPositionInTheFamily,
      HealthCentre: bornIn,
      neonatalInfectionRisk,
      presenceOfEarDysmorphism,
      historyOfHearingLossAmongFamilyMembers,
      ABRScale,
      midwife: nurseId,
      generatedCode: generateRandomCode(bornIn, currentDate, newBornId),
    });

    return res.status(200).json({
      status: "200",
      message: "New born added",
      data: createBorn,
    });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      console.error("Validation errors:", error.errors);
    } else {
      console.error("Unhandled error:", error);
    }
    return res.status(500).json({
      status: "500",
      message: "Failed to register",
      error: error.message,
    });
  }
};

function padWithZeros(number, length) {
  return number.toString().padStart(length, '0');
}
