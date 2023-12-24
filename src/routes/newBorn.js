import express from "express";

import fileUpload from "../helper/multer";
import { normal } from "../middleware/Authentication";
import { 
    addNewBorn,
    updateNewBorn,
    getSingleNewBorn,
    viewNewBorns,
 } from "../controller/newBornController";

 const newBoneRoute = express.Router();
 newBoneRoute.post("/newBorns/add",normal,fileUpload.single("sex"),addNewBorn);
 newBoneRoute.put("/newBorns/update/:id",normal,fileUpload.single("sex"),updateNewBorn);
 newBoneRoute.get("/newBorns/getSingle/:id",normal,getSingleNewBorn);
 newBoneRoute.get("/newBorns/getAll",normal,viewNewBorns);


 export default newBoneRoute;