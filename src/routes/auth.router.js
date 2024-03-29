import { Router } from "express";
import authController from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/sign-up", authController.signin);

export default authRouter;
