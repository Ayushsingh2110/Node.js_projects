import { Router } from "express";
import AuthController from "../controllers/authControl.js";
import AuthMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/register", AuthController.register)
router.post("/login", AuthController.login)

//private route
router.get("/user", AuthMiddleware, AuthController.getUser)

export default router;