import Database from "../Database/models";
const NewBorns = Database["NewBorns"];

const addNewBorn = async (req,res) =>{
    try {
        const nurseId = req.loggedInUser.id;
        const bornIn = req.loggedInUser.HealthCentre;
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
            ABRScale,
          } = req.body;
          if (!motherName || !fatherName || !maritalStatus || !phoneContact || 
            !province || !district || !dateOfBirth || !ageOfNewborn || 
            !maternalExplosureToOtotoxicDrugs || !historyOfMaternalAlcoholUseAndSmoking ||
             !maternalSevereDisease || !neonatalInfectionRisk || 
            !sex || !modeOfDelivery || !APGARSCOREAtBirth || !weightAtBirth||
             !newbornPositionInTheFamily || !presenceOfEarDysmorphism || 
            !historyOfHearingLossAmongFamilyMembers || !ABRScale || !OAEResult) {
            return res.status(400).json({
              status: "400",
              message: "All Fields Are Required",
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
}