import express from "express";
import fileUpload from "../helper/multer";
import { normal } from "../middleware/Authentication";
import { 
    addBornDraft,
    viewDraftBorns,
    getSingleDraftBorn,
    updateDraftBorn
 } from "../controller/draftController";

 const draftRoute = express.Router();
 draftRoute.post("/drafts/add",normal,fileUpload.single("sex"),addBornDraft);
 draftRoute.put("/drafts/update/:id",normal,fileUpload.single("sex"),updateDraftBorn);
 draftRoute.get("/drafts/getSingle/:id",normal,getSingleDraftBorn);
 draftRoute.get("/drafts/getAll",normal,viewDraftBorns);

 export default draftRoute;