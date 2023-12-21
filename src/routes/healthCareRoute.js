import express from "express";
import fileUpload from "../helper/multer";
import { admins } from "../middleware/Authentication";
import { 
    addHealthCentre,
    getAllHealthCentre,
    getSingleHealthCentre,
    updateHealthCentre,
    deleteHealthCentre,
 } from "../controller/healthCentreController";
 const healthCentreRoute = express.Router();
 healthCentreRoute.post("/healthcentre/add",admins,fileUpload.single("name"),addHealthCentre);
 healthCentreRoute.get("/healthcentre/getall",getAllHealthCentre);
 healthCentreRoute.get("/healthcentre/getsingle/:id",getSingleHealthCentre);
 healthCentreRoute.put("/healthcentre/update/:id",admins,fileUpload.single("name"),updateHealthCentre);
 healthCentreRoute.delete("/healthcentre/delete/:id",admins,deleteHealthCentre);

 export default healthCentreRoute;