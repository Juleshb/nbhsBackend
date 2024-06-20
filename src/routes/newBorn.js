import express from "express";
import fileUpload from "../helper/multer";
import { normal, ideologist, admins } from "../middleware/Authentication";
import {
  addNewBorn,
  updateNewBorn,
  getSingleNewBorn,
  viewNewBorns,
  getBornsWithOAEResultOfRefer,
  updateBornWithReferOAEResult,
  getNewBorns,
  getBornsWithOAEResultOfReferandABRScalenotnull,
  searchNewBorn
} from "../controller/newBornController";

const newBornRoute = express.Router();

newBornRoute.post("/newBorns/add", normal, fileUpload.single("sex"), addNewBorn);
newBornRoute.put("/newBorns/update/:id", normal, fileUpload.single("sex"), updateNewBorn);
newBornRoute.put("/newBorns/updateRefer/:id", ideologist, fileUpload.single("sex"), updateBornWithReferOAEResult);
newBornRoute.get("/newBorns/getSingle/:id", normal, getSingleNewBorn);
newBornRoute.get("/newBorns/getAll", normal, viewNewBorns);
newBornRoute.get("/newBorns/getRefers", normal, getBornsWithOAEResultOfRefer);
newBornRoute.get("/newBorns/getAllborns", admins, getNewBorns);
newBornRoute.get("/newBorns/getAllabrscale", normal, getBornsWithOAEResultOfReferandABRScalenotnull);

// New route for searching newborns by username or parent name
newBornRoute.get("/newBorns/search", normal, searchNewBorn);

export default newBornRoute;