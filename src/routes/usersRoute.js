import express from "express";
import fileUpload from "../helper/multer";
import { admins } from "../middleware/Authentication";
import { 
    createUser,
    userLogin,
    getUsers,
    getSingleUser,
    updateUser,
    deleteUser,
 } from "../controller/userController";
 const userRoute = express.Router();
 userRoute.post("/users/register",fileUpload.single("profile"),createUser);
 userRoute.post("/users/login",fileUpload.single("profile"),userLogin);
 userRoute.put("/users/update/:id",fileUpload.single("profile"),updateUser);
 userRoute.get("/users/getall",getUsers);
 userRoute.get("/users/get/single/:id",getSingleUser);
 userRoute.delete("/users/delete/:id",admins,deleteUser);

 export default userRoute;