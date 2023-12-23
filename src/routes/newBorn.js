import express from "express";

import fileUpload from "../helper/multer";
import { nurses } from "../middleware/Authentication";
import { 
    addNewBorn,
    updateNewBorn,
    getSingleNewBorn,
    viewNewBorns,
 } from "../controller/newBornController";

 const newBoneRoute = express.Router();
 newBoneRoute.post("/newBorns/add",nurses,fileUpload.single("sex"),addNewBorn);
 newBoneRoute.put("/newBorns/update/:id",nurses,fileUpload.single("sex"),updateNewBorn);
 newBoneRoute.get("/newBorns/getSingle/:id",nurses,getSingleNewBorn);
 newBoneRoute.get("/newBorns/getAll",nurses,viewNewBorns);


 export default newBoneRoute;