import { Router } from "express";
import AuthController from "../controllers/authControl.js";

const router = Router();

router.post("/register", AuthController.register)

export default router;