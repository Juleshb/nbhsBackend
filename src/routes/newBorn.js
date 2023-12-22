import express from "express";

import fileUpload from "../helper/multer";
import { nurses } from "../middleware/Authentication";
import { 
    addNewBorn,
 } from "../controller/newBornController";

 const newBoneRoute = express.Router();
 newBoneRoute.post("/newBorns/add",nurses,fileUpload.single("sex"),addNewBorn);

 export default newBoneRoute;