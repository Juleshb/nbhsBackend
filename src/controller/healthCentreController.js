import Database from "../Database/models";
const HealthCentres = Database["HealthCentres"];


let latestNumber = 0;
// Function to generate a random code
const generateRandomCode = (healthCentreCode) => {
  return `${healthCentreCode}`;
};


export const addHealthCentre = async (req,res) =>{
    try {
      latestNumber++;
    const formattedNumber = padWithZeros(latestNumber, 3);
    const healthCentreCode = formattedNumber;
        const {name,provence,district} = req.body;
        const checkHealthCentre = await HealthCentres.findOne({where:{name:req.body.name}});
        if (checkHealthCentre){
            return res.status(400).json({
                status:"400",
                message:"HealthCentre already exists",
            });
        }
        const createHealthCentre = await HealthCentres.create({
            name,
            provence,
            district,
            HealthCentreCode: generateRandomCode(healthCentreCode),
        });
        return res.status(201).json({
            status: "201",
            message: "HealthCentres added",
            data: createHealthCentre,
        })
    } catch (error) {
        if(error.name === "SequelizeValidationError"){
            console.log("Validation error:" ,error.errors);
          }else{
            console.log("Unhandled error:",error);
          }
          return res.status(500).json({
            status: "500",
            message: "Failed to add a HealthCentre",
            error: error.message,
          });
    }
};
function padWithZeros(number, length) {
  return number.toString().padStart(length, '0');
};

//getting Institutions

export const getAllHealthCentre = async (req,res) =>{
    try {
        const getHealthCentre = await HealthCentres.findAll({});
        return res.status(201).json({
            status: "201",
            message: "HealthCentre retrieved successfully",
            data: getHealthCentre,
        })
    } catch (error) {
        if(error.name === "SequelizeValidationError"){
            console.log("Validation error:" ,error.errors);
          }else{
            console.log("Unhandled error:",error);
          }
          return res.status(500).json({
            status: "500",
            message: "Failed to retrieve HealthCentres",
            error: error.message,
          });
        
    }
};

// getting single Institutions

export const getSingleHealthCentre = async (req,res) =>{
    try {
        const {id} = req.params;
        const getHealthCentre = await HealthCentres.findByPk(id);
        if(!getHealthCentre){
            return res.status(404).json({
                status: "404",
                message: "HealthCentre not found",
              });
        }
            return res.status(200).json({
                status: "200",
                message: "A healthCentre retrieved successfully",
                data: getHealthCentre,
              });
    
        
    } catch (error) {
        if(error.name === "SequelizeValidationError"){
            console.log("Validation error:" ,error.errors);
          }else{
            console.log("Unhandled error:",error);
          }
          return res.status(500).json({
            status: "500",
            message: "Failed to retrieve a healthCentre",
            error: error.message,
          });
    }
};

// updating Institution
export const updateHealthCentre = async(req,res) =>{
    const {id} = req.params;
    try {
        const {name,provence,district} = req.body;
        if (name) {
            const checkName = await HealthCentres.findOne({
              where: { name: req.body.name },
            });
            if (checkName) {
              if (checkName.id != id) {
                return res.status(400).json({
                  status: "400",
                  message: "HealthCentre exist In Our Database",
                });
              }
            };
          }
    const user = await HealthCentres.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({
        status: "404",
        message: "Health centre not found",
      });
    }
    const values = {
        name,
        provence,
        district,
      };
      const update = await HealthCentres.update(values, {where:{id:id}});
      return res.status(200).json({
        status:"200",
        message:"HealthCentre updated",
      })
    } catch (error) {
        if (error.name === "SequelizeValidationError") {
            console.error("Validation errors:", error.errors);
          } else {
            console.error("Unhandled error:", error);
          }
          return res.status(500).json({
            status: "500",
            message: "Failed to update healthCentre",
            error: error.message,
          });
    }
};



// deleting a HealthCentre

export const deleteHealthCentre = async (req, res) =>{
    try {
      const {id} = req.params;
      const checkHealthCentreId = await HealthCentres.findByPk(id);
      if(!checkHealthCentreId){
        return res.status(404).json({
          status: "404",
          message: "HealthCentre not found",
        });
      }
      const deletedHealthCentre = await HealthCentres.destroy({where:{id:id}});
      return res.status(200).json({
        status: "200",
        message: "Institution with ID: "+ req.params.id + " deleted successfully",
        data: checkHealthCentreId,
      })
    } catch (error) {
      if(error.name === "SequelizeValidationError"){
        console.log("Validation error:" ,error.errors);
      }else{
        console.log("Unhandled error:",error);
      }
      return res.status(500).json({
        status: "500",
        message: "Failed to delete a healthCentre",
        error: error.message,
      });
      }
  }