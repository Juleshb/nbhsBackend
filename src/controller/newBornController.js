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
    const formattedNumber = padWithZeros(latestNumber, 5);
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
};


export const viewNewBorns = async (req,res) =>{
  try {
    const getBorns = await NewBorns.findAll({});
        return res.status(201).json({
            status: "201",
            message: "New borns retrieved successfully",
            data: getBorns,
        })
    
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      console.error("Validation errors:", error.errors);
    } else {
      console.error("Unhandled error:", error);
    }
    return res.status(500).json({
      status: "500",
      message: "Failed to retreive data",
      error: error.message,
    });
  }
}

export const getSingleNewBorn = async (req,res) =>{
  try {
      const {id} = req.params;
      const getNewBorn = await NewBorns.findByPk(id);
      if(!getNewBorn){
          return res.status(404).json({
              status: "404",
              message: "New born not found",
            });
      }
          return res.status(200).json({
              status: "200",
              message: "A new born retrieved successfully",
              data: getNewBorn,
            });
  
      
  } catch (error) {
      if(error.name === "SequelizeValidationError"){
          console.log("Validation error:" ,error.errors);
        }else{
          console.log("Unhandled error:",error);
        }
        return res.status(500).json({
          status: "500",
          message: "Failed to retrieve a new born",
          error: error.message,
        });
  }
};

export const updateNewBorn = async(req,res) =>{
  const {id} = req.params;
  try {
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
    const existingNewBorn = await NewBorns.findByPk(id);

    if (!existingNewBorn) {
      return res.status(404).json({
        status: "404",
        message: "New born not found",
      });
    }

    // Check if the update is within 24 hours
    const currentTime = new Date();
    const creationTime = new Date(existingNewBorn.createdAt);
    const timeDifference = currentTime - creationTime;
    const hoursDifference = timeDifference / (1000 * 60 * 60); // Convert milliseconds to hours

    if (hoursDifference > 24) {
      return res.status(403).json({
        status: "403",
        message: "Update not allowed after 24 hours",
      });
    }
  const values = {
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
    };
    const update = await NewBorns.update(values, {where:{id:id}});
    return res.status(200).json({
      status:"200",
      message:"New born updated",
    })
  } catch (error) {
      if (error.name === "SequelizeValidationError") {
          console.error("Validation errors:", error.errors);
        } else {
          console.error("Unhandled error:", error);
        }
        return res.status(500).json({
          status: "500",
          message: "Failed to update new born",
          error: error.message,
        });
  }
};