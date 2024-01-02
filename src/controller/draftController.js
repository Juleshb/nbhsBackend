import Database from "../Database/models";
const Drafts = Database["Drafts"];
const HealthCentres = Database["HealthCentres"]

// Function to generate a random code
const generateRandomCode = (healthCareId, date, newBornId) => {
  return `${healthCareId}-${date}-${newBornId}`;
};

let latestNumber = 0;

export const addBornDraft = async (req, res) => {
  try {
    const userId = req.loggedInUser.id;
    const bornIn = req.loggedInUser.HealthCentre;
    const getAll = await HealthCentres.findOne({where:{id:bornIn},
      attributes: ['HealthCentreCode'],});
      // Extract the healthCentreCode from the query result
    const healthCentreCode = getAll ? getAll.HealthCentreCode : null;

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
      OAEResult,
    } = req.body;
    const checkExisitingDraft = await Drafts.findOne({where:{recordedBy:userId}});
    if(checkExisitingDraft){
      return res.status(400).json({
        status:"400",
        message:"You have unsubmitted draft, first submit it."
      });
    }
    const createBorn = await Drafts.create({
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
      OAEResult,
      recordedBy: userId,
      generatedCode: generateRandomCode(healthCentreCode, currentDate, newBornId),
    });

    return res.status(200).json({
      status: "200",
      message: "New born added",
      data: createBorn,
    });
    
  }
 catch (error) {
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


export const viewDraftBorns = async (req,res) =>{
  try {
    const getDraftBorns = await Drafts.findAll({});
        return res.status(201).json({
            status: "201",
            message: "Draft data retrieved successfully",
            data: getDraftBorns,
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

export const getSingleDraftBorn = async (req,res) =>{
  try {
      const {id} = req.params;
      const getDraftBorn = await NewBorns.findByPk(id);
      if(!getDraftBorn){
          return res.status(404).json({
              status: "404",
              message: "Draft data not found",
            });
      }
          return res.status(200).json({
              status: "200",
              message: "Draft data retrieved successfully",
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
          message: "Failed to retrieve draft data",
          error: error.message,
        });
  }
};

export const updateDraftBorn = async(req,res) =>{
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
      OAEResult,
    } = req.body;
    const existingDraftBorn = await Drafts.findByPk(id);

    if (!existingDraftBorn) {
      return res.status(404).json({
        status: "404",
        message: "Draft not found",
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
    OAEResult,
    };
    const update = await Drafts.update(values, {where:{id:id}});
    return res.status(200).json({
      status:"200",
      message:"Draft data updated",
    })
  } catch (error) {
      if (error.name === "SequelizeValidationError") {
          console.error("Validation errors:", error.errors);
        } else {
          console.error("Unhandled error:", error);
        }
        return res.status(500).json({
          status: "500",
          message: "Failed to update draft data",
          error: error.message,
        });
  }
};

