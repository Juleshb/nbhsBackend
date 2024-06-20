import Database from "../Database/models";
const { Op } = require('sequelize');
const NewBorns = Database["NewBorns"];
const Drafts = Database["Drafts"];
const HealthCentres = Database["HealthCentres"]

const generateRandomCode = (healthCareId, date, newBornId) => {
  return `${healthCareId}-${date}-${newBornId}`;
};

let latestNumber = 0;
export const addNewBorn = async (req, res) => {
  try {
    const userId = req.loggedInUser.id;
    const bornIn = req.loggedInUser.HealthCentre;
    const getAll = await HealthCentres.findOne({
      where: { id: bornIn },
      attributes: ['HealthCentreCode'],
    });

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
      selectedmaternalDiseases,
      selectedhistoryOfMaternalAlcoholUseAndSmoking,
      selectedMaternalExplosuretoOtotoxicDrugs,
      historyOfMaternalAlcoholUseAndSmoking,
      maternalExplosureToOtotoxicDrugs,
      newbornPositionInTheFamily,
      presenceOfEarDysmorphism,
      historyOfHearingLossAmongFamilyMembers,
      OAEResult,
    } = req.body;

    if (
      !motherName ||
      !fatherName ||
      !maritalStatus ||
      !phoneContact ||
      !province ||
      !district ||
      !dateOfBirth ||
      !ageOfNewborn ||
      !sex ||
      !APGARSCOREAtBirth ||
      !weightAtBirth ||
      !neonatalInfectionRisk ||
      !maternalSevereDisease ||
      !historyOfMaternalAlcoholUseAndSmoking ||
      !maternalExplosureToOtotoxicDrugs ||
      !newbornPositionInTheFamily ||
      !presenceOfEarDysmorphism ||
      !historyOfHearingLossAmongFamilyMembers ||
      !OAEResult 
    ) {
      return res.status(400).json({
        status: "400",
        message: "All fields are required.",
      });
    }

    const checkExistingDraft = await Drafts.findOne({ where: { recordedBy: userId } });

if (checkExistingDraft) {
  // Check for null values in the draft record
  const draftData = checkExistingDraft.dataValues;

  // Count the number of fields with null values
  const nullValuesCount = Object.values(draftData).filter((value) => value === null);

  if (nullValuesCount.length == 1) {
    // Allow the user to insert into NewBorns
    // Insert data into NewBorns table
    try {
      await NewBorns.create({
        motherName: draftData.motherName,
        fatherName: draftData.fatherName,
        maritalStatus: draftData.maritalStatus,
        phoneContact: draftData.phoneContact,
        province: draftData.province,
        district: draftData.district,
        dateOfBirth: draftData.dateOfBirth,
        ageOfNewborn: draftData.ageOfNewborn,
        maternalExplosureToOtotoxicDrugs: draftData.maternalExplosureToOtotoxicDrugs,
        maternalSevereDisease: draftData.maternalSevereDisease,
        selectedmaternalDiseases: draftData.selectedmaternalDiseases,
        selectedhistoryOfMaternalAlcoholUseAndSmoking: draftData.selectedhistoryOfMaternalAlcoholUseAndSmoking,
        selectedMaternalExplosuretoOtotoxicDrugs: draftData.selectedMaternalExplosuretoOtotoxicDrugs,
        historyOfMaternalAlcoholUseAndSmoking: draftData.historyOfMaternalAlcoholUseAndSmoking,
        sex: draftData.sex,
        modeOfDelivery: draftData.modeOfDelivery,
        APGARSCOREAtBirth: draftData.APGARSCOREAtBirth,
        weightAtBirth: draftData.weightAtBirth,
        newbornPositionInTheFamily: draftData.newbornPositionInTheFamily,
        HealthCentre: draftData.HealthCentre,
        neonatalInfectionRisk: draftData.neonatalInfectionRisk,
        presenceOfEarDysmorphism: draftData.presenceOfEarDysmorphism,
        historyOfHearingLossAmongFamilyMembers: draftData.historyOfHearingLossAmongFamilyMembers,
        OAEResult: draftData.OAEResult,
        recordedBy: userId,
        generatedCode: draftData.generatedCode,
      });

      // Remove the record from Drafts table
      await Drafts.destroy({ where: { recordedBy: userId } });

      return res.status(200).json({
        status: "200",
        message: "Data successfully submitted from draft to NewBorns.",
      });
    } catch (error) {
      console.error("Error inserting data into NewBorns:", error);
      return res.status(500).json({
        status: "500",
        message: "Failed to insert data into NewBorns.",
        error: error.message,
      });
    }
  } else {
    return res.status(400).json({
      status: "400",
      message: "Your draft record contains more than one null value. Please complete the form before submitting.",
    });
  }
} else {
      // No draft found for the logged-in user, save data directly to NewBorns
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
        selectedmaternalDiseases,
        selectedhistoryOfMaternalAlcoholUseAndSmoking,
        selectedMaternalExplosuretoOtotoxicDrugs,
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
  return number.toString().padStart(length, "0");
}


export const viewNewBorns = async (req,res) =>{
  try {
    const userId = req.loggedInUser.id;
    const getBorns = await NewBorns.findAll({where:{recordedBy:userId}});
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
    const userId = req.loggedInUser.id;
      const getNewBorn = await NewBorns.findByPk(id,{where:{recordedBy:userId}});
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

export const searchNewBorn = async (req, res) => {
  try {
    const { search } = req.query;
    const userId = req.loggedInUser.id;

    // Log the search query and user ID for debugging
    console.log("Search Query:", search);
    console.log("User ID:", userId);

    if (!search) {
      return res.status(400).json({
        status: "400",
        message: "Search parameter is required",
      });
    }

    // Define the search criteria using Sequelize's `like` operator
    const criteria = {
      recordedBy: userId,
      [Op.or]: [
        { motherName: { [Op.like]: `%${search}%` } },
        { fatherName: { [Op.like]: `%${search}%` } }
      ]
    };

    // Log the constructed criteria for debugging
    console.log("Search Criteria:", criteria);

    const foundNewBorns = await NewBorns.findAll({ where: criteria });

    if (!foundNewBorns || foundNewBorns.length === 0) {
      return res.status(404).json({
        status: "404",
        message: "No matching newborns found",
      });
    }

    return res.status(200).json({
      status: "200",
      message: "Matching newborns retrieved successfully",
      data: foundNewBorns,
    });

  } catch (error) {
    console.error("Unhandled error:", error);
    return res.status(500).json({
      status: "500",
      message: "Failed to retrieve newborns",
      error: error.message,
    });
  }
};
// Getting all borns

export const getNewBorns = async (req,res) =>{
  try {
      const getnewBorns = await NewBorns.findAll({});
      return res.status(201).json({
          status: "201",
          message: "all borns retrieved successfully",
          data: getnewBorns,
      })
  } catch (error) {
      if(error.name === "SequelizeValidationError"){
          console.log("Validation error:" ,error.errors);
        }else{
          console.log("Unhandled error:",error);
        }
        return res.status(500).json({
          status: "500",
          message: "Failed to retrieve all borns",
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
      selectedmaternalDiseases,
      selectedhistoryOfMaternalAlcoholUseAndSmoking,
      selectedMaternalExplosuretoOtotoxicDrugs,
      historyOfMaternalAlcoholUseAndSmoking,
      maternalExplosureToOtotoxicDrugs,
      newbornPositionInTheFamily,
      presenceOfEarDysmorphism,
      historyOfHearingLossAmongFamilyMembers,
      OAEResult,
    } = req.body;
    const existingNewBorn = await NewBorns.findByPk(id);

    if (!existingNewBorn) {
      return res.status(404).json({
        status: "404",
        message: "New born not found",
      });
    }
    const loggedInUserRole = req.loggedInUser.role; 
     const isNurse = loggedInUserRole === "nurse";

    if (isNurse) {
      const currentTime = new Date();
      const creationTime = new Date(existingNewBorn.createdAt);
      const timeDifference = currentTime - creationTime;
      const hoursDifference = timeDifference / (1000 * 60 * 60);

      if (hoursDifference > 24) {
        return res.status(403).json({
          status: "403",
          message: "Update not allowed after 24 hours",
        });
      }
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
    selectedmaternalDiseases,
    selectedhistoryOfMaternalAlcoholUseAndSmoking,
    selectedMaternalExplosuretoOtotoxicDrugs,
    historyOfMaternalAlcoholUseAndSmoking,
    maternalExplosureToOtotoxicDrugs,
    newbornPositionInTheFamily,
    presenceOfEarDysmorphism,
    historyOfHearingLossAmongFamilyMembers,
    OAEResult,
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

//Get borns with OAE Result of Refer
export const getBornsWithOAEResultOfRefer = async (req,res) =>{
  const refer = "Refer";
  try {
      const getNewBorn = await NewBorns.findAll({where:{OAEResult:refer, ABRScale: null}});
          return res.status(200).json({
              status: "200",
              message: "Newborns with Refer OAE Result retrieved successfully",
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
          message: "Failed to retrieve new borns",
          error: error.message,
        });
  }
};

// getBornsWithOAEResultOfReferandABRScalenotnull 
export const getBornsWithOAEResultOfReferandABRScalenotnull = async (req,res) =>{
  const refer = "Refer";
  try {
    const getNewBorn = await NewBorns.findAll({
      where: {
        OAEResult: refer,
        ABRScale: {
          [Op.ne]: null
        }
      }
    });

    return res.status(200).json({
      status: "200",
      message: "Newborns with Refer OAE Result and non-null ABRScale retrieved successfully",
      data: getNewBorn,
    });
  } catch (error) {
    if(error.name === "SequelizeValidationError"){
      console.log("Validation error:" ,error.errors);
    } else {
      console.log("Unhandled error:",error);
    }
    return res.status(500).json({
      status: "500",
      message: "Failed to retrieve new borns",
      error: error.message,
    });
  }
};


//update new borns with OAE Result of Refer

export const updateBornWithReferOAEResult = async(req,res) =>{
  const {id} = req.params;
  try {
    const refer = "Refer";
    const {
      ABRScale,
    } = req.body;
    const existingNewBorn = await NewBorns.findByPk(id);

    if (!existingNewBorn) {
      return res.status(404).json({
        status: "404",
        message: "New born not found",
      });
    }
    else if(existingNewBorn.OAEResult !== refer){
      return res.status(400).json({
        status: "400",
        message: "Born's OAEResult is not Refer",
      });
    }else{
  const values = {
    ABRScale,
    };
    const update = await NewBorns.update(values,{where:{id:id}});
    return res.status(200).json({
      status:"200",
      message:"Born with OAE Result of Refer updated",
      data: update,
    })
  } 
}catch (error) {
      if (error.name === "SequelizeValidationError") {
          console.error("Validation errors:", error.errors);
        } else {
          console.error("Unhandled error:", error);
        }
        return res.status(500).json({
          status: "500",
          message: "Failed to update born with OAE Result of Refer ",
          error: error.message,
        });
  }
};
