import express from "express";
import { login, logout, register, updateProfile } from "../controllers/user.controllers.js";
import authUser from "../middlewares/authUser.js";

const userRouter=express.Router()

userRouter.post("/register",register);
userRouter.post("/login",login)
userRouter.post("/logout",logout);
userRouter.post("/profile/update",authUser,updateProfile);

export default userRouter;

